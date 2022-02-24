import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    textAlign: "center",
    fontSize: "3rem",
    textTransform: "uppercase",
    fontFamily: "Merriweather",
    fontWeight: 700,
  },
  container: {
    margin: "10% auto 5% auto",
    width: "1200px",

    [theme.breakpoints.down("md")]: {
      width: "1000px",
    },
    innerContainer: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "7%",
      margin: "5% auto",
      width: "90%",
      marginTop: "15%",
      direction: "column-reverse",
    },
  },
  image: {
    width: "500px",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      width: "400px",
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "300px",
    },
    objectFit: "cover",
  },

  imageContainer2: {
    display: "flex",
    gap: 5,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
      marginBlock: "5%",
    },
  },
  imageContainer: {
    display: "block",

    position: "relative",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
      marginBlock: "5%",
    },
  },
  imageMessage: {
    display: "flex",
    justifyContent: "row-reverse",
    transformOrigin: "255px 288px",
    transform: "rotate(90deg)",

    [theme.breakpoints.down("md")]: {
      transformOrigin: "200px 235px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  innerContainer: {
    justifyContent: "start",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      flexDirection: "column-reverse",
    },
  },
  button: {
    marginTop: "7%",
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
      width: "40%",
    },
  },

  textContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
    fontFamily: "Merriweather",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
    },
    //
  },
  textTitle: {
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
    fontFamily: "Merriweather",
  },
  textParagraph: {
    marginTop: "5%",
    fontFamily: "Merriweather",

    [theme.breakpoints.between("sm", "md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
    },
  },

  textAlign: "right",
}));
