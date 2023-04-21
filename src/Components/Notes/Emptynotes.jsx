import { LightbulbOutlined as Lightbulb } from "@mui/icons-material";
import { Typography, Box, styled } from "@mui/material";

import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const Light = styled(Lightbulb)`
  font-size: 120px;
  color: #f5f5f5;
`;

const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  margin-right: 120px;
`;

const EmptyNotes = () => {

    const {empty}=useContext(DataContext);

  return (
    <Container sx={{

      width:{
        450:600,
        md:900,
        // md:400,
        // lg:1200,
        // xl:1300
      }

    }}>
      <Light />
      <Text>Notes you add {empty} here</Text>
    </Container>
  );
};

export default EmptyNotes;
