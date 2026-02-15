import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("zeforabliss");

    const users = await db.collection("users").find().toArray();

    return NextResponse.json({
      status: "DB Connected",
      usersCount: users.length,
    });

  } catch (error: any) {

    console.error("DB ERROR:", error);

    return NextResponse.json(
      { error: "DB Connection Failed" },
      { status: 500 }
    );
  }
}
