import React, { useState } from 'react'
import axios from "axios"

const defaultData = {
    username: "",
    password: ""
}

const Input = ({ label, type, id, ...props }) => {
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-gray-600 font-semibold mb-2">
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          autoComplete="off"
          className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          {...props}
        />
      </div>
    );
  };

const Login = () => {
    const [data,setData] = useState(defaultData);

    const onValueChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const onLogin = async(e) =>{
        e.preventDefault();
        if(!data.username || !data.password){
            alert('please fill up the all input')
            return;
        }
        try{
            const response = await axios.post('',data);
            setData(defaultData);
            if(response.status===200){
                // router.post
                console.log('login successfull')
            }
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div className='min-h-screen bg-gray-200 flex flex-col justify-center items-center'>
            <div className="bg-white px-8 py-6 mb-4 rounded-md max-w-md w-full mx-auto shadow-md">
            <h1 className="text-3xl mb-4 text-center">Login</h1>
            <form>
                <Input
                    lebel="username"
                    type="text"
                    id="username"
                    value={data.username}
                    onChange={onValueChange}
                />
                <Input
                    lebel="password"
                    type="password"
                    id="password"
                    value={data.password}
                />
            </form>
            </div>
        </div>
    )
}

export default Login