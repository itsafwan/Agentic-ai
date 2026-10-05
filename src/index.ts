import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import envConfig from "./config.js";

const model = new ChatGoogleGenerativeAI({
  apiKey: envConfig.GOOGLE_GENAI_API_KEY,
  model: "gemini-3.8-flash",
});

const response = await model.invoke("create a code of ts that calculates number like 1 + 1 or any number");

console.log(response);