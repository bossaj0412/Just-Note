import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import {
  ArchiveOutlined as ArchiveIcon,
  DeleteOutlined as DeleteIcon,
} from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const CardContainer = styled(Card)`
  width: 250px;
  margin: 10px;
  minheight: 200px;
`;

const Display = ({ ele }) => {
  const {
    
    setArchiveNotes,
    DeleteNotes,
    setDeleteNotes,
    Data,
    setData,
  } = useContext(DataContext);

  const archiveNote = (ele) => {
    const updatedNotes = Data.filter((val) => val.id !== ele.id);

    setArchiveNotes(prevArr=>[...prevArr, ele]);
    // console.log(ArchiveNotes);
    setData(updatedNotes);
  };
  const deleteNote = (ele) => {
    const updatedNotes = Data.filter((val) => val.id !== ele.id);
    setDeleteNotes(prevArr=>[...prevArr, ele]);
    // console.log(ArchiveNotes);
    console.log(DeleteNotes);
    setData(updatedNotes);
  };

  return (
    <CardContainer>
      <CardContent>
        <Typography> {ele.heading} </Typography>
        <Typography> {ele.text} </Typography>
      </CardContent>

      <CardActions>
        <ArchiveIcon
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(ele)}
        />
        <DeleteIcon fontSize="small" onClick={() => deleteNote(ele)} />
      </CardActions>
    </CardContainer>
  );
};

export default Display;
