import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import jwt from "jsonwebtoken";

/* Get All Orders (Admin / Debug) */
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("zeforabliss");

    const orders = await db
      .collection("orders")
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ orders });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

/* Create New Order */
export async function POST(req: Request) {
  try {
    /* Get Token */
    const auth = req.headers.get("authorization");

    if (!auth) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = auth.split(" ")[1];

    /* Decode Token */
    const decoded: any = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    const orderData = await req.json();

    const client = await clientPromise;
    const db = client.db("zeforabliss");

    await db.collection("orders").insertOne({
      userId: decoded.id,       // ✅ LINK USER
      items: orderData.items,
      status: "Pending",
      createdAt: new Date(),
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
