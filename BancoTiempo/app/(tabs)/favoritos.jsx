import React from 'react';
import { useRouter } from 'expo-router';
import FavoritesScreen from '../../src/screens/FavoritesScreen.jsx';
import { getExpoRoute } from '../../src/navigation/routes.js';

export default function FavoritesTabRoute() {
  const router = useRouter();

  return (
    <FavoritesScreen
      onNavigate={(screen) => router.push(getExpoRoute(screen))}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)'))}
    />
  );
}
