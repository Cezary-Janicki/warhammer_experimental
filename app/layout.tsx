import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Navbar from "./(components)/pageComponents/navbar/Navbar";
import { getAllDatasheets } from "./(components)/dataFetching/Datasheets";
async function getUnitsByFaction() {
  const data = await getAllDatasheets();
  return data;
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const units = await getUnitsByFaction();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={"text-gray-800 bg-stone-50"}>
        <div className="sticky top-0 z-40 pt-2 px-10 mb-2  bg-stone-200 border-b-2 border-stone-800 drop-shadow-xl">
          <Navbar units={units} />
        </div>
        <div className="max-w-5xl mx-auto">{children}</div>
      </body>
      {/* how to add the suspense boundary?  */}
    </html>
  );
}
export const dynamicParams = false;
