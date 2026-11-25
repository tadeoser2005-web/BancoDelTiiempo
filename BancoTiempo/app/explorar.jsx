import React from 'react';
import { useRouter } from 'expo-router';
import ExploreScreen from '../src/screens/ExploreScreen.jsx';
import { getExpoRoute } from '../src/navigation/routes.js';

export default function ExploreRoute() {
  const router = useRouter();

  return (
    <ExploreScreen
      onNavigate={(screen) => router.push(getExpoRoute(screen))}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)'))}
    />
  );
}
