
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function getAnswerExplanation(question: string, correctAnswer: string, category: string): Promise<string> {
  if (!API_KEY) return "A explicação via IA não está disponível sem uma chave de API.";

  try {
    const prompt = `
      Você é um instrutor de autoescola especialista no CTB (Código de Trânsito Brasileiro).
      Explique brevemente por que a resposta "${correctAnswer}" é a correta para a seguinte pergunta de ${category}:
      "${question}"
      Seja didático e use no máximo 3 sentenças.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Não foi possível gerar uma explicação no momento.";
  } catch (error) {
    console.error("Error fetching explanation:", error);
    return "Erro ao carregar a explicação da IA.";
  }
}
