// app/api/generate/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY!; // Ensure your API key is set in your environment variables
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-002",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function POST(request: Request) {
  const { input } = await request.json(); // Extract the input from the request body

  // Ensure input is a string, if it's an object, convert it to string format
  const inputString = typeof input === "string" ? input : JSON.stringify(input);

  // Create the new input string for the AI model
  const newinput = `${inputString} imagin user as solo leveling character based on his/her github profile generate the anime style summry according to that  give me all of that in  json format containing user name as name and also make the summry not more then 5 line and write the summry in anime style as  summary and rank and quote i do not want any extra information`;

  // Log the new input to verify its structure

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(newinput);
    const output = result.response; // Adjust this based on the actual response structure

    return NextResponse.json({ output });
  } catch (error) {
    console.error("Error generating response:", error);
    return NextResponse.json(
      { error: "Error generating response" },
      { status: 500 }
    );
  }
}
