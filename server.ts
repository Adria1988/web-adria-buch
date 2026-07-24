import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Always serve public directory for images and media
app.use(express.static(path.join(process.cwd(), "public")));

// Initialize Gemini Client server-side
const getAiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// API Endpoint for AI Archaeological Reconstruction & Analysis
app.post("/api/analyze-artifact", async (req, res) => {
  try {
    const { prompt, siteName, era, imageBase64 } = req.body;
    const ai = getAiClient();

    if (!ai) {
      return res.status(500).json({
        error: "Clave de API de Gemini no configurada.",
        simulated: true,
      });
    }

    const systemInstruction = `
Eres una Inteligencia Artificial arqueológica avanzada desarrollada en colaboración con Adrià Buch (AdTech Developer & Graduado en Historia por la UB).
Tu objetivo es realizar un análisis científico, estratigráfico e histórico detallado de restos arqueológicos, fotografías antiguas o yacimientos en ruinas.
Proporciona siempre la respuesta estructurada en formato JSON estricto con los siguientes campos:
- siteTitle: Nombre formal del hallazgo o yacimiento
- period: Época o datación estimada (ej. Siglo II a.C., Época Ibérica tardía, Imperio Romano)
- analysisText: Descripción técnica detallada del análisis estratigráfico e hipótesis constructiva
- materialBreakdown: Lista de materiales detectados o inferidos (mortero, piedra seca, adobe, frescos, madera de pino)
- promptFor3D: Un prompt en inglés optimizado para renderizado fotorrealista 3D de la reconstrucción
- preservationStatus: Estado de conservación (ej. Crítico, Excelente, En riesgo de erosión)
- recommendedAction: Recomendación de intervención o conservación preventiva
`;

    const contents: any[] = [];
    if (imageBase64) {
      // Remove data URL prefix if present
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      contents.push({
        inlineData: {
          mimeType: "image/jpeg",
          data: cleanBase64,
        },
      });
    }

    const userQuery = prompt
      ? `Análisis de: ${siteName || "Yacimiento"} (${era || "Desconocido"}). Contexto: ${prompt}`
      : `Realiza un análisis arqueológico completo y reconstrucción del yacimiento ${siteName || "Ibérico/Romano"}.`;

    contents.push({ text: userQuery });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "{}";
    try {
      const parsed = JSON.parse(text);
      res.json(parsed);
    } catch {
      res.json({
        siteTitle: siteName || "Yacimiento Arqueológico",
        period: era || "Siglo III a.C.",
        analysisText: text,
        materialBreakdown: ["Mampostería de piedra", "Mortero de cal", "Cerámica sigillata"],
        promptFor3D: "Cinematic 8k render of ancient stone ruins reconstructed with authentic wooden beams and red clay tiles",
        preservationStatus: "Estable con monitoreo digital",
        recommendedAction: "Escaneo fotogramétrico de superficie continuo",
      });
    }
  } catch (error: any) {
    console.error("Error in /api/analyze-artifact:", error);
    res.status(500).json({
      error: error.message || "Error al procesar el análisis arqueológico.",
    });
  }
});

async function startServer() {
  // Vite middleware in development mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
