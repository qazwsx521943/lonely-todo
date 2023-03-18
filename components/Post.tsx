"use client";
import React, { ChangeEventHandler, FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

interface Props {
    image: string;
    username: string;
    title: string;
    content: string;
    createTime: string;
    id: string;
}

function Post({ id, image, username, title, content, createTime, comments }: Props) {
    const createdAt = new Date(createTime);
    const year = createdAt.getFullYear();
    const month = createdAt.getMonth();
    const date = createdAt.getDate();
    const hour = createdAt.getHours();
    const min = createdAt.getMinutes();

    console.log("date", date);
    return (
        <div className="bg-white my-8 p-8 rounded">
            <div className="flex items-center gap-5 justify-between">
                <div className="flex gap-5 items-center">
                    <Image src={image} alt="avatar" width={40} height={40} className="rounded-full" />
                    <h2>{username}</h2>
                </div>
                <p className="text-sm">
                    post date: {year} / {month} / {date} / {hour}:{min}
                </p>
            </div>
            <div className="flex flex-col my-8 gap-3">
                <h1>{title}</h1>
                <div className=" bg-slate-200 py-3 px-5 rounded-lg">
                    <p>{content}</p>
                </div>
                <p className="w-1/5 self-end text-right">{comments.length} notes👉</p>
            </div>
        </div>
    );
}

export default Post;
