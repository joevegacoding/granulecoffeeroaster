import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Item from "./itemStyles";
import useStyles from "./styles";
import BlendStyle from "./BlendStyle/BlendStyle";
const LifeStyle = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid>
        {/* //This component could be created in another folder and reused to apply the DRY concept, but I've decided to keep it as is because we only have two. */}
        {/*Example: The image and the text could be stored in an object and looped through or asssign it to a specific element */}
        <Grid style={{ marginBottom: "5%" }} container spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.title1}>life style</Typography>{" "}
          </Grid>
          <Grid className={classes.imageContainer} item xs={12} md={6} lg={6}>
            <Typography className={classes.imageMessage} variant="p">
              Petit Déjeuner <hr style={{ width: "10%", marginLeft: "2%" }} />
            </Typography>
            <img
              className={classes.image}
              src="https://images.pexels.com/photos/890515/pexels-photo-890515.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            />
          </Grid>
          <Grid className={classes.textContainer} item xs={12} md={6} lg={6}>
            <Typography className={classes.textTitle} variant="h2">
              A Morning Essential
            </Typography>
            <Typography className={classes.textParagraph} variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              ipsam assumenda corporis minima fuga iusto? Asperiores
              perspiciatis numquam, molestiae a praesentium nobis, atque vero,
              consequatur odit excepturi architecto ducimus delectus?
            </Typography>
            <Button variant="outlined" className={classes.button}>
              Learn More
            </Button>
          </Grid>
        </Grid>
        <BlendStyle />
        <Grid item xs={12}>
          <Typography className={classes.title2}>
            TAILORED TO YOUR BUSINESS
          </Typography>{" "}
          <Typography className={classes.textParagraph2} variant="h6">
            Our business program is the perfect solution for your entreprise. We
            offer a variety of blends from all tastes at a competitive rate.
          </Typography>
          <Item className={classes.imageBusiness}>
            <Button variant="contained" className={classes.businessButton}>
              Learn More
            </Button>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default LifeStyle;
