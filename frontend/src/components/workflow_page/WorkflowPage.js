import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ProfileCardSimple from '../profile_card_simple/profile_card_simple';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(6),
      marginLeft: theme.spacing(6),
    },
    profile_section_container: {
      marginLeft: 0
    },
    campaigns_section_container: {
      
    }
}));




export default function WorkflowPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.root}>
      <Box className={classes.profile_section_container}>
        <ProfileCardSimple />
      </Box>
      <Box className={classes.campaigns_sections_container}>

      </Box>
      </Container>
    </React.Fragment>
  );
}