"use client";

import Image from "next/image";
import React from "react";
import timeConvert from "@/lib/timeContvert";
type Props = {
    image: string;
    note: string;
    username: string;
    createdTime: string;
};

function Notes({ image, note, username, createdTime }: Props) {
    const timestamp = timeConvert(createdTime);
    return (
        <div className=" bg-slate-800 rounded py-2 mb-3">
            <div className="flex gap-3 items-center px-3 justify-between">
                <div className="flex gap-2 items-center">
                    <Image src={image} alt="avatar" width={40} height={40} className="rounded-full" />
                    <h2 className="text-yellow-600 font-semibold">{username}</h2>
                </div>
                <p className="text-xs text-yellow-500">{timestamp}</p>
            </div>
            <div className="p-3">
                <p className="text-yellow-400 text-sm">{note}</p>
            </div>
        </div>
    );
}

export default Notes;
