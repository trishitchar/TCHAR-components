"use client"
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [logoutStatus, setLogoutStatus] = useState(null);
  const router = useRouter()

  const onLogout = async (e) => {
    e.preventDefault();
    const response  = await axios.get("api/users/logout");
    if (response.status === 200) {
      router.push('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
      <div className="bg-white px-8 py-6 mb-4 rounded-md max-w-md w-full mx-auto shadow-md">
        <h1 className="text-3xl mb-4 text-center">Welcome to Profile</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          incidunt hic nulla perspiciatis! Dignissimos magni nostrum inventore,
          eos labore doloribus facilis qui magnam ut ex perspiciatis
          praesentium similique modi nisi?
        </p>
        <button
          className="bg-red-500 hover:bg-red-700 mt-4 text-white px-4 py-2 rounded-md w-full"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
      {logoutStatus === 'success' && (
        <p className="text-green-500">Logout successful. Redirecting...</p>
      )}
      {logoutStatus === 'error' && (
        <p className="text-red-500">Logout failed. Please try again.</p>
      )}
      <p className="mt-2">
        Back to{' '}
        <Link href="/login" className="text-blue-500">Login
        </Link>
      </p>
    </div>
  );
};

export default Profile;
