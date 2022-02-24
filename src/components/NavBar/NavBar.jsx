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
import Burger from "../Burger/Burger";
import PersonIcon from "@mui/icons-material/Person";

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <div className={classes.leftNav}>
            <Burger />
            <Link to="/" className={classes.logo}>
              <Typography variant="p" className={classes.title} color="inherit">
                SHOP
              </Typography>
            </Link>
            <Link to="/" className={classes.logo}>
              <Typography variant="p" className={classes.title} color="inherit">
                OUR STORY
              </Typography>

              {/* </button> */}
            </Link>
          </div>
          <div className={classes.middleNav}>
            <Link to="/">
              <img
                src={logo}
                alt="CoffeeComerceLogo"
                // height="50%"
                width="110px"
                classname={classes.image}
              />
            </Link>
          </div>

          <div className={classes.menuButton}>
            <Link to="/" className={classes.logo}>
              <Typography variant="p" className={classes.title} color="inherit">
                SERVICES
              </Typography>
            </Link>
            <Link to="/" className={classes.logo}>
              <Typography variant="p" className={classes.title} color="inherit">
                <PersonIcon />
              </Typography>

              {/* </button> */}
            </Link>
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
