import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors"
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";

const app = fastify();
const PORT = 3333;

app.register(fastifyCors, {
  // URL frontend.
  origin: "*",
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app.listen({
  port: PORT,
}).then(() => {
  console.log(`HTTP Server Running on PORT:${PORT}`);
});

// Todos os modules executados pelo register devem ser async.
// Register é a forma do fastify ler as rotas.