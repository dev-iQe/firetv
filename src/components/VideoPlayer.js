import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function VideoPlayer({ videoUrl }) {
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={isPlaying}
        style={styles.video}
        useNativeControls
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
          <Text style={styles.btnText}>{isPlaying ? '⏸️' : '▶️'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSubtitlesEnabled(!subtitlesEnabled)}>
          <Text style={styles.btnText}>{subtitlesEnabled ? '🔊' : '🔇'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', height: 220, backgroundColor: '#000' },
  video: { width: '100%', height: '100%' },
  controls: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    gap: 20,
  },
  btnText: { color: '#fff', fontSize: 24, backgroundColor: 'rgba(0,0,0,0.5)', padding: 5, borderRadius: 5 },
});
