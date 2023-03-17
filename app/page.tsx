import Image from "next/image";
import { Inter } from "next/font/google";
import AddPost from "@/components/AddPost";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <h1>HIIi</h1>
            <AddPost />
        </main>
    );
}
