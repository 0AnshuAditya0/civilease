import { GoogleGenAI, Type } from "@google/genai";
import { ExtractedData, SceneData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const processDocument = async (base64Image: string, mimeType: string): Promise<ExtractedData> => {
  const model = "gemini-3-flash-preview";
  
  const prompt = `
    You are SARKAR-SARAL, an AI expert in Indian government procedures.
    Analyze the provided government document image and extract all relevant information into the specified JSON structure.
    
    Rules for extraction:
    1. Identify the document type, authority, and jurisdiction.
    2. Extract all monetary values (demand, penalties, interest).
    3. List all required documents and steps.
    4. Identify deadlines and consequences of non-compliance.
    5. Provide a 'simplified_summary' in plain language (6th-grade reading level) that explains exactly what the user needs to do next.
    6. Detect the primary language of the document.
    
    Return ONLY the JSON object.
  `;

  const response = await ai.models.generateContent({
    model,
    contents: [
      {
        parts: [
          { text: prompt },
          { inlineData: { data: base64Image, mimeType } }
        ]
      }
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          document_identity: {
            type: Type.OBJECT,
            properties: {
              issuing_authority: { type: Type.STRING },
              department: { type: Type.STRING },
              document_type: { type: Type.STRING },
              reference_number: { type: Type.STRING },
              issue_date: { type: Type.STRING },
              jurisdiction: { type: Type.STRING }
            }
          },
          monetary_elements: {
            type: Type.OBJECT,
            properties: {
              amount_demand: { type: Type.NUMBER },
              currency: { type: Type.STRING },
              breakdown: { type: Type.OBJECT },
              payment_deadline: { type: Type.STRING },
              late_fee_structure: { type: Type.STRING }
            }
          },
          procedural_requirements: {
            type: Type.OBJECT,
            properties: {
              mandatory_documents: { type: Type.ARRAY, items: { type: Type.STRING } },
              optional_documents: { type: Type.ARRAY, items: { type: Type.STRING } },
              verification_steps: { type: Type.ARRAY, items: { type: Type.STRING } },
              physical_visit_required: { type: Type.BOOLEAN },
              visit_location: { type: Type.STRING },
              estimated_processing_time: { type: Type.STRING }
            }
          },
          legal_consequences: {
            type: Type.OBJECT,
            properties: {
              non_payment_penalty: { type: Type.STRING },
              appeal_available: { type: Type.BOOLEAN },
              appeal_deadline: { type: Type.STRING },
              appeal_authority: { type: Type.STRING }
            }
          },
          contact_information: {
            type: Type.OBJECT,
            properties: {
              helpline: { type: Type.STRING },
              email: { type: Type.STRING },
              ward_officer: { type: Type.STRING }
            }
          },
          simplified_summary: { type: Type.STRING },
          language: { type: Type.STRING }
        }
      }
    }
  });

  return JSON.parse(response.text);
};

export const generateSceneData = async (extractedData: ExtractedData): Promise<SceneData> => {
  const model = "gemini-3-flash-preview";
  
  const prompt = `
    Based on the following extracted government procedure data, generate a 3D scene plan for a Three.js visualization.
    The scene should be a path representing the user's journey to complete the procedure.
    
    Data: ${JSON.stringify(extractedData)}
    
    Generate a list of steps. Each step needs:
    - id: unique string
    - title: short title
    - description: what happens at this step
    - position: [x, y, z] coordinates (start at [0,0,0], move along Z axis)
    - type: 'start', 'document', 'office', 'payment', or 'success'
    
    Also provide a 'narrative' script that a voice assistant would say to guide the user through this visual journey.
    
    Return ONLY the JSON object.
  `;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          steps: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                position: { type: Type.ARRAY, items: { type: Type.NUMBER } },
                type: { type: Type.STRING }
              }
            }
          },
          narrative: { type: Type.STRING }
        }
      }
    }
  });

  return JSON.parse(response.text);
};

export const chatWithAssistant = async (query: string, context: ExtractedData, history: any[]) => {
  const model = "gemini-3-flash-preview";
  
  const chat = ai.chats.create({
    model,
    config: {
      systemInstruction: `
        You are SARKAR-SARAL Assistant. You help Indian citizens understand government documents.
        Context about the current document: ${JSON.stringify(context)}
        
        Guidelines:
        1. Be extremely helpful, patient, and clear.
        2. Use simple language (avoid legal jargon).
        3. If the user asks about consequences, be honest but reassuring about the steps to fix it.
        4. If they ask about language, you can translate your responses.
        5. Always refer back to the specific details in the document context.
      `
    },
    history
  });

  const result = await chat.sendMessage({ message: query });
  return result.text;
};
