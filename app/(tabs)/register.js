import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // デバイスの画面サイズを取得

const RegisterScreen = () => {
  const navigation = useNavigation(); // ナビゲーションフックを使用

  // ダミーの名前リスト
  const initialNames = [
    '山田太郎', '鈴木一郎', '田中花子', '佐藤景子', '小林健二',
    '伊藤香', '加藤清', '斉藤弘', '渡辺貴子', '吉田美和',
    '松本拓也', '高橋涼子', '林陽子', '池田優', '森川翔',
    '石井晴香', '長谷川大樹', '中村萌', '青木真由美', '岩田聡',
    '藤原裕子', '三浦翔平', '岡田直人', '杉本奈々', '平野歩夢',
    '柴田理沙', '村上幸子', '清水大輔', '久保田浩', '松井玲奈',
    '田代まさし', '織田信長', '豊臣秀吉', '徳川家康', '坂本龍馬',
    '西郷隆盛', '大久保利通', '木戸孝允', '伊藤博文', '吉田茂'
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNames, setFilteredNames] = useState(initialNames);

  // 検索用のハンドラー
  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text === '') {
      setFilteredNames(initialNames);
    } else {
      setFilteredNames(initialNames.filter(item =>
        item.toLowerCase().includes(text.toLowerCase())
      ));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          value={searchTerm}
          onChangeText={handleSearch}
          placeholder="名前検索"
          placeholderTextColor="#828282"
        />
      </View>
      <ScrollView style={styles.listContainer}>
        {filteredNames.map((name, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemText}>{name}</Text>
            <View style={styles.statusIndicators}>
              {['#FF0303', '#0469FF', '#86E30F', '#9917FF'].map((color, index) => (
                <View key={index} style={[styles.statusDot, { backgroundColor: color }]} />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('register2')}>
        <Text style={styles.buttonText}>新規作成</Text>
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
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    width: width * 0.82,
    height: 40,
    position: 'absolute',
    top: 80,
    left: width * 0.088,
  },
  input: {
    fontSize: 16,
    fontFamily: 'Inter',
    flex: 1,
  },
  listContainer: {
    position: 'absolute',
    top: 140,
    left: width * 0.14,
    width: width * 0.72,
    height: height - 330, // スクロールビューの高さ調整
    marginBottom: 140, // スクロールビューの下に余白を追加
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  statusIndicators: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 9999,
  },
  footer: {
    position: 'absolute',
    left: width * 0.39,
    bottom: 70, // フッターを画面下部に配置
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  footerText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
  },
  button: {
    position: 'absolute',
    bottom: 120, // ボタンを画面下部に配置
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: 101,
    height: 50,
    alignSelf: 'center', // ボタンを中央揃えにする
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Inter',
    textAlign: 'center',
  },
});

export default RegisterScreen;
