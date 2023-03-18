"use client";
import React from "react";
type Props = {
    handleDelete: () => void;
    setToggle: (toggle: boolean) => void;
};

function Modal({ handleDelete, setToggle }: Props) {
    return (
        <div onClick={() => setToggle(false)} className="fixed bg-slate-900/50 w-full h-full z-20 top-0 left-0">
            <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3">
                <h1 className="text-red font-bold">
                    Are you sure?&nbsp;{" "}
                    <span onClick={handleDelete} className="font-bold text-red-500 cursor-pointer">
                        DELETE
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default Modal;
