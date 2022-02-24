import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  container: {
    boxShadow: "4px 4px -5px 5px rgba(0,0,0,0.4)",
    borderTop: "1px solid rgba(0, 0, 0, 0.5)",
    height: "35vh",
    maxWidth: "90%",

    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "15%",
      textAlign: "center",
    },
  },
  socialIcons: {
    display: "flex",
    marginTop: "2%",

    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",

    [theme.breakpoints.down("sm")]: {
      marginInline: "auto",
    },
  },
  containerGrid: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBlock: "5%",
    width: "90%",
    marginLeft: "8%",
  },
  elements: {
    marginBlock: "5%",
  },
}));
