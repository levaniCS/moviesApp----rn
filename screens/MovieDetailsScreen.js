import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';

import { toggleFavourite, setMoviesInArr } from '../store/actions/movies';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';

const MovieDetailsScreen = (props) => {
  const movieId = props.navigation.getParam('movieId');
  const MOVIES = props.navigation.getParam('movies');

  const dispatch = useDispatch();

  const selectedMovie = MOVIES.find((movie) => movie.id === movieId);

  const currentMovieIsFavourite = useSelector((state) =>
    state.movies.favouriteMovies.some((movie) => movie.id === movieId)
  );

  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(movieId));
  }, [dispatch, movieId]);

  useEffect(() => {
    dispatch(setMoviesInArr(MOVIES));
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, []);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMovieIsFavourite });
  }, [currentMovieIsFavourite]);

  return (
    <ScrollView style={styles.screen}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w185${selectedMovie.poster_path}`
        }}
        style={styles.image}
      />
      <View style={styles.textBox}>
        <Text style={styles.header}>{selectedMovie.original_title}</Text>
        <Text style={styles.secondaryText}>
          {!selectedMovie.adult && '18+'}
        </Text>
        <Text style={styles.secondaryText}>
          {selectedMovie.popularity &&
            'Popularity: ' + selectedMovie.popularity}
        </Text>
        <Text style={styles.secondaryText}>
          {selectedMovie.popularity &&
            'Release date: ' + selectedMovie.release_date}
        </Text>
        <Text style={styles.description}>{selectedMovie.overview}</Text>
      </View>
    </ScrollView>
  );
};

MovieDetailsScreen.navigationOptions = (navData) => {
  const movieTitle = navData.navigation.getParam('movieTitle');

  const toggleFavourite = navData.navigation.getParam('toggleFav');
  const isFavourite = navData.navigation.getParam('isFav');
  return {
    headerTitle: movieTitle,
    headerTitleStyle: {
      fontFamily: 'balo',
      width: movieTitle.length >= 20 ? '85%' : '100%'
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Fav'
          iconName={isFavourite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavourite}
        />
      </HeaderButtons>
    )
  };
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20
  },
  image: {
    flex: 1,
    width: '100%',
    height: 400
  },
  textBox: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 20
  },
  header: {
    fontFamily: 'balo',
    color: Colors.yellowDark,
    fontSize: 22,
    marginBottom: 5
  },
  description: {
    fontFamily: 'sawarabi',
    textAlign: 'center',
    fontSize: 15,
    color: Colors.blueDarkest
  },
  secondaryText: {
    fontFamily: 'sawarabi',
    marginBottom: 20,
    color: Colors.blueDark
  }
});
