import React from 'react';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}>
      <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="favoritos" options={{ title: 'Favoritos' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
