import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // デバイスの画面サイズを取得

const Register3Screen = () => {
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
      <View style={styles.weekDays}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <Text key={index} style={styles.weekDayText}>{day}</Text>
        ))}
      </View>
      <View style={styles.grid}>
        {Array.from({ length: 20 }).map((_, index) => (
          <View key={index} style={styles.gridRow}>
            <View style={styles.gridLine} />
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.completeButtonText}>完了</Text>
      </TouchableOpacity>
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
    top: 650,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeLabels: {
    position: 'absolute',
    left: 13,
    top: 90,
  },
  timeText: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: '400',
    marginBottom: 12,
  },
  weekDays: {
    position: 'absolute',
    left: 52,
    top: 57,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 104, // Adjust to fit the screen
  },
  weekDayText: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  grid: {
    position: 'absolute',
    left: 51,
    top: 89,
    width: 295,
    height: 419,
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
  completeButton: {
    width: 125,
    height: 50,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 14,
    paddingBottom: 14,
    position: 'absolute',
    left: (width - 125) / 2,
    top: 550,
    backgroundColor: '#EEEEEE',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeButtonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 24,
  },
});

export default Register3Screen;
