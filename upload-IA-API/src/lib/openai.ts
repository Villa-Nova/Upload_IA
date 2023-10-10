// Config da lib openai.

import "dotenv/config";
import { OpenAI } from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});