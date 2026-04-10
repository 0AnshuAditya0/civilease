import { NextResponse } from "next/server";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HF_TOKEN || "");

export async function POST(request) {
  try {
    const { message, documentContext, history } = await request.json();

    if (!process.env.HF_TOKEN) {
      return NextResponse.json({ reply: "API configuration missing. Please check HF_TOKEN." }, { status: 500 });
    }

    const systemPrompt = `You are CivilEase, a helpful and authoritative AI assistant for Indian citizens. 
Context of current document: ${documentContext || "No document uploaded yet."}
Answer the user's questions about government procedures, legal notices, and compliance clearly and politely in plain language. If the user greets you, greet them back warmly as "Namaste". 
Keep responses concise and informative.`;

    const chatHistory = history.map(h => ({
      role: h.role,
      content: h.content
    }));

    const response = await hf.chatCompletion({
      model: "Qwen/Qwen2.5-72B-Instruct",
      messages: [
        { role: "system", content: systemPrompt },
        ...chatHistory,
        { role: "user", content: message }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    const reply = response.choices[0]?.message?.content || "Namaste! I am here to help, but I couldn't generate a response right now. Please try again later.";

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      reply: "I'm having a bit of trouble connecting to my knowledge base. Please try again in a moment."
    }, { status: 500 });
  }
}

