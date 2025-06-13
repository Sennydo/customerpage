import { NextResponse, NextRequest } from "next/server";
import pool from "@/lib/db";

export const GET = async (request) => {

    const result = {
        message:"Text Message",
    }

    return NextResponse.json(result);
}

export const POST = async(request) => {
    const {name, email, message} = await request.json();

    if (!name || !message) {
        return NextResponse.json({message: "Name and message are required"}, {status:400});
    }

    try {
        await pool.execute(
            'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        );
        return NextResponse.json({message: "Working"}, {status:201})

    } catch (error) {
        console.log(error)
        return NextResponse.json({err: "Database connection Problem"}, {message: error})
    }
}

