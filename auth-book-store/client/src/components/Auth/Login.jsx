import React, { useContext,useState } from 'react';
import axios from 'axios';

const defaultData = {
  username: '',
  password: '',
};

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
  const [data, setData] = useState(defaultData);

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    if (!data.username || !data.password) {
      alert('Please fill up the mandatory fields');
      return;
    }

    try {
      const response = await axios.post('/api/users/login', data);
      setData(defaultData);
      if (response.status === 200) {
        // Redirect or handle successful login
        console.log('Login successful');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
      <div className="bg-white px-8 py-6 mb-4 rounded-md max-w-md w-full mx-auto shadow-md">
        <h1 className="text-3xl mb-4 text-center">Login</h1>
        <form>
          <Input
            label="Username"
            type="text"
            id="username"
            value={data.username}
            onChange={onValueChange}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={data.password}
            onChange={onValueChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full"
            onClick={onLogin}
          >
            Sign In
          </button>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;