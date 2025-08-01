import { Tabs } from 'expo-router';
import React from 'react';
import {t} from 'i18next';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: t("navigation.home")
        }}
      />

    </Tabs>
  );
}
