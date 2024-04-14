import { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import { accounts, healthChecks, items, retros, sessions, users, verificationTokens } from './schema';

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

export type Account = InferSelectModel<typeof accounts>;
export type NewAccount = InferInsertModel<typeof accounts>;

export type Session = InferSelectModel<typeof sessions>;
export type NewSession = InferInsertModel<typeof sessions>;

export type VerificationToken = InferSelectModel<typeof verificationTokens>;
export type NewVerificationToken = InferInsertModel<typeof verificationTokens>;

export type Retro = InferSelectModel<typeof retros>;
export type NewRetro = InferInsertModel<typeof retros>;

export type Item = InferSelectModel<typeof items>;
export type NewItem = InferInsertModel<typeof items>;

export type HealthCheck = InferSelectModel<typeof healthChecks>;
export type NewHealthCheck = InferInsertModel<typeof healthChecks>;
