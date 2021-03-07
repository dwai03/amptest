import react from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme)=> ({
  container: {
    marginTop: 90,
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box className={classes.container}>
          Landing
        </Box>
      </Container>
    </React.Fragment>
  )
}