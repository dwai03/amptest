import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Logo from './facetslogo.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 128,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  sign_in: {
    backgroundColor: theme.palette.actionOrange,
  },
  logo: {
    marginLeft: theme.spacing(4),
    maxHeight: 84,
  },
  links_box: {
    display: "flex",
    flexDirection: "row-reverse",
    flexGrow: 1,
    alignContent: "end",
  },
  top_link: {
    color: "white",
    marginRight: theme.spacing(8),

  },
  menu_root: {
    minWidth: 200,
  },
  menu_button_container: {
    width: 240,
    marginRight: theme.spacing(4),
  },
  menu_button_label: {
    color: "white",
    textTransform: "none",
    justifyContent: "space-between",
  }
}));



export default function AppHeaderBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let history = useHistory();

  const handleToggle = (event) => {
    // setAuth(!auth);
    setAnchorEl(event.currentTarget);
  };

  const handleLogin = () => {
    //mocking login
    // need to dispatch success here
    setAnchorEl(null);
    setAuth(!auth);
    history.push("/dashboard")
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    setAuth(!auth);
    history.push("/login")
  };


  return (
    <React.Fragment>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Box>
            <img src={Logo} alt="Logo" className={classes.logo} />
          </Box>
          <Box className={classes.links_box}>
            <Link component={RouterLink} className={classes.top_link} to="/dashboard">Dashboard</Link>
            <Link className={classes.top_link}>Work Flow</Link>
          </Box>

          {auth && (
            <div className={classes.menu_button_container}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                fullWidth
                endIcon={<ArrowDropDownIcon />}
                onClick={handleToggle}
                classes={{ label: classes.menu_button_label }}
              >
                <div className="menu_button">
                  Andrew Scott
                                </div>
              </Button>
              <Menu
                getContentAnchorEl={null}
                classes={{ paper: classes.menu_root }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}

                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
          {!auth &&
            <Button variant="contained" className={classes.sign_in} onClick={handleLogin}>Sign In!</Button>
          }
        </Toolbar>
      </AppBar>
      <Box bgcolor="deeppink" width={1} height={20}></Box>
    </React.Fragment>
  )
}