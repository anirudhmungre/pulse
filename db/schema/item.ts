import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./user";
import { retro } from "./retro";

export const item = pgTable("item", {
    id: serial("id").primaryKey(),
    retroId: integer("retro_id").references(() => retro.id).notNull(),
    userId: integer("user_id").references(() => user.id).notNull(),
    category: text("category").notNull(),
    value: text("value").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
