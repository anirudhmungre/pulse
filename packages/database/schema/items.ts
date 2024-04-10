import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { retros } from "./retros";

export const items = pgTable("items", {
    id: serial("id").primaryKey(),
    retroId: integer("retro_id").references(() => retros.id).notNull(),
    userId: integer("user_id").references(() => users.id).notNull(),
    category: text("category").notNull(),
    value: text("value").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
