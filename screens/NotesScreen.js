
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Share } from 'react-native';

const NotesScreen = () => {
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (noteText.trim() !== '') {
      setNotes([...notes, { id: Date.now().toString(), text: noteText }]);
      setNoteText('');
    }
  };

  const shareNotes = () => {
    const formattedNotes = notes.map((note) => `- ${note.text}`).join('\n');
    Share.share({
      message: `My Notes:\n${formattedNotes}`,
    });
  };

  return (
    <View style={styles.container}>
      

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter your note"
          value={noteText}
          onChangeText={(text) => setNoteText(text)}
        />
        <Button title="Add Note" onPress={addNote} />
      </View>

      <View style={styles.form}>
        <Button title="Share Notes" onPress={shareNotes} />
      </View>
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
  form: {
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  noteItem: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
});

export default NotesScreen;
