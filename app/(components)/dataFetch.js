// import React from "react";
// import Papa from "papaparse";
// import path from "path";
// import fs from "fs";

// export default async function DataFetch() {
//   const dataDirectory = path.join(
//     process.cwd(),
//     "public/database/Datasheets.csv"
//   );

//   const dataStream = fs.createReadStream(dataDirectory);
//   const parseStream = Papa.parse(Papa.NODE_STREAM_INPUT);
//   dataStream.pipe(parseStream);

//   let data = [];
//   parseStream.on("data", (chunk) => {
//     data.push(chunk);
//   }); // this function parses data and appends the array with it. It needs to be awaited

//   parseStream.on("finish", () => {
//     console.log("data fron parseStream", data[1]); // here data is displayed properly , why this line is printed last
//     return data;
//   });
//   return data; // this value is passed as props this data value is passed immidieatly as is (in this case an empty array) with out awaiting for parseStream
// }
import path from "path";
const fs = require("fs");
const Papa = require("papaparse");

const csvFilePath = path.join(process.cwd(), "public/database/Datasheets.csv");
// Function to read csv which returns a promise so you can do async / await.

// const readCSV = async (filePath) => {
export default async function DataFetch() {
  const csvFile = fs.readFileSync(csvFilePath);
  const csvData = csvFile.toString();
  return new Promise((resolve) => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
    });
  });
}
