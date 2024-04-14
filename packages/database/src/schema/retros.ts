import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const retros = pgTable("retro", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    ownerId: text("ownerId").references(() => users.id).notNull(),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
});
