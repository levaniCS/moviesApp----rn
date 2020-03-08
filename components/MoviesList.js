import React from 'react';
import { FlatList } from 'react-native';
import MovieItem from '../components/MovieItem';

const MoviesList = (props) => {
  const renderMovieItem = (itemdata) => {
    return (
      <MovieItem
        onSelect={props.onSelect}
        id={itemdata.item.id}
        imageSrc={itemdata.item.poster_path}
        header={itemdata.item.original_title}
        description={itemdata.item.overview}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id.toString()}
      data={props.items}
      renderItem={renderMovieItem}
    />
  );
};

export default MoviesList;
