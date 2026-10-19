import { NextResponse } from "next/server";

export function Get(){
    return NextResponse.json({
        name: "John Doe",
        email: "john.doe@example.com"
    });
}