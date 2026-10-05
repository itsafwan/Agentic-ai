import { configDotenv } from "dotenv";

configDotenv();

const requiredEnvVariables = ["GOOGLE_GENAI_API_KEY"] as const;

requiredEnvVariables.forEach((variableName) => {
  if (!process.env[variableName]) {
    throw new Error(`Environment variable ${variableName} is required but not defined.`);
  }
});

const envConfig = {
  GOOGLE_GENAI_API_KEY: process.env.GOOGLE_GENAI_API_KEY || "",
};

export default envConfig;