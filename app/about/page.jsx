import React from "react";
import Papa from "papaparse";
import path from "path";
import fs from "fs";
// import Datasheets from "../../public/Datasheets.csv";
const papa = require("papaparse");
const dataDirectory = path.join(
  process.cwd(),
  "public/database/Datasheets.csv"
);

console.log("directory", dataDirectory);
const dataStream = fs.createReadStream(dataDirectory);
const parseStream = papa.parse(papa.NODE_STREAM_INPUT);
dataStream.pipe(parseStream);

let data = [];
parseStream.on("data", (chunk) => {
  data.push(chunk);
});

parseStream.on("finish", () => {
  // console.log(data);
  console.log(data.length);
});

export default async function about(data) {
  return (
    <div>
      <p>about</p>
      {console.log("data".data)}
      {data?.map((item, index) => {
        <p>{item}</p>;
      })}
      <p></p>
    </div>
  );
}
