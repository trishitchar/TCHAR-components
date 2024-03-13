import User from "@/models/user";
import bcrypt from 'bcrypt'
import Connection from "@/database/config";
import { NextRequest,NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

Connection()

export const GET = async (NextRequest) =>{
    try{
        
        const response = NextResponse.json({message:'logout successfull',success: true});
        response.cookies.set('token',"",{httpOnly:true, expires:new Date(0)});
        console.log('end')
        return response;
    }catch(e){
        console.log("error in posting", e.message);
        return new Response("something went wrong",{status: 500});
    }
}