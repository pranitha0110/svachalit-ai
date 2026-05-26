import { NextResponse } from "next/server";
import { generateAIResponse } from "@/app/lib/gemini";

export async function POST(req: Request) {

  try {

    const formData = await req.formData();

    const incomingMessage =
      formData.get("Body")?.toString() || "";

    console.log("WHATSAPP MESSAGE:", incomingMessage);

    const aiReply =
      await generateAIResponse(incomingMessage);

    const twiml = `
<Response>
<Message>
${aiReply}
</Message>
</Response>
`;

    return new Response(twiml, {
      headers: {
        "Content-Type": "text/xml",
      },
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      success: false,
    });
  }
}