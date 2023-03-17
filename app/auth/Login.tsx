"use client";
import React from "react";
import { signIn } from "next-auth/react";
// import { useSession } from "next-auth/react";

function Login() {
    // const { data: sessionUser } = useSession();
    // console.log(sessionUser);
    return (
        <li className="list-none">
            <button
                onClick={() => signIn()}
                className="text-sm text-yellow-300 bg-gray-800 rounded py-2 px-5 hover:bg-yellow-300 hover:text-black disabled:opacity-25">
                Sign In
            </button>
        </li>
    );
}

export default Login;
