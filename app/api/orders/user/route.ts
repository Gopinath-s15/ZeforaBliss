import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  try {
    const auth = req.headers.get("authorization");

    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = auth.split(" ")[1];

    const decoded: any = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    const client = await clientPromise;
    const db = client.db("zeforabliss");

    const orders = await db
      .collection("orders")
      .find({ userId: decoded.id })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(orders);

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user orders" },
      { status: 500 }
    );
  }
}
