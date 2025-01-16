import db from "../../../db";
import { advocates } from "@/db/schemas/advocates";

export async function GET(): Promise<Response> {
  const data = await db.select().from(advocates);

  return Response.json({ data });
}
