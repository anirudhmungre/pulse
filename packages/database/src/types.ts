import { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import { healthChecks, items, retros, users } from './schema';

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

export type Retro = InferSelectModel<typeof retros>;
export type NewRetro = InferInsertModel<typeof retros>;


export type Item = InferSelectModel<typeof items>;
export type NewItem = InferInsertModel<typeof items>;

export type HealthCheck = InferSelectModel<typeof healthChecks>;
export type NewHealthCheck = InferInsertModel<typeof healthChecks>;
