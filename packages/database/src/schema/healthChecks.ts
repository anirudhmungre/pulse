import { integer, pgTable, serial, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { retros } from "./retros";

export const healthChecks = pgTable("health_checks", {
    id: serial("id").primaryKey(),
    retroId: integer("retro_id").references(() => retros.id).notNull(),
    userId: integer("user_id").references(() => users.id).notNull(),
    value: integer("value").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
