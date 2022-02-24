import React from "react";
import { Grid, Link, Container, Box, Typography } from "@material-ui/core";

import useStyles from "./styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Box>
        <Container className={classes.container} maxWidth="lg">
          <Grid className={classes.containerGrid} container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography variant="h5">Address</Typography>
              </Box>
              <Box className={classes.elements}>
                <Link underline="none" href="#" color="inherit">
                  <Typography>555 Coffee St</Typography>
                </Link>
                <Link underline="none" href="#" color="inherit">
                  <Typography style={{ marginTop: "1%" }}>
                    Toronto, ON
                  </Typography>
                </Link>
                <Link underline="none" href="#" color="inherit">
                  <Typography style={{ marginTop: "1%" }}>000 000</Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography variant="h5">Contact</Typography>
              </Box>
              <Box className={classes.elements}>
                <Typography style={{ marginTop: "1%" }}>
                  <Link underline="none" href="#" color="inherit">
                    info@granulecoffee.com
                  </Link>
                </Typography>

                <Typography style={{ marginTop: "1%" }}>
                  <Link underline="none" href="#" color="inherit">
                    555-555-5555
                  </Link>
                </Typography>
                <Box className={classes.socialIcons}>
                  <Link href="#" color="inherit">
                    <FacebookIcon />
                  </Link>
                  <Link href="#" color="inherit">
                    <InstagramIcon />
                  </Link>
                  <Link href="#" color="inherit">
                    <TwitterIcon />
                  </Link>
                  <Link href="#" color="inherit">
                    <PinterestIcon />
                  </Link>
                  <Link href="#" color="inherit">
                    <LinkedInIcon />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography variant="h5">About Us</Typography>
              </Box>
              <Box className={classes.elements}>
                <Typography style={{ marginTop: "1%" }}>
                  <Link underline="none" href="#" color="inherit">
                    Career
                  </Link>
                </Typography>

                <Typography style={{ marginTop: "1%" }}>
                  <Link underline="none" href="#" color="inherit">
                    Our Story
                  </Link>
                </Typography>

                <Typography style={{ marginTop: "1%" }}>
                  <Link underline="none" href="#" color="inherit">
                    FAQ
                  </Link>
                </Typography>
                <Typography style={{ marginTop: "1%" }}>
                  &#169; GranuleCoffee {new Date().getFullYear()}
                </Typography>
              </Box>
              <Box className={classes.elements}></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <BottomNavigation
        // borderTop={2}
        color="inherit"
        style={{
          backgroundColor: "pink",
          borderTop: "1px rgba(0, 0, 0, 0.1) solid",
          height: "23vh",
        }}
      >
        <BottomNavigationAction label="Recents" icon="Shop" />
        <BottomNavigationAction label="Recents" icon="Shop" />
        <BottomNavigationAction label="Recents" icon="Shop" />
      </BottomNavigation> */}
    </footer>
  );
};

export default Footer;
