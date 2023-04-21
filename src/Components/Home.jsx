import React from "react";
import SwipeDrawer from "./SwipeDrawer";
import Notes from "./Notes/Notes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Deletebox from "./Delete/Deletebox";
import Archivebox from "./Archive/Archivebox";

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>

      <Router>
        <SwipeDrawer />

        <Routes>

            <Route   path="/" element={<Notes />}  / >
            <Route   path="/archive" element={<Archivebox />}  / >
            <Route   path="/delete" element={<Deletebox />}  / >

        </Routes>
          

      </Router>
    </Box>
  );
};

export default Home;
