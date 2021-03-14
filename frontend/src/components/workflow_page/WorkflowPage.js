import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ProfileCardSimple from '../profile_card_simple/profile_card_simple';

const useStyles = makeStyles((theme) => ({
    profile_section_container: {
      
    },
}));


export default function WorkflowPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.profile_section_container}>
        <ProfileCardSimple />
      </Box>
      <Box className={classes.campaigns_sections_container}>

      </Box>
    </React.Fragment>
  );
}