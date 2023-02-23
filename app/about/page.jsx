import React from "react";
import Papa from "papaparse";
import path from "path";
import fs, { lchown } from "fs";
import dataFetch from "../(components)/dataFetch";
export default async function about() {
  const data = dataFetch();
  return (
    <div>
      <p>about</p>
      {console.log("data", data)}
    </div>
  );
}
