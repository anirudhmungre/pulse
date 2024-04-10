import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";

export const retros = pgTable("retros", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    ownerId: integer("owner_id").references(() => users.id).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
