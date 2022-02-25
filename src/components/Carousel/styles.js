import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  carousel: {
    marginTop: 10,
    maxHeight: "100%",

    [theme.breakpoints.down("sm")]: {
      marginTop: 60,
    },
  },
  carouselItem: {
    left: 20,
    right: "auto",
    maxHeight: "90vh",
  },
  carouselCaption: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    textAlign: "left",
    flexDirection: "column",
    width: " 50%",
    top: "0%",
    left: "5%",
    color: "black",
    textTransform: "uppercase",
    fontFamily: "Secular One",
    [theme.breakpoints.down("sm")]: {
      top: "20%",
    },
  },
  title: {
    fontFamily: "Secular One",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  button: {
    textDecoration: "none",
    color: "black",
    fontSize: "1.5rem",
    color: "gray",

    [theme.breakpoints.down("md")]: {
      fontSize: ".9rem",
    },
  },
  smallText: {
    marginBlock: "2.5%",
    fontSize: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));
