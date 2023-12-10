import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Contact from "@/models/Contact";

export const GET = async (request) => {
  // Because we can't get the username, we try to catch the specific username from  HTTP req URL
  const url = new URL(request.url);

  const name = url.searchParams.get("name");

  try {
    await connect();

    const contacts = await Contact.find(name && { name });

    return new NextResponse(JSON.stringify(contacts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  //   console.log(request);
  const body = await request.json();
  //   const body = request;
  console.log(request);

  const newContact = new Contact(body);
  console.log(body);

  try {
    await connect();

    await newContact.save();

    return new NextResponse("ContactMessage has been created", { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
