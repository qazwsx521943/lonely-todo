"use client";
import React, { ChangeEventHandler, FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

function AddPost() {
    let toastPostID: string;
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [disabled, setDisabled] = useState<boolean>(false);
    // create post function
    const queryClient = useQueryClient();
    const mutation = useMutation(async (form: any): Promise<string | number> => await axios.post(`/api/posts/addPost`, form), {
        onError: (error) => {
            if (error instanceof AxiosError) {
                toast.error(error?.response?.data.message, { id: toastPostID });
            }
            setDisabled(false);
        },
        onSuccess: (data) => {
            toast.success("Posted!!!👍👍👍", { id: toastPostID });
            queryClient.invalidateQueries(["posts"])
            setTitle("");
            setContent("");
            setDisabled(false);
        },
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        toastPostID = toast.loading("Creating post", { id: toastPostID });
        setDisabled(true);
        mutation.mutate({ title, content });
        // await axios.post(`/api/posts/addPost`, { title, content });
        //     const r = await fetch(`http://localhost:3000/api/posts/addPost`, {
        //         method: "POST",
        //         body: JSON.stringify({ title, content }),
        //         headers: { "Content-Type": "application/json" },
        //     });
        //     const rData = await r.json();
        //     console.log(rData);
    };
    return (
        <form onSubmit={handleSubmit} className="bg-white flex-col flex p-10 my-10 items-center">
            <div className="w-1/2 flex-col flex gap-3">
                <label htmlFor="title" className="text-lg font-medium">
                    Title
                </label>
                <input
                    className="px-3 py-2 bg-slate-300 rounded"
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="content" className="text-lg font-medium">
                    Content
                </label>
                <textarea
                    className="px-3 py-2 bg-slate-300 rounded"
                    id="content"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                />
                <div className="flex justify-between font-bold items-center mt-5">
                    <p className={`${content.length > 300 ? "text-red-600" : "text-slate-600"}`}>{content.length}/300</p>
                    <button disabled={disabled} type="submit" className="rounded px-5 py-2 bg-yellow-300 text-black disabled:opacity-30">
                        Create New Post
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddPost;
