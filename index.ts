import {ChatMistralAI} from "@langchain/mistralai"
import envConfig from "./config"


const model = new ChatMistralAI({
  model:"mistral-small-latest",
  apiKey: envConfig.MISTRAL_AI_KEY
})