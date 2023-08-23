import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Navbar from "./(components)/pageComponents/navbar/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={"text-gray-800 bg-stone-200 mx-10"}> {children}</body>
      {/* how to add the suspense boundary?  */}
    </html>
  );
}
export const dynamicParams = false;
