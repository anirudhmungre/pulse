import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { retros } from "./retros";

export const healthChecks = pgTable("health_check", {
    id: serial("id").primaryKey(),
    retroId: integer("retroId").references(() => retros.id).notNull(),
    userId: text("userId").references(() => users.id).notNull(),
    value: integer("value").notNull(),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
});
