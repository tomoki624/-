import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window'); // デバイスの画面サイズを取得

const Search2Screen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.homeButton}>
        <Text style={styles.buttonText}>ホーム</Text>
      </TouchableOpacity>
      <View style={styles.timeLabels}>
        {['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'].map((time, index) => (
          <Text key={index} style={styles.timeText}>{time}</Text>
        ))}
      </View>
      <View style={styles.grid}>
        {Array.from({ length: 20 }).map((_, index) => (
          <View key={index} style={styles.gridRow}>
            <View style={styles.gridLine} />
          </View>
        ))}
      </View>
      <Text style={styles.dateText}>9月7日（土）</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: 'white',
    position: 'relative',
  },
  homeButton: {
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    position: 'absolute',
    left: (width - 80) / 2,
    top: 587,
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 24,
  },
  timeLabels: {
    width: 60,
    height: 438,
    position: 'absolute',
    left: 7,
    top: 87,
  },
  timeText: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: '400',
    marginBottom: 13,
  },
  grid: {
    width: 295,
    height: 395,
    position: 'absolute',
    left: 48,
    top: 105,
  },
  gridRow: {
    height: 21,
    justifyContent: 'center',
  },
  gridLine: {
    borderBottomWidth: 1,
    borderColor: 'black',
    borderStyle: 'dotted',
  },
  dateText: {
    position: 'absolute',
    left: (width - 80) / 2,
    top: 39,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 24,
  },
});

export default Search2Screen;
