import React from "react";
// import {styled} from "@mui/styles"
import { styled, useTheme } from "@mui/material/styles";
import { Box, Toolbar, Typography, IconButton, Grid } from "@mui/material";
import Form from "./Form";

import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import Display from "./Display";
import EmptyNotes from "./Emptynotes";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { Data } = useContext(DataContext);

  // console.log(Data.length);

  return (
    <Box sx={{ display: "flex", margin: "auto" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form />

        {Data.length > 0 ? (
          <Grid container style={{ marginTop: "25px" }}>
            {Data.map((value) => (
              <Grid item>
                <Display ele={value} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
