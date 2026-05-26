import { NextResponse } from "next/server";
import { generateAIResponse } from "../../lib/gemini";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { message } = body;

    const prompt = `
You are an AI sales intelligence system.

Analyze this customer message:

"${message}"

Return ONLY valid JSON in this exact format:

{
  "leadScore": number,
  "urgency": "Low | Medium | High",
  "intent": "Support | Pricing | Purchase | Inquiry",
  "sentiment": "Positive | Neutral | Negative",
  "estimatedBudget": "Low | Medium | High"
}
`;

    const aiReply = await generateAIResponse(prompt);

if (!aiReply) {
  return NextResponse.json(
    {
      success: false,
      error: "Analysis failed: empty AI response",
    },
    { status: 500 }
  );
}

const parsedAnalysis = JSON.parse(aiReply);

return NextResponse.json({
  success: true,
  analysis: parsedAnalysis,
});

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        error: "Analysis failed",
      },
      { status: 500 }
    );
  }
}