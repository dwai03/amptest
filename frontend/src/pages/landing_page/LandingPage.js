import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme)=> ({
  container: {
    marginTop: 0,
    padding: 0
  },
  section_1_container: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6752A2',
  },
  message_box: {
    width: 300,
  },
  message_text: {
    fontFamily: "Tenon",
    fontWeight: "bold",
    fontSize: 36,
    color: '#ffffff',
    textTransform: "uppercase",
    lineHeight: 1,
  },
  message_info_line: {
    width: 400,
    fontSize: 18,
    fontWeight: 'normal',
    color: "#ffffff",
    lineHeight: 1,
    marginTop: 8,
  },
  action_button: {
    backgroundColor: theme.palette.actionPink,
    marginTop: 16,
    color: '#fff',
  },
  section_2_container: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  message_box_2: {
    marginLeft: 110,
    width: 300,
  },
  message_text_2: {
    fontFamily: "Tenon",
    fontWeight: "bold",
    fontSize: 36,
    color: theme.palette.actionBlue,
    textTransform: "uppercase",
    lineHeight: 1,
  },
  message_info_line_2: {
    width: 440,
    fontSize: 18,
    fontWeight: 'normal',
    color: "#000",
    lineHeight: 1,
    marginTop: 8,
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <React.Fragment>
      <CssBaseline />
        <Box className={classes.container}>
          <Box className={classes.section_1_container}>
            <div className={classes.message_box}>
              <div className={classes.message_text}>the future</div>
              <div className={classes.message_text}>of influencer</div>
              <div className={classes.message_text}>marketing</div>
              <div className={classes.message_text}>is here</div>
              <div className={classes.message_info_line}>Get consumers talking about your brand and buying your products with creator marketing.</div>
              <div>
                <Button variant="contained" className={classes.action_button} onClick={() => {history.push("/become-creator")}}>Learn More</Button>
              </div>
            </div>
          </Box>
          <Box className={classes.section_2_container}>
          <div className={classes.message_box_2}>
              <div className={classes.message_text_2}>only</div>
              <div className={classes.message_text_2}>authentic</div>
              <div className={classes.message_text_2}>matches</div>
              <div className={classes.message_info_line_2}>Reaching new audiences and increasing ROI from your brand campaigns is at the heart of what we do. Quickly match to thousands of influencers based on their passions and lifestyles, ensuring an authentic expression of your brand that drives new customer sales.</div>
              <div>
                <Button variant="contained" className={classes.action_button} onClick={() => {history.push("/become-creator")}}>Learn More</Button>
              </div>
            </div>
          </Box>
        </Box>
    </React.Fragment>
  )
}