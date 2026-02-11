import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const orderData = await req.json();

    const client = await clientPromise;
    const db = client.db("zeforabliss");

    await db.collection("orders").insertOne({
      ...orderData,
      createdAt: new Date(),
      status: "Pending",
    });

    return NextResponse.json(
      { message: "Order placed successfully" },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to place order" },
      { status: 500 }
    );
  }
}
