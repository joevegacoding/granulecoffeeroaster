import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title1: {
    textAlign: "center",
    fontSize: "3rem",
    textTransform: "uppercase",
    fontFamily: "Merriweather",
    fontWeight: 500,
    marginBottom: "5%",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
  title2: {
    textAlign: "center",
    fontSize: "3rem",
    textTransform: "uppercase",
    fontFamily: "Merriweather",
    fontWeight: 500,
    marginTop: "15%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.2rem",
    },
  },
  container: {
    margin: "10% auto 5% auto",
    width: "1200px",

    [theme.breakpoints.down("md")]: {
      width: "1000px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "7%",
      margin: "5% auto",
      width: "90%",
      marginTop: "15%",
    },
  },
  image: {
    width: "500px",
    height: "500px",

    [theme.breakpoints.down("md")]: {
      width: "400px",
      height: "400px",
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

    transformOrigin: "-22px 12px",

    transform: "rotate(90deg)",
    [theme.breakpoints.down("sm")]: {
      display: "none",
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
    // marginBlock: "2%",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "right",
    fontFamily: "Merriweather",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
    },
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

  textParagraph2: {
    textAlign: "center",
    // alignItems: "center",
    width: "60%",
    margin: "3% auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      width: "80%",
      marginBottom: "10%",
    },
  },
  imageBusiness: {
    display: "flex",
    width: "1000px",
    height: "400px",
    objectFit: "cover",
    marginInline: "auto",
    alignItems: "center",
    justifyContent: "center",
    background:
      "url(https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80) ",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "20%",
    },
  },
  businessButton: {
    width: "20%",
    height: "12%",
    backgroundColor: "white",
    fontSize: "1.1rem",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      fontSize: "0.8rem",
    },
    fontWeight: 700,
    boxShadow: "inset 0 0 0 0 black",
    transition: "ease-out 0.5s",

    "&:hover": {
      // backgroundColor: "pink",
      boxShadow: "inset 0 -100px 0 0 black",
      color: "white",
    },
  },

  textAlign: "right",
}));
