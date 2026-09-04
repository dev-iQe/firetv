import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.title} numberOfLines={1}>
        {movie.title || movie.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
});
