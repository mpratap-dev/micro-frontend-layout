import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Grid } from "@material-ui/core";
import Logo from "../assets/images/oye_logo.webp";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import LinkButton from "./common/LinkButton";
import If from "./common/If";
import DashboardDropdown from "./dropdown";
import MenuIcon from "@material-ui/icons/Menu";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    zIndex: 2,
    backgroundColor: "#FFFFFF",
  },
  header: {
    left: "0",
    width: "auto",
    zIndex: 5,
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: "#fff !important",

    "& .MuiToolbar-root": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  rounded: {
    borderRadius: "50%",
  },
  logout: {
    color: "#FFF",
  },
  title: {
    display: "inline-flex",
    alignItems: "center",
    color: "#FFF",
    cursor: "pointer",
  },
  h100: {
    height: "100%",
  },
  logoContainer: {
    background: "#ffd33c",
    height: 40,
    width: 40,
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(1),
    border: "2px solid #FFF",
    boxSizing: "border-box",
  },
  logo: {
    width: "80%",
  },
}));

function Header(props) {
  const classes = useStyles();
  const userImageSrc = localStorage.getItem("pic");
  const mobileWidth = useMediaQuery("(max-width:600px)");
  const { setState } = props;
  const pathname = "/";

  function logout() {
    // props.setToken("");
    localStorage.setItem("token", "");
    localStorage.setItem("roleId", "");
    localStorage.setItem("permissions", "");
    localStorage.setItem("pic", "");
    // props.history.push("/");
  }

  const toggleSidebar = () => {
    // dispatch(setSidebarOpen(!isSidebarOpen));
  };

  useEffect(() => {
    if (!userImageSrc) {
      logout();
    }
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        position="relative"
        color="primary"
        elevation={0}
        className={classes.header}
      >
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item sm={8}>
              <Grid container alignItems="center" className={classes.h100}>
                <If condition={mobileWidth && pathname !== "/home"}>
                  <IconButton
                    edge="start"
                    onClick={toggleSidebar}
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
                </If>
                <LinkButton
                  to="/home"
                  color="primary"
                  variant="contained"
                  disableElevation
                  className={classes.title}
                >
                  <span className={classes.logoContainer}>
                    <img src={Logo} className={classes.logo} alt="logo" />
                  </span>
                  <b className={classes.nowrap}>Admin dashboard</b>
                </LinkButton>
                <DashboardDropdown />
                {/* <If
                  condition={
                    userImageSrc && !mobileWidth && pathname !== "/home"
                  }
                >
                </If> */}
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" className={classes.h100}>
                <If condition={userImageSrc}>
                  <If condition={!mobileWidth}>
                    <img
                      src={userImageSrc}
                      alt="userImg"
                      width="35"
                      className={classes.rounded}
                    />
                  </If>
                  <If condition={mobileWidth}>
                    <Link to="/home">
                      <IconButton className={classes.logout}>
                        <HomeOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Link>
                  </If>
                  <IconButton onClick={logout} className={classes.logout}>
                    <PowerSettingsNewIcon fontSize="small" />
                  </IconButton>
                </If>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
