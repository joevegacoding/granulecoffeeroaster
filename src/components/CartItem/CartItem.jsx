import React from "react";
import {
  Typography,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@material-ui/core";

import useStyles from "./styles.js";

const CartItem = ({ item, onUpdateCartQuantity, onRemoveFromCart }) => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container spacing={2} columns={12}>
        <Grid className={classes.productCartContainer} item xs={12}>
          <CardMedia
            image={item.image.url}
            alt={item.name}
            className={classes.media}
          />
          <CardContent className={classes.cardContent}>
            <Typography
              style={{
                fontFamily: "Roboto",

                fontWeight: "400",
              }}
              variant="h4"
            >
              {item.name}
            </Typography>
          </CardContent>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5">
              {item.line_total.formatted_with_symbol}
            </Typography>
          </CardContent>
          <CardActions className={classes.cartActions}>
            <div className={classes.buttons}>
              <Button
                type="button"
                size="small"
                onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1)}
              >
                -
              </Button>
              <Typography>{item.quantity}</Typography>
              <Button
                type="button"
                size="small"
                onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1)}
              >
                +
              </Button>
            </div>
            <Button
              variant="contained"
              type="button"
              color="secondary"
              onClick={() => onRemoveFromCart(item.id)}
            >
              Remove
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartItem;
