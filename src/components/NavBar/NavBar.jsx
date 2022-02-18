import React from "react";
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

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="CoffeeComerceLogo"
              height="25px"
              classname={classes.image}
            />
            Granulé
          </Typography>
          <div className={classes.middleNav} />
          <div className={classes.button}>
            <IconButton aria-label="Show Cart items">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
