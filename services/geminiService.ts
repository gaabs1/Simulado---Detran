
import { GoogleGenAI } from "@google/genai";

// Get an explanation for the correct answer using Gemini API.
export async function getAnswerExplanation(question: string, correctAnswer: string, category: string): Promise<string> {
  try {
    // Use process.env.API_KEY directly as it is a hard requirement in the guidelines.
    // Creating a new instance before the call ensures the latest key is used.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      Você é um instrutor de autoescola especialista no CTB (Código de Trânsito Brasileiro).
      Explique brevemente por que a resposta "${correctAnswer}" é a correta para a seguinte pergunta de ${category}:
      "${question}"
      Seja didático e use no máximo 3 sentenças.
    `;

    // Querying the Gemini model with both the model name and the prompt.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    // Accessing the .text property directly to get the generated content.
    return response.text || "Não foi possível gerar uma explicação no momento.";
  } catch (error) {
    console.error("Error fetching explanation:", error);
    return "Erro ao carregar a explicação da IA.";
  }
}
