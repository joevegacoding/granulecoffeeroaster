import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    width: "300px",
    maxHeight: "100%",
    border: "none",
    boxShadow: "none",
  },
  media: {
    height: "80%",
    width: "80%",
    objectFit: "cover",
    pointerEvents: "none",
  },
  button: {
    border: "1px solid black",
    boxShadow: "inset 0 0 0 0 black",
    transition: "ease-out 0.5s",

    "&:hover": {
      // backgroundColor: "pink",
      boxShadow: "inset 0 -100px 0 0 black",
      color: "white",
    },
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
