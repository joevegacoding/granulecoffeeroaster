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
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
        </motion.div>
        <Carousel.Caption className={classes.carouselCaption}>
          <Typography style={{ fontFamily: "Secular One" }} variant="h3">
            {" "}
            The best way to start your morning
          </Typography>

          <Typography variant="p" className={classes.smallText}>
            We can’t imagine you having a day without a cup of coffee. From our
            specialists to your mug, a good quality coffee should never be a
            compromise.
          </Typography>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <h4>Learn More</h4>
          </Link>
          {/* <Typography
            style={{
              color: "#fff",
             
              //   fontSize: "max(3.5rem)",
            }}
            variant="h3"
          >
            A FAMILY TRADITION SINCE 1927
          </Typography> */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* add this style only on none-mobile views
      <Carousel.Item interval={7000} style={{ maxHeight: "90vh" }}>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3714060/pexels-photo-3714060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={7000} style={{ maxHeight: "90vh" }}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3631659/pexels-photo-3631659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default CarouselContainer;
