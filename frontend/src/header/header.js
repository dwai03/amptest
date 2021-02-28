import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

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
  button_root: {

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

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Box>
          <img src={Logo} alt="Logo" className={classes.logo} />
        </Box>
        <Box className={classes.links_box}>
          <Link className={classes.top_link}>Dashboard</Link>
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
              classes={{ paper: classes.menu_root }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              getContentAnchorEl={null}
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
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}