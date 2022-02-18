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
const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">{product.price}</Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add To Card">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
