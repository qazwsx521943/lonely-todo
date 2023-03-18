"use client";
import { FormEvent, FormEventHandler, useState } from "react";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

type Props = {
    id: string;
};

type Note = {
    postId: string;
    note: string;
};

function Addnotes({ id }: Props) {
    const [note, setNote] = useState<string>("");
    const [disabled, setDisabled] = useState<boolean>(false);
    const queryClient = useQueryClient();
    const mutation = useMutation(async (form: Note) => await axios.post("/api/posts/addNotes", form), {
        onError: (error) => {
            setDisabled(false);
            if (error instanceof AxiosError) {
                toast.error(error?.response?.data.message + "🥲", { id: "addNote" });
            }
        },
        onSuccess: (data) => {
            setDisabled(false);
            toast.success("note added👋", { id: "addNote" });
            queryClient.invalidateQueries(["post-detail"]);
        },
    });

    const submitNote = async (e: FormEvent) => {
        e.preventDefault();
        setDisabled(true);
        toast.loading("adding..", { id: "addNote" });
        mutation.mutate({ postId: id, note });
    };
    return (
        <form onSubmit={submitNote} className=" bg-slate-800 rounded p-3">
            <h2 className="text-yellow-500 font-bold">Add notes</h2>
            <br />
            <div className="flex ">
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)} className="px-3 py-1 w-full" />
                <button disabled={disabled} className=" bg-yellow-400 text-black font-bold px-2 py-1">
                    ADD
                </button>
            </div>
        </form>
    );
}

export default Addnotes;
