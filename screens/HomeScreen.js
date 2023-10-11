import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { id: '1', title: 'Python: Introduction', youtubeLink: 'https://www.youtube.com/watch?v=5Jppcxc1Qzc' },
    { id: '2', title: 'Introduction to AI', youtubeLink: 'https://www.youtube.com/watch?v=t4K6lney7Zw' },
    { id: '3', title: 'AI with Python', youtubeLink: 'https://www.youtube.com/watch?v=WbzNRTTrX0g' },
    { id: '4', title: 'Data Structures', youtubeLink: 'https://www.youtube.com/watch?v=RBSGKlAvoiM' },
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const handleSearch = (text) => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setSearchQuery(text);
    setData(filteredData);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);

  }, [setRefreshing]);

  const getYoutubeVideoId = (url) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : '';
  };

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Display search results */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              navigation.navigate('Player', { videoLink: getYoutubeVideoId(item.youtubeLink) });
            }}
          >
            <Text>{item.title}</Text>
            {/* Embedded YouTube video */}
            <WebView
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: `https://www.youtube.com/embed/${getYoutubeVideoId(item.youtubeLink)}` }}
            />
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 16,
  },
  video: {
    height: 200, // Adjust the height as needed
    marginTop: 10,
  },
});

export default HomeScreen;
