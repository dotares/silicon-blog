import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "The Silicon Blog by Fibz",
    description:
        "The official Fibz Silicon Blog, weekly articles all about startups, tech and productivity",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={(inter.className, "bg-background text-foreground")}
            >
                {children}
            </body>
        </html>
    );
}
