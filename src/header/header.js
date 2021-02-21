import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import Logo from './facetslogo.png';
import { PlayCircleFilledWhite } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
  logo: {
    maxHeight: 72,
  },
  links_box: {
    display: "flex",
    flexDirection: "row-reverse",
    flexGrow: 1,
    alignContent: "end",
  },
  top_link: {
    color: "white",
    marginRight: 36,
    fontWeight: "bolder"

  },
  menu_button_container: {
    width: 200,
  },
  menu_button: {
    color: "white",
    textTransform: "none",
    justifyContent: "left"
  },
  toolbar: {
      minHeight: 128,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
  }
}));



export default function AppHeaderBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
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
                    <Link className={classes.top_link}>Work Flows</Link>
                    <Link className={classes.top_link}>Dashboard</Link>
                </Box>

                {auth && (
                    <div className={classes.menu_button_container}>

                        <Button  variant="contained" color="secondary" disableElevation fullWidth endIcon={<ArrowDropDownIcon/>} className={classes.menu_button}>
                            <div className="menu_button">
                                Beautiful People
                            </div>
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    )
}