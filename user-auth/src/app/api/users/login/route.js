import User from "@/models/user";
import bcrypt from 'bcrypt'
import Connection from "@/database/config";
import { NextRequest,NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

Connection()

export const POST = async (NextRequest) =>{
    try{
        const body = await NextRequest.json();

        console.log(body)
        const {username,password} = body;

        if(!username || !password){
            return new Response(" username, password is required",{status: 401});
        }

        const user = await User.findOne({ username : username})
        if(!user){
            return new Response("user does not exist ", {status: 400});
        }

        const validPassword = await bcrypt.compare(password,user.password);//return true or false
        if(!validPassword){
            return new Response("password doe's not match ", {status: 400});
        }

        const tokenData = {
            username: user.username,
            id: user._id
        }

        const token = jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn: '1d'});
        const response = NextResponse.json({message:'login successfull'});
        response.cookies.set('token',token,{httpOnly:true});
        console.log('end')
        return response;
    }catch(e){
        console.log("error in posting", e.message);
        return new Response("something went wrong",{status: 500});
    }
}