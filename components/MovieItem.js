import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const MovieItem = (props) => {
  const handleSelectItem = () => {
    props.onSelect(props.id, props.header);
  };

  const imgPath = props.imageSrc
    ? `https://image.tmdb.org/t/p/w185${props.imageSrc}`
    : 'https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200';

  return (
    <TouchableOpacity style={styles.item} onPress={handleSelectItem}>
      <Image source={{ uri: imgPath }} style={styles.image} />
      <View style={styles.textBox}>
        <Text style={styles.header}>{props.header}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: '100%',
    height: 200,
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,

    position: 'relative'
  },
  image: {
    width: '40%',
    height: '100%'
  },
  textBox: {
    flex: 1,
    padding: 20,
    overflow: 'hidden',
    marginBottom: 10,
    marginRight: 10
  },
  header: {
    fontSize: 20,
    fontFamily: 'balo'
  },
  description: {
    fontSize: 10,
    fontFamily: 'sawarabi'
  }
});
