import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PrintScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>一覧印刷画面</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
