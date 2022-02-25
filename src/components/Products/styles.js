import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.default,
  //   padding: theme.spacing(3),
  //   backgroundColor: "#fff",
  // },
  // root: {
  //   flexGrow: 1,
  // },
  container: {
    // display: "flex",
    // flexDirection: "column",
    // width: "100%",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // overflow: "hidden",
    // alignItems: "center",
    // marginInline: "10%",
    // marginTop: "5rem",
    // border: "none",
    margin: "5% ",
  },
  innerCarousel: {
    display: "flex",
    height: "100%",
  },
  image: {
    width: "100%",

    pointerEvents: "none",
  },
  item: {
    minHeight: "35rem",
    minWidth: "20rem",
    display: "flex",
    justifyContent: "center",
    marginInline: "1rem",
  },
  carousel: {
    cursor: "grab",
    overflow: "hidden",
  },
  productName: {},
  // button: {
  //   width: "10%",
  //   right: 0,

  //   marginBottom: "1rem",
  // },
}));
