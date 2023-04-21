import React from "react";
// import {styled} from "@mui/styles"
import { styled, useTheme } from "@mui/material/styles";
import { Box, Toolbar, Typography, IconButton, Grid } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
// import Display from "./Display";
import Archive from "./Archive";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Archivebox = () => {
  const { ArchiveNotes } = useContext(DataContext);

  // console.log(Data.length);

  return (
    <Box sx={{ display: "flex", margin: "auto" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
          <Grid container style={{ marginTop: "25px" }}>
            {ArchiveNotes.map((value) => (
              <Grid item>
                <Archive ele={value} />
              </Grid>
            ))}
          </Grid>
      </Box>
    </Box>
  );
};

export default Archivebox;
