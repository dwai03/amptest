import React from 'react';
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

}));

export default function ProfileCardSimple() {
  const classes = useStyles();
  return (
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
  );
}