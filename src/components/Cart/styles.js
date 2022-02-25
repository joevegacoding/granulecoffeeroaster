import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  card: {
    width: "100px",
  },
  title: {
    marginTop: "10%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
    transition: "ease-out 0.3s",
    backgroundColor: "#4361ee",
    color: "white",

    "&:hover": {
      backgroundColor: "blue",
      color: "white",
    },
  },
  subTitle: {
    fontFamily: "Secular One",
    fontWeight: "medium",
    fontSize: "2rem",
  },
  link: {
    textDecoration: "none",
  },
  cartDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
    marginBlock: "10rem",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      marginInline: "1rem",
    },
  },
  title: {
    fontSize: "3rem",
    fontFamily: "Merriweather",

    marginBottom: "5rem",
    marginTop: "5rem",
  },
  subTotal: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
  },
  continueMessageContainer: {
    height: "60vh",
    display: "flex",
    justifyContent: "center",

    alignItems: "center",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBlock: "auto",
    height: "90vh",
  },
}));
