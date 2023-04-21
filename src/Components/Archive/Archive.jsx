import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import {
   
  DeleteOutlined as DeleteIcon,
} from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const CardContainer = styled(Card)`
  width: 250px;
  margin: 10px;
  minheight: 200px;
`;

const Archive = ({ ele }) => {
    console.log(ele);
  const {
    ArchiveNotes,
    setArchiveNotes,
    DeleteNotes,
    setDeleteNotes,
    setData,
  } = useContext(DataContext);

  const unArchiveNote = (ele) => {
    let updatedNotes = ArchiveNotes.filter((val) => val.id !== ele.id);
    setArchiveNotes(updatedNotes);
    setData(prevArr=>[...prevArr, ele]);
  };
  const deleteNote = (ele) => {
    const updatedNotes = DeleteNotes.filter((val) => val.id !== ele.id);
    setDeleteNotes(prevArr=>[...prevArr, ele]);
    // console.log(ArchiveNotes);
    setArchiveNotes(updatedNotes);

  };

  return (
    <CardContainer>
      <CardContent>
        <Typography> {ele.heading} </Typography>
        <Typography> {ele.text} </Typography>
      </CardContent>

      <CardActions>
        <UnarchiveOutlinedIcon
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => unArchiveNote(ele)}
        />
        <DeleteIcon fontSize="small" onClick={() => deleteNote(ele)} />
      </CardActions>
    </CardContainer>
  );
};

export default Archive;
