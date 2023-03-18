"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { myPost } from "@/types/Posts";
import Image from "next/image";
import EditPost from "./EditPost";

const fetchMyPosts = async () => {
    const response = await axios.get("api/posts/myPost");
    return response.data;
};

function MyPost() {
    const { data, isLoading } = useQuery<myPost>({ queryFn: fetchMyPosts, queryKey: ["my-posts"] });
    if (isLoading) return <h1>Loading</h1>;
    console.log(data);
    return (
        <div className=" bg-slate-800 flex flex-col gap-5 p-3 rounded">
            {data?.posts?.map((post) => (
                <EditPost
                    key={post.id}
                    id={post.id}
                    avatar={data.image}
                    name={data.name}
                    title={post.title}
                    comments={post.comments}
                    content={post.content}
                />
            ))}
        </div>
    );
}

export default MyPost;
