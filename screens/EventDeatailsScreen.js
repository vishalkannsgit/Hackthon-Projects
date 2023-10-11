

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const EventDetailsScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.eventText}>{event.text}</Text>
      <Text style={styles.detailText}>Date: October 20, 2023</Text>
      <Text style={styles.detailText}>Location: Virtual</Text>
      <Text style={styles.detailText}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.</Text>
      <Button title="RSVP" onPress={() => alert('RSVP functionality goes here!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  eventText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default EventDetailsScreen;
