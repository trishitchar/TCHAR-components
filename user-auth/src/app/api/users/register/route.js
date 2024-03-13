import User from "@/models/user";
import bcrypt from 'bcrypt'
import Connection from "@/database/config";
import { NextRequest,NextResponse } from "next/server";

Connection()

export const POST = async (NextRequest) =>{
    try{
        const body = await NextRequest.json();

        const {name,username,password} = body;
        console.log(body)

        if(!name || !username || !password){
            return new Response("name, username, password is required",{status: 401});
        }

        const user = await User.findOne({ username : username})
        if(user){
            return new Response("user already exist ", {status: 400});
        }

        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(password,salt);

        const newUser= new User({
            name,
            username,
            password:hashPassword
        })

        await newUser.save();

        return new Response("user saved successfully",{status:200});
    }catch(e){
        console.log("error in posting", e)
    }
}