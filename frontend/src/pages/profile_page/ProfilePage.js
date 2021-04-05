import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import ProfileCardSimple from '../../components/profile_card_simple/profile_card_simple';

const useStyles = makeStyles((theme) => ({

}));

export default function ProfilePage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ProfileCardSimple />
    </React.Fragment>
  );
}