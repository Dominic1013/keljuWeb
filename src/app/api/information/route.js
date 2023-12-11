import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Information from "@/models/Information";

export const GET = async (request) => {
  // Because we can't get the title, we try to catch the specific title from  HTTP req URL
  const url = new URL(request.url);

  // const username = url.searchParams.get("username");
  const title = url.searchParams.get("title");

  try {
    await connect();

    const informations = await Information.find(title && { title });

    return new NextResponse(JSON.stringify(informations), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  // console.log(request);

  const newInformation = new Information(body);

  try {
    await connect();

    await newInformation.save();

    return new NextResponse("Information has been created", { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
