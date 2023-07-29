"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MountCheck from "../mountCheck";

import Datasheet_models from "../dataFetching/Datasheets_models";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
// i need to fetch wargear, there there are profiles for combi weapons that need to be displayed in a diffrent manner, maybe a loop?
export default function UnitWargearTable(props: any) {
  const allWargearList = props.allWargearList 
  const allWargear = props.allWargear
  const modelAbilites = props.modelAbilites
  const otherWargear = props.otherWargear
  const datasheets_options = props.datasheets_options

  function stripHTML(props:string){
    // const cleanComp = props.replace(/<\/?[^>]+(>|$)/g, "");
    const cleanComp = props.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
    cleanComp.replace(/<\/?tbody>/g, ''); // remove tbody
    return cleanComp
  }

  // if wargear id is the same they should be displayed in a single "space"
  // in order to do this everytime there is a combi weapon it should be displayed in a single cell as a list
  // title of the list being combi - 1st weapon name and the subtract hitroll rules text
  return (
<>
     <MountCheck>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Weapon</StyledTableCell>
                <StyledTableCell align="right">Range</StyledTableCell>
                <StyledTableCell align="right">Type</StyledTableCell>
                <StyledTableCell align="right">S</StyledTableCell>
                <StyledTableCell align="right">AP</StyledTableCell>
                <StyledTableCell align="right">D</StyledTableCell>
                <StyledTableCell align="left">Abilities</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allWargearList.map((wargear: any, index: number) => (
                <StyledTableRow key={wargear.name}>
                  <StyledTableCell component="th" scope="row">
                    {wargear.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{wargear?.Range}</StyledTableCell>
                  <StyledTableCell align="right">{wargear?.Type}</StyledTableCell>
                  <StyledTableCell align="right">{wargear?.S}</StyledTableCell>
                  <StyledTableCell align="right">{wargear?.AP}</StyledTableCell>
                  <StyledTableCell align="right">{wargear?.D}</StyledTableCell>
                  <StyledTableCell align="left">{stripHTML(wargear?.abilities)}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      {/* Other wargear */}
      {Object.keys(datasheets_options).length>=1?
      <div  className={"flex flex-row gap-1 bg-neutral-50 border border-neutral-300 rounded-md p-2.5 drop-shadow-md"}>
        <div className={"basis-1/5 p-2 font-semibold"}>Wargear options</div>
                  <ul className={"basis-4/5 list-disc"}>
                    {datasheets_options.map((option: any,  index: number) => (
                  <li key={index}>{stripHTML(option.description)}</li>
                     ))}
                 </ul>
              </div>
              :<p></p>}
      {/* Abilites/traits table */}
      {Object.keys(modelAbilites).length>=1?
      <div className={"flex flex-row gap-1 bg-neutral-50 border border-neutral-300 rounded-md p-2.5 drop-shadow-md"}>
      <p className={"basis-1/5 p-2 font-semibold"}>Abilities</p>
      <div  className={"columns-3 gap-8 break-inside-avoid-column basis-4/5"}>
                    {modelAbilites.map((ability: any, index: number) => ( 
                      <p key={ability.name} className="break-inside-avoid-column">
                        <div className="text-red-700 font-semibold">{ability.name}</div>
                        <div>{ability.description}</div>
                      </p>
              ))}
              </div>
      </div>
      :<p></p>}
     </MountCheck>

</>
  );
}
