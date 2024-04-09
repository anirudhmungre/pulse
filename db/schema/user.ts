import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
