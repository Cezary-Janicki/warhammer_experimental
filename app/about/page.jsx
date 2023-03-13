import React from "react";
import DataFetch from "../(components)/dataFetch";
import Test from "../(components)/test";
import { MainFactions } from "../(components)/dataFetching/Factions";
import Datasheets from "../(components)/dataFetching/Datasheets";
import { getDatasheetByFactionAndRole } from "../(components)/dataFetching/Datasheets";
import BattlefieldRoles from "../(components)/dataFetching/BattlefieldRoles";
async function fetchFactions() {
  const data = await MainFactions();
  return data;
}
async function fetchDatasheets() {
  const data = await Datasheets();
  return data;
}
async function fetchDatasheetsByRole(faction, role) {
  const data = await getDatasheetByFactionAndRole(faction, role);
  return data;
}
const xxx = () => {
  return;
};
export default async function about() {
  const data = await fetchFactions();
  const units = await fetchDatasheets();
  const unitsByRole = await fetchDatasheetsByRole("ORK", "HQ");

  let factionNames = [];
  data.map((item, index) => {
    factionNames.push(item.name);
  });
  return (
    <div>
      <p>about</p>
      {factionNames.map((factionName, FactionIndex) => {
        return <div key={FactionIndex}>Faction: {factionName}</div>;
      })}
    </div>
  );
}
