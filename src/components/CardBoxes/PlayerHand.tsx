import Grid from "@mui/material/Grid2";
import React from "react";

interface PlayerHandProps {
  children: React.ReactNode;
}

function PlayerHand({ children }: PlayerHandProps) {
  return (
    <>
      <Grid
        display={"flex"}
        padding={"5px"}
        position={"fixed"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          bottom: "15px",
          left: "0px",
          width: "290px",
          backgroundColor: "red",
          flexWrap: "wrap",
          margin: "15px",
        }}
      >
        {children}
      </Grid>
    </>
  );
}

export default PlayerHand;
