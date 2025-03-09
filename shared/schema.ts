import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { z } from "zod";

// Basic greeting model
export const greetings = pgTable("greetings", {
  id: serial("id").primaryKey(),
  message: text("message").notNull(),
});

// Type for frontend to consume
export type Greeting = {
  message: string;
};
