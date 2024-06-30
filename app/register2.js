import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // ナビゲーションフックをインポート

const { width, height } = Dimensions.get('window'); // デバイスの画面サイズを取得

const Register2Screen = () => {
  const navigation = useNavigation(); // ナビゲーションオブジェクトを取得

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.homeButton}>
        <Text style={styles.buttonText}>ホーム</Text>
      </TouchableOpacity>

      <View style={styles.remarkContainer}>
        <Text style={styles.label}>備考記入</Text>
        <View style={styles.remarkBox}>
          <Text style={styles.remarkText}>備考</Text>
        </View>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.label}>名前</Text>
        <TextInput style={styles.nameInput} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('register3')}>
        <Text style={styles.buttonText}>つぎへ</Text>
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
    left: 140,
    top: 581,
    position: 'absolute',
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: 80,
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    left: 17,
    top: 581,
    position: 'absolute',
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
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
  remarkContainer: {
    width: 264,
    height: 129,
    left: 50,
    top: 288,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 8,
  },
  label: {
    alignSelf: 'stretch',
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 24,
  },
  remarkBox: {
    width: 260,
    height: 97,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'white',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  remarkText: {
    flex: 1,
    color: '#828282',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 24,
  },
  nameContainer: {
    left: 32,
    top: 44,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 8,
  },
  nameInput: {
    width: 260,
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'white',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  button: {
    width: 125,
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
    left: 117,
    top: 468,
    position: 'absolute',
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Register2Screen;
