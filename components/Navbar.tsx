import React from "react";
import Link from "next/link";
import Login from "@/app/auth/Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoggedIn from "@/app/auth/LoggedIn";

async function Navbar() {
    const sessionUser = await getServerSession(authOptions);

    return (
        <nav className="flex justify-between items-center py-5 px-8">
            <Link href="/">
                <h1 className=" text-yellow-300 font-extrabold text-4xl">LB</h1>
            </Link>
            <ul>{!sessionUser ? <Login /> : <LoggedIn avatar={sessionUser.user?.image} />}</ul>
        </nav>
    );
}

export default Navbar;
