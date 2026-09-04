import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ الإعدادات</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>🌙 الوضع الليلي</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>🌍 اللغة العربية</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>💾 مساحة التخزين</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', paddingTop: 60, paddingHorizontal: 20 },
  title: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  item: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  itemText: { color: '#fff', fontSize: 18 },
});
