import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av'

const { width, height } = Dimensions.get('window');

export default function App() {
  const [videoUrl, setVideoUrl] = useState('http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/48c8a9475285890781000441992/playlist.m3u8')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Demo App</Text>
      <Video
        source={{ uri: videoUrl }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: width,
    height: height / 3
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  }
});