import { z } from "zod";

export const CardDtoSchema = z.object({
  id: z.string(),
  message: z.string().min(4),
  image: z.object({
    name: z.string(),
    caption: z.string().optional(),
    decoration: z.boolean(),
  }),
  likes: z.number().default(0),
});

export type ICardDtoSchema = z.infer<typeof CardDtoSchema>;
