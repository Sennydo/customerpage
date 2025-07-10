import { NextResponse, NextRequest } from "next/server";
import pool from "@/lib/db";

export const GET = async (request) => {

    const result = {
        message:"Text Message",
    }

    return NextResponse.json(result);
}

export const POST = async(request) => {
    const {SI_no, cust_name, short_name, contact_person, city} = await request.json();

    if (!SI_no || !cust_name || !short_name || !contact_person || !city) {
        return NextResponse.json({err: "Name and message are required"}, {status:400});
    }

    try {
        await pool.execute(
            'INSERT INTO contactPerson (SI_no, cust_name, short_name, contact_person, city) VALUES (?, ?, ?, ?, ?)',
            [SI_no, cust_name, short_name, contact_person, city]
        );
        return NextResponse.json({working: true}, {status:201})

    } catch (error) {
        console.log(error)
        return NextResponse.json({err: "Database connection Problem"}, {message: error})
    }
}

//Old Post function
/*
export const POST = async(request) => {
    const {name, email, message} = await request.json();

    if (!name || !message) {
        return NextResponse.json({err: "Name and message are required"}, {status:400});
    }

    try {
        await pool.execute(
            'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        );
        return NextResponse.json({working: true}, {status:201})

    } catch (error) {
        console.log(error)
        return NextResponse.json({err: "Database connection Problem"}, {message: error})
    }
}
*/


export const PUT = async(req) => {
    const {id, SI_no, cust_name, short_name, contact_person, city} = await req.json()

    const [result] = await pool.execute(
        'UPDATE customersPage SET SI_no = ?, cust_name = ?, short_name = ?, contact_person = ?, city = ? WHERE id = ?',
        [SI_no, cust_name, short_name, contact_person, city, id]
    )

    const updateResult = result.affectedRows ?? 0
    if(updateResult == 0){
        return NextResponse.json({err: "No item updated"})
    }
    return NextResponse.json({message: "Success"})
}

export const DELETE = async(req) => {
    const id = await req.json()

    const [result] = await pool.execute(
        'DELETE FROM customersPage WHERE id = ?',
        [id]
    )
    const updateResult = result.affectedRows ?? 0
    if (updateResult == 0) {
        return NextResponse.json({message: "No action took place"})
    }
    return NextResponse.json({message: "Done"})
}

