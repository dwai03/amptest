import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ProfileCardSimple from '../profile_card_simple/profile_card_simple';

const useStyles = makeStyles((theme) => ({

}));


export default function WorkflowPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ProfileCardSimple />
    </React.Fragment>
  );
}