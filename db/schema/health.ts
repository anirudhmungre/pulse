import { integer, pgTable, serial, timestamp } from "drizzle-orm/pg-core";
import { user } from "./user";
import { retro } from "./retro";

export const health = pgTable("health", {
    id: serial("id").primaryKey(),
    retroId: integer("retro_id").references(() => retro.id).notNull(),
    userId: integer("user_id").references(() => user.id).notNull(),
    value: integer("value").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
