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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Drawer from '../Dashboard/Drawer';

const UserPortfolioList = (props) => {
  const classes = styles();
  const [sortBy, setSortBy] = React.useState('age');

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer />
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} style={{ height: '100%' }}>
            <Grid item xs={12} className={classes.firstRow}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-error-label">
                  Sort By
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortBy}
                  onChange={handleChange}
                >
                  <MenuItem value="age">Age</MenuItem>
                  <MenuItem value="name">Name</MenuItem>
                  <MenuItem value="talent">Talent</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {users.map((user) => (
              <Grid item xs={12} sm={6} md={3} key={user.id}>
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
                      {user.name}
                    </Typography>
                    <Typography
                      className={classes.talent}
                      color="textSecondary"
                    >
                      {user.talent}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Age:{user.age}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.actions}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        props.history.push(`/portfolios/:${user.id}`, { user })
                      }
                    >
                      See Portfolio
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
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
    width: '50%',
    height: '50%',
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

export default UserPortfolioList;

const users = [
  {
    id: 1,
    name: 'John Doe',
    age: 12,
    talent: 'singing',
  },
  {
    id: 2,
    name: 'John Doe',
    age: 12,
    talent: 'singing',
  },
  {
    id: 3,
    name: 'John Doe',
    age: 12,
    talent: 'singing',
  },
  {
    id: 4,
    name: 'John Doe',
    age: 12,
    talent: 'singing',
  },
  {
    id: 5,
    name: 'John Doe',
    age: 12,
    talent: 'singing',
  },
  {
    id: 6,
    name: 'John Doe',
    age: 12,
    talent: 'singing',
  },
  {
    id: 7,
    name: 'John Doe',
    age: 12,
    talent: 'singing',
  },
  {
    id: 8,
    name: 'John Doe',
    age: 12,
    talent: 'singing',
  },
];
