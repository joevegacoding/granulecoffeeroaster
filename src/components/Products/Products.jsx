import React from "react";
import Product from "../Product/Product";
import { Grid, Button, Typography } from "@mui/material";
import useStyles from "./styles";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Products = ({ products, onAddToCart }) => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  useEffect(() => {
    //We consol log these values to evaluate how much should we put for the drag constraints
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);

    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <motion.div ref={carousel} className={classes.carousel}>
        <motion.div
          drag="x"
          // The left value should be width that we've set up in the state value above,
          // but other constrainst css values are keeping my offsetWidth to be calculated properly when
          // TODO: handle the error of offsetWidth to make the container and the elements inside it go all the through when push to the left.
          dragConstraints={{ right: 0, left: -700 }}
          className={classes.innerCarousel}
        >
          {products.map((product) => (
            <motion.div
              className={classes.item}
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              // whileTap={{ scale: 1.01 }}
            >
              <Product product={product} onAddToCart={onAddToCart} />
              {/* <Grid>
                <img className={classes.image} src={product.image.url} />
                <Typography className={classes.productName} variant="p">
                  {product.name}
                </Typography>
              </Grid> */}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
    // <main className={classes.content}>
    //   {/* <div className={classes.toolbar} />

    //   <Grid container justifyContent="center" spacing={4}>
    //     {products.map((product) => (
    //       <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
    //         <Product product={product} onAddToCart={onAddToCart} />
    //       </Grid>
    //     ))}
    //   </Grid> */}
    // </main>
  );
};

export default Products;
{
  /* {images.map((image) => (
            <motion.div  className="item">{<img src={image} />}</motion.div>
          ))} */
}
