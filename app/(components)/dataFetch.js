import path from "path";
const fs = require("fs");
const Papa = require("papaparse");
const csvFilePath = path.join(process.cwd(), "public/database/Datasheets.csv");

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
