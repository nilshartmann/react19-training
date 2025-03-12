import { z } from "zod";

export const CardSchema = z.object({
  message: z.string().min(5, "Please enter at least 5 chars for the message."),
  imageDecoration: z.boolean(),
  imageCaption: z.string().optional(),
});

export type ICardSchema = z.infer<typeof CardSchema>;
