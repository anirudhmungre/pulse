import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { retros } from "./retros";

export const items = pgTable("item", {
    id: serial("id").primaryKey(),
    retroId: integer("retroId").references(() => retros.id).notNull(),
    userId: text("userId").references(() => users.id).notNull(),
    category: text("category").notNull(),
    value: text("value").notNull(),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
});
