import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import ScalarApiReference from "@scalar/fastify-api-reference";
import fastify from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env";
import { listWebhooks } from "./routes/list-webhooks";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
  origin: true,
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  // credentials: true,
});

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Webhooks Inspector API",
      description: "Api for capturing and inspecting webhooks requests",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});

app.register(ScalarApiReference, {
  routePrefix: "/docs",
});

app.register(listWebhooks);

app.listen({ port: env.PORT, host: "0.0.0.0" }).then(() => {
  console.log(" 🚀 Server is running on http://localhost:3333");
  console.log(" 📖 Swagger docs available at http://localhost:3333/docs");
});
