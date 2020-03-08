import React, { useState } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import MoviesNavigator from './navigation/MoviesNavigator';
import MoviesReducer from './store/reducers/movies';

enableScreens();

const rootReducer = combineReducers({
  movies: MoviesReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    balo: require('./assets/fonts/balo-primary.ttf'),
    sawarabi: require('./assets/fonts/sawarabi-secondary.ttf')
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <MoviesNavigator />
    </Provider>
  );
};

export default App;
