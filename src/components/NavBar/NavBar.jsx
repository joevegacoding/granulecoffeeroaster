import React, { Button } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/logo.png";
import useStyles from "./styles";

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Link to="/" className={classes.logo}>
            {/* <button> */}
            <Typography variant="h6" className={classes.title} color="inherit">
              <img
                src={logo}
                alt="CoffeeComerceLogo"
                height="25px"
                classname={classes.image}
              />{" "}
              Granulé
            </Typography>
            {/* </button> */}
          </Link>
          <div className={classes.middleNav} />

          <div className={classes.button}>
            <Link to="/cart">
              <IconButton aria-label="Show Cart items">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
