import React from "react";
import { TextField, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useRef, useContext } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import {DataContext} from "../Context/DataProvider";
import {v4 as uuid} from 'uuid';

const Container = styled(Box)`
  display: flex;
  margin-right: 250px;
  flex-direction: column;
  // width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  // width: xl;
  border-radius: 8px;
  min-height: 30px;
  padding: 10px 15px;

`;

const note={
  id:'',
  heading:'',
  text:''
}

const Form = () => {
  const [showTextfield, setshowTextfield] = useState(false);

  const containerRef = useRef();

  const {Data, setData} = useContext(DataContext);
  
  const [addNote, setaddNote] = useState({...note, id:uuid()});




  const showArea = () => {
    setshowTextfield(true);
    containerRef.current.style.minHeight="80px";
  };

  const handleArea= ()=>{
    setshowTextfield(false);
    containerRef.current.style.minHeight="30px";
    setaddNote({...note, id:uuid()});
    if(addNote.heading || addNote.text){
      setData( [addNote,...Data]);
      // console.log(Notes);
      
    }


  }

  const onTextChange=(e)=>{

    // console.log(e.target.name, e.target.value);

   let changedNote= {...addNote, [e.target.name]: [e.target.value]};
    setaddNote(changedNote);
  }

  // console.log(addNote);
  return (
    <ClickAwayListener onClickAway={handleArea}>
      <Container ref={containerRef}   sx={{

        width:{
          xs:100,
          sm:300,
          md:400,
          lg:500,
          xl:600
        }

      }}>
        {showTextfield && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            onChange={(e)=>onTextChange(e)}
            name="heading"
            value={addNote.heading}
          />
        )}
        <TextField
          variant="standard"
          placeholder="Take a note..."
          multiline
          InputProps={{ disableUnderline: true }}
          onClick={showArea}
          onChange={(e)=>onTextChange(e)}
          name="text"
          value={addNote.text}

        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
