import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6} className={classes.container}>
        <Card variant="elevation" elevation={3} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <img
              src="https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1"
              className={classes.image}
            />
            <Typography variant="body2" className={classes.text}>
              Are You Sure You Wanted To Come Here?
            </Typography>

            <Button
              variant="contained"
              startIcon={<HomeIcon />}
              color="primary"
              className={classes.button}
              component={Link}
              to="/"
            >
              Home
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    minHeight: '50vh',
    width: '100%',
    margin: 'auto',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  card: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    margin: theme.spacing(5),
    flexGrow: 1,

    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
  },
  button: {
    marginTop: 10,
    textDecoration: 'none',
  },
  text: {
    margin: '20px 0 20px 0',
  },
}));
