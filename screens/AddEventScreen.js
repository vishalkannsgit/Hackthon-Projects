
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddEventScreen = ({ navigation }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const addEvent = () => {
  
    console.log(`Event Name: ${eventName}, Description: ${eventDescription}`);

   
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Event</Text>

      <TextInput
        style={styles.input}
        placeholder="Event Name"
        value={eventName}
        onChangeText={(text) => setEventName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Event Description"
        value={eventDescription}
        onChangeText={(text) => setEventDescription(text)}
      />

      <Button title="Add Event" onPress={addEvent} />
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

export default AddEventScreen;
