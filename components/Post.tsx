"use client";
import React, { ChangeEventHandler, FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

interface Props {
    image: string;
    username: string;
    title: string;
    content: string;
}

function Post({ image, username, title, content }: Props) {
    return (
        <div className="bg-white my-8 p-8 rounded">
            <div className="flex items-center gap-5">
                <Image src={image} alt="avatar" width={40} height={40} className="rounded-full" />
                <h2>{username}</h2>
            </div>
            <div className="flex flex-col my-8 gap-3">
                <h1>{title}</h1>
                <div className=" bg-slate-200 py-3 px-5 rounded-lg">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default Post;
