

import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const EventsScreen = () => {
  const [showTextInput, setShowTextInput] = useState(false);
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDescription: '',
    location: '',
    date: '',
  });

  const handleAddEvent = () => {
    setShowTextInput(true);
  };

  const handleSaveEvent = () => {
    // Handle the logic for saving events or any other action
    console.log('Event Name:', eventDetails.eventName);
    console.log('Event Description:', eventDetails.eventDescription);
    console.log('Location:', eventDetails.location);
    console.log('Date:', eventDetails.date);

    // Reset state and hide TextInput boxes
    setEventDetails({
      eventName: '',
      eventDescription: '',
      location: '',
      date: '',
    });
    setShowTextInput(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Events Screen</Text>

      {/* Display your existing events or any other UI elements */}
      {/* ... */}

      {showTextInput && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Event Name"
            value={eventDetails.eventName}
            onChangeText={(text) => setEventDetails({ ...eventDetails, eventName: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Event Description"
            value={eventDetails.eventDescription}
            onChangeText={(text) => setEventDetails({ ...eventDetails, eventDescription: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Location"
            value={eventDetails.location}
            onChangeText={(text) => setEventDetails({ ...eventDetails, location: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Date"
            value={eventDetails.date}
            onChangeText={(text) => setEventDetails({ ...eventDetails, date: text })}
          />

          <Button title="Save Event" onPress={handleSaveEvent} />
        </View>
      )}

      {!showTextInput && <Button title="Add Event" onPress={handleAddEvent} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default EventsScreen;
