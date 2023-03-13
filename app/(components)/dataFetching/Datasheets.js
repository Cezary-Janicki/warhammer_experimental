import path from "path";
const fs = require("fs");
const Papa = require("papaparse");

const csvFilePath = path.join(process.cwd(), "public/database/Datasheets.csv");
// Function to read csv which returns a promise so you can do async / await.

// const readCSV = async (filePath) => {
export default async function Datasheets() {
  const csvFile = fs.readFileSync(csvFilePath);
  const csvData = csvFile.toString();
  return new Promise((resolve) => {
    Papa.parse(csvData, {
      header: true,
      dynamicTyping: true,
      delimiter: "|",
      complete: (results) => {
        resolve(results.data);
      },
    });
  });
}
export async function getDatasheetByFaction(faction) {
  const csvFile = fs.readFileSync(csvFilePath);
  const csvData = csvFile.toString();
  return new Promise((resolve) => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        const filteredResults = results.data.filter(function (test) {
          return test.faction_id === faction;
        });
        resolve(filteredResults);
      },
    });
  });
}

export async function getDatasheetByFactionAndRole(faction, role) {
  const csvFile = fs.readFileSync(csvFilePath);
  const csvData = csvFile.toString();
  return new Promise((resolve) => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        const filteredResults = results.data.filter(function (test) {
          return test.faction_id === faction && test.role === role;
        });
        resolve(filteredResults);
      },
    });
  });
}
