import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 追加

Dimensions.get('window');

export default function SearchScreen() {
  const navigation = useNavigation(); // 追加

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentDate, setCurrentDate] = useState({ year: '', month: '', days: [], firstDayOfMonth: 0, daysInMonth: 0 });
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const date = new Date(currentYear, currentMonth);
    const year = date.getFullYear();
    const month = date.toLocaleString('ja-JP', { month: 'long' });
    const daysInMonth = new Date(year, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, currentMonth, 1).getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

    const lastMonthDays = [];
    for (let i = firstDayOfMonth; i > 0; i--) {
      lastMonthDays.push(new Date(year, currentMonth, -i + 1).getDate());
    }

    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const totalDays = lastMonthDays.length + currentMonthDays.length;
    const rows = Math.ceil(totalDays / 7);
    const remainingDays = rows * 7 - totalDays;

    const nextMonthDays = Array.from({ length: remainingDays }, (_, i) => i + 1);

    const daysArray = [...lastMonthDays, ...currentMonthDays, ...nextMonthDays];

    setCurrentDate({ year, month, days: daysArray, firstDayOfMonth, daysInMonth });
  }, [currentYear, currentMonth]);

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const filterOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  return (
    <View style={styles.container}>
      <View style={styles.dateSelection}>
        <Text style={styles.dateSelectionText}>日付選択</Text>
      </View>
      <View style={styles.datePickerContainer}>
        <View style={styles.datePicker}>
          <View style={styles.datePickerHeader}>
            <TouchableOpacity onPress={goToPreviousMonth} style={styles.angleButton}>
              <View style={styles.arrowLeft}></View>
            </TouchableOpacity>
            <View style={styles.datePickerHeaderContent}>
              <Text style={styles.monthText}>{currentDate.month} {currentDate.year}</Text>
            </View>
            <TouchableOpacity onPress={goToNextMonth} style={styles.angleButton}>
              <View style={styles.arrowRight}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.calendar}>
            <View style={styles.weekDays}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <Text key={day} style={styles.weekDayText}>{day}</Text>
              ))}
            </View>
            {Array.from({ length: Math.ceil(currentDate.days.length / 7) }, (_, weekIndex) => (
              <View key={weekIndex} style={styles.datePickerRow}>
                {currentDate.days.slice(weekIndex * 7, (weekIndex + 1) * 7).map((day, dayIndex) => {
                  const isInactive = weekIndex * 7 + dayIndex < currentDate.firstDayOfMonth || weekIndex * 7 + dayIndex >= currentDate.firstDayOfMonth + currentDate.daysInMonth;
                  const isSelected = selectedDate === day && !isInactive;
                  return (
                    <TouchableOpacity
                      key={dayIndex}
                      style={[
                        styles.datePickerDaySlot,
                        isSelected && styles.datePickerDaySelected
                      ]}
                      onPress={() => !isInactive && setSelectedDate(day)}
                    >
                      <View style={styles.datePickerDayBase}>
                        <View style={styles.dateContent}>
                          <Text
                            style={[
                              styles.dateText,
                              isInactive ? styles.dateTextInactive : null,
                              isSelected ? styles.dateTextActive : null
                            ]}
                          >
                            {day}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.filterButton}>
        <Text style={styles.filterButtonText}>絞り込み</Text>
      </View>
      <View style={styles.filterOptionsContainer}>
        {filterOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.filterOptionButton,
              selectedFilter === option && styles.filterOptionButtonSelected
            ]}
            onPress={() => setSelectedFilter(option)}
          >
            <Text
              style={[
                styles.filterOptionButtonText,
                selectedFilter === option && styles.filterOptionButtonTextSelected
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('search2')}>
        <Text style={styles.searchButtonText}>検索</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dateSelection: {
    width: '70%',
    height: 74,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateSelectionText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: 24,
  },
  filterButton: {
    width: '40%',
    height: 39,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: 24,
  },
  searchButton: {
    width: '33%',
    height: 49,
    marginTop: 30,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchButtonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 24,
  },
  datePickerContainer: {
    width: '80%',
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  datePicker: {
    width: '100%',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
    height: 340,
  },
  datePickerHeader: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12,
  },
  angleButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeft: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#797B86',
    transform: [{ rotate: '-90deg' }],
  },
  arrowRight: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#797B86',
    transform: [{ rotate: '90deg' }],
  },
  datePickerHeaderContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2,
  },
  monthText: {
    color: '#0E0E0F',
    fontSize: 15,
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: 24,
  },
  calendar: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  weekDays: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  weekDayText: {
    flex: 1,
    textAlign: 'center',
    color: '#797B86',
    fontSize: 11,
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: 14,
  },
  datePickerRow: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  datePickerDaySlot: {
    width: '14.28%', // Each day slot takes 1/7th of the width
    alignItems: 'center',
  },
  datePickerDayBase: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTextInactive: {
    textAlign: 'center',
    color: '#D6D8E1',
    fontSize: 15,
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: 24,
    opacity: 0.5, // Make inactive dates semi-transparent
  },
  dateText: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: 24,
  },
  datePickerDaySelected: {
    backgroundColor: '#D3D3D3', // 選択された日の背景色
  },
  currentDate: {
    backgroundColor: '#0E0E0F',
    borderRadius: 8,
  },
  dateTextActive: {
    color: 'black',
    fontWeight: '600',
  },
  filterOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  filterOptionButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: 'white', // デフォルトの背景色
  },
  filterOptionButtonText: {
    color: 'black', // デフォルトのテキスト色
  },
  filterOptionButtonSelected: {
    backgroundColor: '#A9A9A9', // 選択されたときの背景色
  },
  filterOptionButtonTextSelected: {
    color: 'black', // 選択されたときのテキスト色
  },
});
