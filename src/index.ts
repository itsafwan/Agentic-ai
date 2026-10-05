import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import envConfig from "./config.js";

const model = new ChatGoogleGenerativeAI({
  apiKey: envConfig.GOOGLE_GENAI_API_KEY,
  model: "gemini-3.8-flash",
});

const response = await model.invoke("hello");

console.log(response);