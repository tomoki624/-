// 必要なパッケージとコンポーネントをインポートします。
import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon'; // カスタムアイコンコンポーネントのインポート
import { Colors } from '@/constants/Colors'; // カラー定数のインポート
import { useColorScheme } from '@/hooks/useColorScheme'; // カラースキームを取得するカスタムフック

export default function TabLayout() {
  const colorScheme = useColorScheme(); // 現在のカラースキーム（ダークモードまたはライトモード）を取得します。

  return (
    // タブナビゲーションを設定します。
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // アクティブなタブの色を設定します。
        headerShown: false, // ヘッダーを非表示にします。
      }}>
      {/* ホームタブの設定 */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home', // タブのタイトルを設定します。
          tabBarIcon: ({ color, focused }) => (
            // タブのアイコンを設定します。フォーカスされている場合とされていない場合で異なるアイコンを表示します。
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      {/* 検索タブの設定 */}
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search', // タブのタイトルを設定します。
          tabBarIcon: ({ color, focused }) => (
            // タブのアイコンを設定します。フォーカスされている場合とされていない場合で異なるアイコンを表示します。
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
          ),
        }}
      />
      {/* 登録タブの設定 */}
      <Tabs.Screen
        name="register"
        options={{
          title: 'Register', // タブのタイトルを設定します。
          tabBarIcon: ({ color, focused }) => (
            // タブのアイコンを設定します。フォーカスされている場合とされていない場合で異なるアイコンを表示します。
            <TabBarIcon name={focused ? 'person-add' : 'person-add-outline'} color={color} />
          ),
        }}
      />
      {/* 印刷タブの設定 */}
      <Tabs.Screen
        name="print"
        options={{
          title: 'Print', // タブのタイトルを設定します。
          tabBarIcon: ({ color, focused }) => (
            // タブのアイコンを設定します。フォーカスされている場合とされていない場合で異なるアイコンを表示します。
            <TabBarIcon name={focused ? 'print' : 'print-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
