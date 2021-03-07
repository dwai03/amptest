import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CardHeader, CardContent, Button, GridList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ProfileCard from './profilecard';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EventIcon from '@material-ui/icons/Event';
import HistoryIcon from '@material-ui/icons/History';
import IconButton from '@material-ui/core/IconButton';
import theme from '../theme';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  dashboard_container: {
    marginTop: 90,
    marginBottom: 90,
    display: 'flex',
    justifyContent: 'center',
  },
  top_section: {
    display: 'flex',
    maxWidth: 850,
  },
  top_section_left: {
    display: 'flex',
    flexDirection: 'column'
  },
  top_section_right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: theme.spacing(3),
  },
  action_large_container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3),
  },
  button_box_wide: {


    height: 88,
    width: 312,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button_box: {
    height: 88,
    width: 88,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    color: 'white',
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box className={classes.dashboard_container} >
          <Box className={classes.top_section}>
            <Box className={classes.top_section_left}>
              <ProfileCard />
              <Box id="action_buttons_lg" className={classes.action_large_container}>
                <Button variant="contained" className={classes.button_box_wide} style={{ backgroundColor: theme.palette.actionPurple }}>
                  <SearchIcon style={{ fontSize: 50, color: "white" }} />
                  <Typography variant="body2" component="div" className={classes.button_text}>Search Campaigns</Typography>
                </Button>
                <Button variant="contained" className={classes.button_box_wide} style={{ backgroundColor: theme.palette.actionGreen }}>
                  <MailOutlineIcon style={{ fontSize: 50, color: "white" }} />
                  <Typography variant="body2" component="div" className={classes.button_text}>Campaign Invites</Typography>
                </Button>
              </Box>
            </Box>
            <Box className={classes.top_section_right}>
              <Button variant="contained" className={classes.button_box} style={{ backgroundColor: theme.palette.actionRed }}>
                <NotificationImportantIcon style={{ fontSize: 50, color: "white" }} />
              </Button>
              <Button variant="contained" className={classes.button_box} style={{ backgroundColor: theme.palette.actionOrange }}>
                <ChatIcon style={{ fontSize: 50, color: "white" }} />
              </Button>
              <Button variant="contained" className={classes.button_box} style={{ backgroundColor: theme.palette.actionBlue }}>
                <EventIcon style={{ fontSize: 50, color: "white" }} />
              </Button>
              <Button variant="contained" className={classes.button_box} style={{ backgroundColor: theme.palette.actionPink }}>
                <HistoryIcon style={{ fontSize: 50, color: "white" }} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}