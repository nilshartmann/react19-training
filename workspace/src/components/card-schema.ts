import { z } from "zod";

// remove the ":any" type annotation before constructing your schema!
export const CardSchema: any = {};

export type ICardSchema = z.infer<typeof CardSchema>;
