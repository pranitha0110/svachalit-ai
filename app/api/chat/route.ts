import { NextResponse } from "next/server";
import { generateAIResponse } from "../../lib/gemini";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY:", body);

    const { message } = body;

    console.log("MESSAGE:", message);

    const aiReply = await generateAIResponse(message);

    console.log("AI REPLY:", aiReply);

    return NextResponse.json({
      success: true,
      reply: aiReply,
    });

  } catch (error) {

    console.error("FULL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "AI generation failed",
      },
      { status: 500 }
    );
  }
}