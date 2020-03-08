import React, { useEffect, useCallback } from 'react';
import { Alert, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import { clearFavourites } from '../store/actions/movies';
import MoviesList from '../components/MoviesList';
import MessageText from '../components/MessageText';

const FavouritesScreen = (props) => {
  const favMovies = useSelector((state) => state.movies.favouriteMovies);
  const dispatch = useDispatch();

  const pressOkHandler = () => {
    dispatch(clearFavourites());
  };

  const clearFavouritesList = useCallback(() => {
    Alert.alert('Clear list', 'Are you sure u want to delete all items ?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: pressOkHandler }
    ]);
  }, [dispatch]);

  useEffect(() => {
    props.navigation.setParams({ clear: clearFavouritesList });
  }, [clearFavouritesList]);

  const selectItemHandler = (id, title) => {
    props.navigation.navigate('Details', {
      movieId: id,
      movieTitle: title,
      movies: favMovies
    });
  };

  if (favMovies.length === 0 || !favMovies) {
    return (
      <View>
        <MessageText>No Favourite movies found. Start adding some!</MessageText>
      </View>
    );
  }

  return <MoviesList items={favMovies} onSelect={selectItemHandler} />;
};

FavouritesScreen.navigationOptions = (navData) => {
  const clearFavouritesList = navData.navigation.getParam('clear');
  return {
    headerTitle: 'Your Favourite Movies',
    headerTitleStyle: {
      fontFamily: 'balo'
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='clear'
          iconName='ios-trash'
          onPress={clearFavouritesList}
        />
      </HeaderButtons>
    )
  };
};

export default FavouritesScreen;
