import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  console.log(product);
  //   return <div>test</div>;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={product.image.url}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label="Add To Card"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
