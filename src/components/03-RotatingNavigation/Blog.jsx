import React, { useState } from "react";

//mui
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

//custom
import FoodImage from "./food.jpg";
import MenuControl from "./MenuControl";

const Blog = () => {
  const [rotate, setRotate] = useState(null);
  return (
    <Box sx={{ backgroundColor: "#16213E" }}>
      <MenuControl setRotate={setRotate} />
      <Card
        sx={{
          overflowY: "scroll",
          transform: rotate && "rotate(-15deg)",
          transformOrigin: "top left",
          transition: "transform 0.5s linear",
          width: "100vw",
          minHeight: "100vh",
          padding: "50px",
        }}
      >
        <CardHeader title='My Article' sx={{ textAlign: "center", mt: 4 }} />
        <CardContent>
          <Typography>
            This impressives paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like. This impressive paella is a perfect party
            dish and a fun meal to cook together with your guests. Add 1 cup of
            frozen peas along with the mussels, if you like.This impressive
            paella is a perfect party dish and a fun meal to cook together with
            your guests. This impressives paella is a perfect party dish and a
            fun meal to cook together with your guests. Add 1 cup of frozen peas
            along with the mussels, if you like. This impressive paella is a
            perfect party dish and a fun meal to cook together with your guests.
            Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardMedia
          component='img'
          height='400'
          image={FoodImage}
          alt='Paella dish'
        />
      </Card>
    </Box>
  );
};

export default Blog;
