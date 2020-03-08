import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import MoviesList from '../components/MoviesList';
import Variable from '../env';
import MessageText from '../components/MessageText';

const MoviesListScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const handleIconPress = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${Variable.Api_Key}&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        setMovies([...data.results]);
      });
  };

  const selectItemHandler = (id, title) => {
    props.navigation.navigate('Details', {
      movieId: id,
      movieTitle: title,
      movies: movies
    });
  };

  let Message = 'Search your favourite movies';

  if (searchTerm && movies.length === 0) {
    Message =
      "Can't find any movie, are you sure you remember its name correctly ?";
  }

  return (
    <View style={styles.moviesScreen}>
      <Searchbar
        placeholder='Search movie'
        style={styles.searchBar}
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        onIconPress={handleIconPress}
      />
      {!searchTerm || movies.length === 0 ? (
        <MessageText>{Message}</MessageText>
      ) : (
        <MoviesList items={movies} onSelect={selectItemHandler} />
      )}
    </View>
  );
};

MoviesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Movies List',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='mainIcon' iconName='md-videocam' />
      </HeaderButtons>
    )
  };
};

export default MoviesListScreen;

const styles = StyleSheet.create({
  moviesScreen: {
    height: '100%',
    width: '100%',
    flex: 1
  },
  searchBar: {
    margin: 10
  }
});
