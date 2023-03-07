import React from "react";
import DataFetch from "../(components)/dataFetch";
import Test from "../(components)/test";
import Abilities from "../(components)/dataFetching/Abilities";
import { MainFactions } from "../(components)/dataFetching/Factions";
import Datasheets_models from "../(components)/dataFetching/Datasheets_models";
async function fetch() {
  const data = await MainFactions();
  return data;
}
async function fetchUnit() {
  const data = await Datasheets_models();
  return data;
}
export default async function about() {
  const data = await fetch();
  const unit = await fetchUnit();
  // console.log("units", unit);
  let factionNames = [];

  data.map((item, index) => {
    factionNames.push(item.name);
  });
  return (
    <div>
      <p>about</p>
      {factionNames.map((item, index) => {
        return <p key={index}> Faction: {item}</p>;
      })}
    </div>
  );
}
