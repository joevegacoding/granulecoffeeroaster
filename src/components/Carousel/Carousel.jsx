import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import slide1 from "../../assets/slide1.png";
import useStyles from "./styles";

const CarouselContainer = () => {
  const classes = useStyles();

  return (
    <Carousel className={classes.carousel}>
      <Carousel.Item className={classes.carouselItem} interval={7000}>
        <motion.div animate={{ scale: 1.1 }} transition={{ duration: 2 }}>
          <img
            style={{ objectFit: "contain", maxWidth: "100%" }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
        </motion.div>
        <Carousel.Caption className={classes.carouselCaption}>
          <Typography className={classes.title} variant="h3">
            {" "}
            The best way to start your morning
          </Typography>

          <Typography variant="p" className={classes.smallText}>
            We can’t imagine you having a day without a cup of coffee. From our
            specialists to your mug, a good quality coffee should never be a
            compromise.
          </Typography>
          <Link style={{ textDecoration: "none" }}>
            <h4 className={classes.button}>Learn More</h4>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
