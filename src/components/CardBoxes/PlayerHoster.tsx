import Grid from "@mui/material/Grid2";
import React from "react";

interface PlayerHosterProps {
  children: React.ReactNode;
  hover?: ()=>void;
  unHover?: ()=>void;
}

function PlayerHoster({ children, hover, unHover }: PlayerHosterProps) {
  return (
    <>
      <Grid
        onMouseEnter={hover}
        onMouseLeave={unHover}
        display={"flex"}
        padding={"5px"}
        position={"fixed"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          top: "15px",
          left: "0px",
          width: "290px",
          backgroundColor: "blue",
          flexWrap: "wrap",
          margin: "15px",
        }}
      >
        {children}
      </Grid>
    </>
  );
}

export default PlayerHoster;
