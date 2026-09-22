import {ChatMistralAI} from "@langchain/mistralai"
import envConfig from "./config"


const Model = new ChatMistralAI({
  model:"mistral-small-latest",
  apiKey: envConfig.MISTRAL_AI_KEY
})

const response = await Model.invoke("hello")

console.log(response)