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
    const cleanComp = props.replace(/<\/?[^>]+(>|$)/g, "");
    return cleanComp
  }

  // if wargear id is the same they should be displayed in a single "space"
  // in order to do this everytime there is a combi weapon it should be displayed in a single cell as a list
  // title of the list being combi - 1st weapon name and the subtract hitroll rules text
  return (
<>
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

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Other wargear</StyledTableCell>
            <StyledTableCell align="left">Abilites</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Wargear options table */}
            <StyledTableCell component="th" scope="row">
                Wargear Options               
            </StyledTableCell>
            <StyledTableCell align="left">
               <ul>
                  {datasheets_options.map((option: any,  index: number) => (
                <li key={index}>{stripHTML(option?.description)}</li>
                   ))}
               </ul>
            </StyledTableCell>
          {/* Other wargear table */}
            {otherWargear.map((wargear: any, index: number) => (
                <StyledTableRow key={wargear.name}>
                  <StyledTableCell component="th" scope="row">{wargear.name}</StyledTableCell>
                  <StyledTableCell align="left">{stripHTML(wargear?.description)}</StyledTableCell>
                </StyledTableRow>   
            ))}
          {/* Abilites/traits table
            {modelAbilites.map((ability: any, index: number) => (
                <StyledTableRow key={ability.name}>
                  <StyledTableCell component="th" scope="row">{ability.name}</StyledTableCell>
                  <StyledTableCell align="left">{stripHTML(ability?.description)}</StyledTableCell>
                </StyledTableRow>  
            ))} */}

        </TableBody>
      </Table>
    </TableContainer>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Ability name</StyledTableCell>
            <StyledTableCell align="left">Ability text</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Abilites/traits table */}
            {modelAbilites.map((ability: any, index: number) => (
                <StyledTableRow key={ability.name}>
                  <StyledTableCell component="th" scope="row">{ability.name}</StyledTableCell>
                  <StyledTableCell align="left">{stripHTML(ability?.description)}</StyledTableCell>
                </StyledTableRow>  
            ))}
{}
        </TableBody>
      </Table>
    </TableContainer>

</>
  );
}
