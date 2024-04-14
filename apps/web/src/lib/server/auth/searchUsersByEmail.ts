import { db, type User } from "database";

export default async function searchUsersByEmail(email: string): Promise<User[]> {
  return await db.query.users.findMany({
    where: (users, {like}) => like(users.email, `%${email}%`)
  });
}
