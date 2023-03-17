"use client";
import React from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
type Props = {
    avatar: string | null | undefined;
};

function LoggedIn({ avatar }: Props) {
    return (
        <li className="list-none flex gap-2">
            {avatar && <Image className="rounded-full" src={avatar} alt="avatar" width={40} height={40} />}
            {/* <h2>{avatar}</h2> */}
            <button
                onClick={() => signOut()}
                className="text-sm text-yellow-300 bg-gray-800 rounded py-2 px-5 hover:bg-yellow-300 hover:text-black disabled:opacity-25">
                Sign Out
            </button>
        </li>
    );
}

export default LoggedIn;
