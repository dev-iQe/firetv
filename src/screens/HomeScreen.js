import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TextInput } from 'react-native';
import MovieCard from '../components/MovieCard';
import { fetchTrending, searchMovies } from '../services/api';

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setLoading(true);
    const data = await fetchTrending();
    setMovies(data.results || []);
    setLoading(false);
  };

  const handleSearch = async (text) => {
    setQuery(text);
    if (text.length > 2) {
      const data = await searchMovies(text);
      setMovies(data.results || []);
    } else {
      loadMovies();
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ابحث عن فيلم..."
        placeholderTextColor="#94a3b8"
        value={query}
        onChangeText={handleSearch}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate('Details', { movieId: item.id })}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', paddingTop: 50 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f172a' },
  input: {
    backgroundColor: '#1e293b',
    color: '#fff',
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  list: { paddingHorizontal: 8, paddingBottom: 20 },
});
