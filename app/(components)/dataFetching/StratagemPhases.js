import path from "path";
const fs = require("fs");
const Papa = require("papaparse");

const csvFilePath = path.join(
  process.cwd(),
  "public/database/StratagemPhases.csv"
);
// Function to read csv which returns a promise so you can do async / await.

// const readCSV = async (filePath) => {
export default async function StratagemPhases() {
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
