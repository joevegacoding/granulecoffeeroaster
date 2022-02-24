import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "center",
    boxShadow: "2px 2px 3px 2px rgba(0,0,0,0.1)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    height: "10vh",
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    gap: 15,

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
    },
  },

  logo: {
    textDecoration: "none",
    color: "rgba(0,0,0,0.7)",
  },
  leftNav: {
    display: "flex",
    flexDirection: "row",
    gap: 80,
    [theme.breakpoints.between("sm", "md")]: {
      gap: 30,
    },
    [theme.breakpoints.down("sm")]: {
      gap: 120,
    },
    [theme.breakpoints.down("xs")]: {
      gap: 60,
    },

    marginLeft: 40,
  },
  menuButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    gap: 70,
    [theme.breakpoints.between("sm", "md")]: {
      gap: 20,
    },
    [theme.breakpoints.down("xs")]: {
      gap: 10,
    },
  },

  button: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  middleNav: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  cartIcon: {
    fontSize: "2rem",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
