import React from "react";
import Item from "../itemStyles";
import { Grid, Typography, Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";

import useStyles from "./styles";

const BlendStyle = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid className={classes.innerContainer} container spacing={2}>
        <Grid className={classes.textContainer} item xs={12} md={6} lg={6}>
          <Typography className={classes.textTitle} variant="h2">
            A Blend That Fits Your Style
          </Typography>
          <Typography className={classes.textParagraph} variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            ipsam assumenda corporis minima fuga iusto? Asperiores perspiciatis
            numquam, molestiae a praesentium nobis, atque vero, consequatur odit
            excepturi architecto ducimus delectus?
          </Typography>
          <Button className={classes.button} variant="outlined">
            Learn More
          </Button>
        </Grid>
        <Stack
          //   className={classes.imageContainer}
          direction="row"
          justifyContent="center"
          item
          xs={6}
        >
          <Grid
            // justifyContent="flex-end"
            className={classes.imageContainer}
            item
            xs={12}
            md={6}
            lg={6}
          >
            <Typography className={classes.imageMessage} variant="p">
              Expérimentation <hr style={{ width: "10%", marginLeft: "2%" }} />
            </Typography>
            <img
              className={classes.image}
              src="https://images.pexels.com/photos/6660557/pexels-photo-6660557.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            />
          </Grid>
        </Stack>
      </Grid>
    </div>
  );
};

export default BlendStyle;
