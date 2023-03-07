import path from "path";
const fs = require("fs");
const Papa = require("papaparse");

const csvFilePath = path.join(process.cwd(), "public/database/Factions.csv");
// Function to read csv which returns a promise so you can do async / await.

// const readCSV = async (filePath) => {
export default async function Factions() {
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

export async function MainFactions() {
  const csvFile = fs.readFileSync(csvFilePath);
  const csvData = csvFile.toString();
  return new Promise((resolve) => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        const filteredResults = results.data.filter(function (test) {
          return test.is_subfaction === "false";
        });
        resolve(filteredResults);
      },
    });
  });
}
// export async function FactionNames() {
//   const data = await MainFactions();
//   let factionNames = [];

//   data.map((item, index) => {
//     factionNames.push(item.name);
//   });
//   return factionNames;
// }
