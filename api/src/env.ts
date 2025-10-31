import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "stage"])
    .default("development"),
  PORT: z.coerce.number().default(3333),

  DATABASE_URL: z.url(),
});

export const env = envSchema.parse(process.env);
