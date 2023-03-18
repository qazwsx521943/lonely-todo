import "./globals.css";
import Navbar from "@/components/Navbar";
import { Rubik } from "next/font/google";
import QueryWrapper from "@/components/QueryWrapper";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-rubik",
});
export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`mx-4 md:mx-12 xl:mx-24 ${rubik.variable} bg-black `}>
                <QueryWrapper>
                    {/* @ts-expect-error Server Component */}
                    <Navbar />
                    {children}
                </QueryWrapper>
            </body>
        </html>
    );
}
