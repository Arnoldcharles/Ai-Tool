import { NextResponse } from "next/server";
import { Configuration, OpenAI } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI(configuration);

export async function POST(req: Request) {
  const { message } = await req.json();

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  });

  return NextResponse.json({
    response: completion.data.choices[0].message?.content,
  });
}
