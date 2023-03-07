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
        // console.log("Complete", results.data.length, "records.");
        resolve(results.data);
      },
    });
  });
}
// subfaction scrapper this would need to be the same function as above but witha  ternary expression to weed out the factions via parent id
// faction scrapper this would just reject all of the subfactions, it is needed for us to generate the faction pages with next |

export async function MainFactions() {
  // let data = await Factions();
  // let factions = [];
  // let FilteredData = data.map((item, index) => {
  //   {
  //     item.is_subfaction === false ? factions.push(item.name) : {};
  //   }
  // });
  // console.log("factions", factions);
  // return FilteredData;
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
