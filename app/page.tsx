"use client";
import AddPost from "@/components/AddPost";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Post from "@/components/Post";
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
    const { data, error, isLoading } = useQuery({ queryFn: allPosts, queryKey: ["posts"] });
    if (error) return error;
    if (isLoading) return "Loading";
    console.log(data);
    return (
        <main>
            <h1>HIIi</h1>
            {data.map((post: any) => (
                <Post key={post.id} content={post.content} title={post.title} image={post.user.image} username={post.user.name} />
            ))}
            <AddPost />
        </main>
    );
}
