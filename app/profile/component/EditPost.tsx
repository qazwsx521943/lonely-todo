"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { toast } from "react-hot-toast";

type EditProps = {
    id: string;
    avatar: string;
    name: string;
    title: string;
    content: string;
    comments: {
        id: string;
        postId: string;
        userId: string;
    }[];
};

function EditPost({ avatar, id, name, title, comments, content }: EditProps) {
    const [toggle, setToggle] = useState<boolean>(false);
    const queryClient = useQueryClient();

    let deleteToastID: string;
    const mutation = useMutation(async (id: string) => await axios.delete("/api/posts/deletePost", { data: id }), {
        onError: (error) => {
            toast.error("Something's wrong with the network! try again later", { id: "delete" });
            console.log(error);
        },
        onSuccess: (data) => {
            toast.success("Post Deleted👻", { id: "delete" });
            queryClient.invalidateQueries(["my-posts"]);
            console.log("deleted");
        },
    });
    const handleDelete = () => {
        mutation.mutate(id);
        toast.loading("Deleting...", { id: "delete" });
        setToggle(!toggle);
    };
    return (
        <div className="rounded">
            <div className="flex gap-3 items-center">
                <Image className="rounded-full " width={40} height={40} src={avatar} alt="avatart" />
                <h2 className="text-yellow-500">{name}</h2>
            </div>
            <div className="flex flex-col gap-3 text-yellow-200 p-5 bg-black rounded mt-2">
                <h2 className="break-all">title:{title}</h2>
                <p className="text-xs">{content}</p>
            </div>
            <div className="flex items-center font-bold p-2 justify-between">
                <p className="text-yellow-500">{comments.length} Notes</p>
                <button
                    onClick={() => {
                        setToggle(true);
                    }}
                    className=" bg-yellow-400 text-black px-2 py-1  rounded">
                    Delete
                </button>
            </div>
            {toggle && <Modal handleDelete={handleDelete} setToggle={setToggle} />}
        </div>
    );
}

export default EditPost;
