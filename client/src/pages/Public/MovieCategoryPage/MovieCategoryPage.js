import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import ResponsiveMovieCard from '../components/ResponsiveMovieCard/ResponsiveMovieCard';
import { getMovies } from '../../../store/actions';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: '3rem',
    lineHeight: '3rem',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(3),
  },
  movieGrid: {
    marginLeft: theme.spacing(12), // Adjust this value to move the cards further right
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1), // You can adjust this value for smaller screens
    },
  },
  [theme.breakpoints.down('sm')]: {
    fullWidth: { width: '100%' }
  }
}));


function MovieCategoryPage(props) {
  const { movies, getMovies } = props;
  const category = props.match.params.category;

  useEffect(() => {
    if (!movies.length) {
      getMovies();
    }
  }, [movies, getMovies]);

  const classes = useStyles(props);

  return (
    <Grid container spacing={2}>
      {!['nowShowing', 'comingSoon'].includes(category) ? (
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h2" color="inherit">
            Category Does not exist.
          </Typography>
        </Grid>
      ) : (
        <>
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h2" color="inherit">
              {category}
            </Typography>
          </Grid>
          <Grid
          container
          item
          xs={12}
          direction="row"
          alignItems="center"
          justify="center"
          spacing={2}
          className={classes.movieGrid} // Add the class here
>
  {movies.map((movie, index) => (
    <Grid key={movie._id} item xs={12} sm={6} md={4}>
      <ResponsiveMovieCard movie={movie} />
    </Grid>
  ))}
</Grid>

        </>
      )}
    </Grid>
  );
}

const mapStateToProps = ({ movieState }, ownProps) => ({
  movies: movieState[ownProps.match.params.category] || []
});

const mapDispatchToProps = { getMovies };

export default connect(mapStateToProps, mapDispatchToProps)(MovieCategoryPage);
