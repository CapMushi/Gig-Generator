import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Gig from "@/models/Gig";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const newGig = await Gig.create(body);

    return NextResponse.json({ success: true, gig: newGig });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to create gig" },
      { status: 500 }
    );
  }
}
