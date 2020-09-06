import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from '../../Dashboard/Drawer';

const UserPortfolio = (props) => {
  const classes = styles();
  const [sortBy, setSortBy] = React.useState('age');
  console.log(props.history.location.state);
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer />
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid
            container
            spacing={3}
            style={{ height: '100%' }}
            justify="center"
          >
            <Grid item xs={12}>
              <Card className={classes.card} elevation={8}>
                <CardContent className={classes.cardContent}>
                  <img
                    src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
                    className={classes.image}
                  />

                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.name}
                  >
                    User NAme
                  </Typography>
                  <Typography className={classes.talent} color="textSecondary">
                    USer Name
                  </Typography>
                  <Typography variant="body2" component="p">
                    Age:14
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                  <Button variant="contained" color="primary">
                    See Portfolio
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',

    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),

    paddingBottom: theme.spacing(4),
    height: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },

  image: {
    borderRadius: '50%',
    width: 200,
    height: 200,
    border: `2px solid ${theme.palette.primary.light}`,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    margin: 10,
  },
  talent: {
    textTransform: 'capitalize',
    margin: 5,
  },
  actions: {
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  firstRow: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default UserPortfolio;
