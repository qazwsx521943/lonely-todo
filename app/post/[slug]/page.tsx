"use client";
import React from "react";
import Post from "@/components/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PostDetailType } from "@/types/Posts";
import Addnotes from "@/components/Addnotes";
import Notes from "@/components/Notes";

const fetchPostDetail = async (slug: string) => {
    const response = await axios.get(`/api/posts/${slug}`);
    return response.data;
};

type Props = {
    params: {
        slug: string;
    };
};

function PostDetail({ params: { slug } }: Props) {
    const { data, isLoading } = useQuery({ queryFn: () => fetchPostDetail(slug), queryKey: ["post-detail"] });
    if (isLoading) return "Loading";
    console.log(data);
    return (
        <div className="px-4">
            <Post
                id={data?.id}
                image={data?.user.image}
                username={data?.user.name}
                title={data?.title}
                content={data?.content}
                createTime={data?.createdAt}
                comments={data?.comments}
            />
            <div className="flex flex-col gap-2 ">
                {data.comments.map((note) => (
                    <Notes
                        key={note.id}
                        image={note.user.image}
                        username={note.user.name}
                        note={note.message}
                        createdTime={note.createdAt}
                    />
                ))}
            </div>
            <Addnotes id={data.id} />
        </div>
    );
}

export default PostDetail;
