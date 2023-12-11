//This is for individual pages of the blog

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Information from "@/models/Information";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const information = await Information.findById(id);

    return new NextResponse(JSON.stringify(information), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

// for delete post in dashboard
export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Information.findByIdAndDelete(id);

    return new NextResponse("information has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
