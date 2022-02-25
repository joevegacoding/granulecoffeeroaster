import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  media: {
    height: "200px",
    width: "100px",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-around",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  productCartContainer: {
    display: "flex",
    border: "1px solid rgba(0,0,0, 0.4)",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));
