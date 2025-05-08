import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getNotes } from '../../api/notes';

export default function NotesScreen() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
      .then(res => setNotes(res.data))
      .catch(err => console.error('Failed to fetch notes:', err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📒 My Notes</Text>

      <FlatList
      data={notes}
      keyExtractor={(item, index) => item?.id?.toString?.() || index.toString()}
      renderItem={({ item }: { item: any }) => (
      <View style={styles.note}>
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={2}>{item.content}</Text>
      </View>
    )}
  />
</View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  note: { marginBottom: 16, padding: 12, backgroundColor: '#eee', borderRadius: 8 },
  title: { fontWeight: 'bold', fontSize: 16 },
});

