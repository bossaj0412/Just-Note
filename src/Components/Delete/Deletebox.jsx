import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import Delete from "./Deletenote";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Deletebox = () => {
  const { DeleteNotes } = useContext(DataContext);

  // console.log(Data.length);

  return (
    <Box sx={{ display: "flex", margin: "auto" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
          <Grid container style={{ marginTop: "25px" }}>
            
            {DeleteNotes.map((value) => (
              <Grid item>
                <Delete ele={value} />
              </Grid>
            ))}
          </Grid>
      </Box>
    </Box>
  );
};

export default Deletebox;
