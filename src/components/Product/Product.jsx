import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useStyles from "./styles";
import { motion } from "framer-motion";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  console.log(product);
  //   return <div>test</div>;
  return (
    <div>
      <Card className={classes.card}>
        <motion.div whileHover={{ scale: 1.02 }}>
          <CardMedia
            className={classes.media}
            image={product.image.url}
            title={product.name}
            component="img"
          />
        </motion.div>
        <CardContent style={{ backgroundColor: "rgba(0,0,0,0)" }}>
          <div className={classes.cardContent}>
            <Typography
              style={{ fontFamily: "Merriweather" }}
              variant="h5"
              gutterBottom
            >
              {product.name}
            </Typography>
            <Typography style={{ fontFamily: "Merriweather" }} variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>

          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body1"
            color="textSecondary"
            style={{ fontFamily: "Merriweather", marginTop: "1rem" }}
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <Button
            className={classes.button}
            aria-label="Add To Card"
            onClick={() => onAddToCart(product.id, 1)}
          >
            Add To Cart
            {/* <AddShoppingCartIcon /> */}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
