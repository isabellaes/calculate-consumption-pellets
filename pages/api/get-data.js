import { sql } from "@vercel/postgres";

export default async function handler(response) {
  const pellets = await sql`SELECT * FROM pellets;`;
  return response.status(200).json({ pellets });
}
