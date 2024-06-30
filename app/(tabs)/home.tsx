import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
      <Text style={styles.header}>シフト管理くん</Text>
      <TouchableOpacity style={[styles.button, { top: height * 0.35 }]} onPress={() => router.push('/search')}>
        <Text style={styles.buttonText}>代理検索</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { top: height * 0.50 }]} onPress={() => router.push('/register')}>
        <Text style={styles.buttonText}>シフト登録</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { top: height * 0.65 }]} onPress={() => router.push('/print')}>
        <Text style={styles.buttonText}>一覧印刷</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: 'white'
  },
  header: {
    width: width * 0.8,
    height: height * 0.1,
    position: 'absolute',
    top: height * 0.20,
    left: width * 0.1,
    textAlign: 'center',
    color: 'black',
    fontSize: 31,
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: 47
  },
  button: {
    width: width * 0.5,
    height: height * 0.08,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
    position: 'absolute',
    left: width * 0.25,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: 24
  }
});
