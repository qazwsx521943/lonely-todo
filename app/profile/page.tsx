import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import MyPost from "./component/myPost";

// async function myPosts() {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/myPost`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//     }).then((res) => res.json());

//     return response.data;
// }

async function Profile() {
    const sessionUser = await getServerSession(authOptions);
    if (!sessionUser) {
        redirect("api/auth/signin");
    }

    // const posts = await myPosts();

    return (
        <main>
            <h1 className="text-2xl text-yellow-400 text-center font-medium">Hello {sessionUser.user?.name}, Is every thing on Track?</h1>
            <MyPost />
        </main>
    );
}

export default Profile;
