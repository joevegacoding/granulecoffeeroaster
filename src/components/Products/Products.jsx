import React from "react";
import Product from "../Product/Product";
import { Grid } from "@mui/material";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Dark Roast",
    description: "Jamaican Blue",
    price: "12.99",
    image:
      "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    id: 2,
    name: "100% Arabica",
    description: "Colombian Elixir",
    price: "14.99",
    image:
      "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    id: 2,
    name: "Sweet Beans",
    description: "Ethiopian Tresor",
    price: "13.99",
    image:
      "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
];
const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {/* <Product /> */}
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
