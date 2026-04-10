import { GoogleGenerativeAI } from "@google/generative-ai";


export async function analyzeDocument(text, language) {
  // Grab all available keys dynamically
  const keys = [
    process.env.GEMINI_API_KEY,
    process.env.GEMINI_API_KEY2,
    process.env.GEMINI_API_KEY3
  ].filter(Boolean);

  if (keys.length === 0) {
    throw new Error("No GEMINI_API_KEY found in the environment variables.");
  }

  const prompt = `
You are SCivilEase, an AI expert in Indian government procedures.
Analyze the following document and extract all relevant information into the specified JSON structure.

Rules for extraction:
1. Identify the document type, authority, and jurisdiction.
2. Extract all monetary values (demand, penalties, interest).
3. List all required documents and steps.
4. Identify deadlines and consequences of non-compliance.
5. Provide a 'simplified_summary' in plain language.
6. Return ONLY valid JSON matching this exact structure:

{
  "document_identity": {
    "issuing_authority": "string",
    "department": "string",
    "document_type": "string",
    "reference_number": "string",
    "issue_date": "string",
    "jurisdiction": "string"
  },
  "monetary_elements": {
    "amount_demand": 0,
    "currency": "string",
    "breakdown": { "item": 0 },
    "payment_deadline": "string",
    "late_fee_structure": "string"
  },
  "procedural_requirements": {
    "mandatory_documents": ["string"],
    "optional_documents": ["string"],
    "verification_steps": ["step 1"],
    "physical_visit_required": false,
    "visit_location": "string",
    "estimated_processing_time": "string"
  },
  "legal_consequences": {
    "non_payment_penalty": "string",
    "appeal_available": false,
    "appeal_deadline": "string",
    "appeal_authority": "string"
  },
  "contact_information": {
    "helpline": "string",
    "email": "string",
    "ward_officer": "string"
  },
  "simplified_summary": "plain language summary",
  "language": "${language}",
  "mermaid": "valid mermaid.js flowchart showing the user's journey. Do not use markdown inside."
}
IMPORTANT: DO NOT use markdown code blocks like \`\`\`json. Return raw JSON text only.

Document text to analyze:
"""
${text}
"""
`;

  let lastError;

  // Key Rotation Loop
  for (let i = 0; i < keys.length; i++) {
    try {
      const genAI = new GoogleGenerativeAI(keys[i]);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      
      const result = await model.generateContent(prompt);
      let responseText = result.response.text();
      
      // Aggressively strip any markdown fences 
      responseText = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();

      try {
        return JSON.parse(responseText);
      } catch (parseError) {
        console.error("Failed to parse Gemini JSON:", responseText);
        throw new Error("The AI returned malformed data. Please try again.");
      }
      
    } catch (error) {
      console.error(`Gemini Error on Key ${i + 1}:`, error.message || error);
      lastError = error;
      
      continue;
    }
  }

  throw new Error("All active API keys failed or hit rate limits: " + (lastError?.message || "Unknown error"));
}
