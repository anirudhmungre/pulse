import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./user";

export const retro = pgTable("retro", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    ownerId: integer("owner_id").references(() => user.id).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
