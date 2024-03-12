"use client"
import Input from "@/app/components/Input";
import Link from "next/link";
import { useState } from "react";

const defaultData = {
    name: "",
    username: "",
    password: ""
};

const Register = () => {
    const [data, setData] = useState(defaultData);

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onRegister = (e) => {
        e.preventDefault(); 

        if (!data.name || !data.username || !data.password) {
            alert("Please fill up the mandatory fields");
            return;
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
            <div className="bg-white px-8 py-6 mb-4 rounded-md max-w-md w-full mx-auto shadow-md">
                <h1 className="text-3xl mb-4 text-center">Register</h1>
                <form>
                    <Input
                        label="Name"
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={(e) => {
                            onValueChange(e);
                        }}
                    />
                    <Input
                        label="Username"
                        type="text"
                        id="username"
                        value={data.username}
                        onChange={(e) => {
                            onValueChange(e);
                        }}
                    />
                    <Input
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={data.password}
                        onChange={(e) => {
                            onValueChange(e);
                        }}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full"
                        onClick={(e) => {
                            onRegister(e);
                        }}
                    >
                        Submit
                    </button>
                    <p className="mt-4 text-center">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
