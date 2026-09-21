import { configDotenv } from "dotenv";

configDotenv();

if (!process.env.MISTRAL_AI_KEY) {
  throw new Error("MISTRAL_AI_KEY is required but not defined.");
}

const envConfig = {
  MISTRAL_AI_KEY: process.env.MISTRAL_AI_KEY || "",
};

export default envConfig;