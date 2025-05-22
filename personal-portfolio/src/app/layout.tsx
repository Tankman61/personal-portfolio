import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "William Yang",
    description: "My personal portfolio",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <link
                rel="preload"
                href="/assets/MFDFont.ttf"
                as="font"
                type="font/ttf"
                crossOrigin="anonymous"
            />
        </head>
        <body className="antialiased font-[MFDFont] bg-black text-white">
        {children}
        </body>
        </html>
    );
}
