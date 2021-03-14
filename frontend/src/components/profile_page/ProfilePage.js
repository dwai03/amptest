import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { CardHeader, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    color: 'black',
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    border: "none",
    backgroundColor: "#f2f2f2",
  },
  avatar: {
    backgroundColor: "#c9c9c9",
    height: 128,
    width: 128,
  },
  card_title: {
    fontWeight: 'bold',
  },
  card_subheader: {
    fontSize: '1rem',
    lineHeight: 1,
  },
  subheader_item: {
    padding: 0,
    color: "black",
  },
  card_content: {
    padding: 8,
    '&:last-child': {
      paddingBottom: 0,
    }
  },
  card_infotext: {
    fontSize: '1rem',
    height: 100,
    width: 570,
    letterSpacing: -0.16,
    lineHeight: 1,
  }

}));

export default function ProfilePage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper variant="outlined" className={classes.root}>
        <CardHeader
          className={classes.card_content}
          avatar={
            <Avatar aria-label="profile" className={classes.avatar}>
              <PersonIcon style={{ fontSize: 94 }} />
            </Avatar>
          }
          title={
            <Typography variant="h4" className={classes.card_title}>Andrew Scott</Typography>
          }
          subheader={
            <Typography variant="body2" component="div" className={classes.card_subheader}>
              <List dense disablePadding>
                <ListItem dense disableGutters className={classes.subheader_item}>28 He / Him</ListItem>
                <ListItem dense disableGutters className={classes.subheader_item}>@themisterjuly</ListItem>
                <ListItem dense disableGutters className={classes.subheader_item}>Beauty / Fashion / Fitness</ListItem>
              </List>
            </Typography>
          }
        />
      </Paper>
    </React.Fragment>
  );
}