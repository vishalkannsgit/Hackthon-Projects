
import React from 'react';
import { View, StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';

const PlayerScreen = ({ route }) => {
  const { videoLink } = route.params;

  return (
    <View style={styles.container}>
      <YouTube
        videoId={videoLink}
        play
        fullscreen
        loop
        apiKey="YOUR_YOUTUBE_API_KEY"
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    alignSelf: 'stretch',
    height: 300,
  },
});

export default PlayerScreen;
