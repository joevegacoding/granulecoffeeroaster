import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  carousel: {
    marginTop: 10,
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
  },
  smallText: {
    marginBlock: "2.5%",
    fontSize: "max(17px)",
  },
}));
