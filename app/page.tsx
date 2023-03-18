"use client";
import AddPost from "@/components/AddPost";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Post from "@/components/Post";
import { PostType } from "@/types/Posts";
const allPosts = async () => {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/getPosts`, {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    // }).then((res) => res.json());
    // console.log(response.data);
    const response = await axios.get("/api/posts/getPosts");
    // console.log("response", response);
    return response.data;
};

export default function Home() {
    const { data, error, isLoading } = useQuery<PostType[]>({ queryFn: allPosts, queryKey: ["posts"] });
    if (error) return error;
    if (isLoading) return "Loading";

    return (
        <main>
            <AddPost />
            {data?.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    comments={post.comments!}
                    content={post.content}
                    title={post.title}
                    image={post.user.image}
                    username={post.user.name}
                    createTime={post.createdAt}
                />
            ))}
        </main>
    );
}
