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

export default function UnitStatsTable(props: any) {
  const models = props.models;
  // console.log("models in table", models);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* I would need to somehow loop on table keys or maybe just hardcode it  */}
            <StyledTableCell align="left">No</StyledTableCell>
            <StyledTableCell>Unit Name</StyledTableCell>
            <StyledTableCell align="right">M</StyledTableCell>
            <StyledTableCell align="right">WS</StyledTableCell>
            <StyledTableCell align="right">BS</StyledTableCell>
            <StyledTableCell align="right">S</StyledTableCell>
            <StyledTableCell align="right">T</StyledTableCell>
            <StyledTableCell align="right">W</StyledTableCell>
            <StyledTableCell align="right">A</StyledTableCell>
            <StyledTableCell align="right">Ld</StyledTableCell>
            <StyledTableCell align="right">Sv</StyledTableCell>
            <StyledTableCell align="right">Base</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {models.map((model: any) => (
            <StyledTableRow key={model.name}>
              <StyledTableCell align="left">
                {model.models_per_unit}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {model.name}
              </StyledTableCell>
              <StyledTableCell align="right">{model.M}</StyledTableCell>
              <StyledTableCell align="right">{model.WS}</StyledTableCell>
              <StyledTableCell align="right">{model.BS}</StyledTableCell>
              <StyledTableCell align="right">{model.S}</StyledTableCell>
              <StyledTableCell align="right">{model.T}</StyledTableCell>
              <StyledTableCell align="right">{model.W}</StyledTableCell>
              <StyledTableCell align="right">{model.A}</StyledTableCell>
              <StyledTableCell align="right">{model.Sv}</StyledTableCell>
              <StyledTableCell align="right">{model.Ld}</StyledTableCell>
              <StyledTableCell align="right">{model.base_size}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
