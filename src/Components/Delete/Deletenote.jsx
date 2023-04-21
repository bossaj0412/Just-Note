import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import {
  DeleteOutlined as DeleteIcon
} from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const CardContainer = styled(Card)`
  width: 250px;
  margin: 10px;
  minheight: 200px;
`;

const Delete = ({ ele }) => {
  const {
    DeleteNotes,
    setDeleteNotes,
    Data,
    setData,
  } = useContext(DataContext);

  const undoNote = (ele) => {
    const updatedNotes = DeleteNotes.filter((val) => val.id !== ele.id);
    setData([...Data, ele]);
    // console.log(ArchiveNotes);
    setDeleteNotes(updatedNotes);
  };



  const perDelete = (ele) => {
    const updatedNotes = DeleteNotes.filter((val) => val.id !== ele.id);
    setDeleteNotes(updatedNotes);
    // console.log(ArchiveNotes);
    // setData(updatedNotes);
  };

  return (
    <CardContainer>
      <CardContent>
        <Typography> {ele.heading} </Typography>
        <Typography> {ele.text} </Typography>
      </CardContent>

      <CardActions>
        <RestoreOutlinedIcon
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => undoNote(ele)}
        />
        <DeleteIcon fontSize="small" onClick={() => perDelete(ele)} />
      </CardActions>
    </CardContainer>
  );
};

export default Delete;
