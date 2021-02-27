import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CardHeader, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 650,
    backgroundColor: '#363636',
    color: 'white',
  },
  avatar: {
    backgroundColor: "grey",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box style={{ minHeight: 600, marginTop: 150}} >
          <Box id="top_section">
            <Card className={classes.root}>
              <CardHeader
              disableTypography
                avatar={
                  <Avatar aria-label="profile" className={classes.avatar}>
                    AS
                </Avatar>
                }
                title="Andrew Scott"
              >
              </CardHeader>
              <CardContent>
                <Typography variant="body2" color="secondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis tortor in tempor iaculis. Aliquam nec vehicula turpis. Donec eget odio lobortis, placerat sem vitae, efficitur lorem. Cras viverra, ex quis varius sagittis, ante dolor efficitur turpis, eget fermentum eros nisl in magna. Sed sit amet nisl vulputate, feugiat est vitae, iaculis turpis.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}