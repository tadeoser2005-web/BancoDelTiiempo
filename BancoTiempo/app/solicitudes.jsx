import React from 'react';
import { useRouter } from 'expo-router';
import RequestsScreen from '../src/screens/RequestScreen.jsx';
import { getExpoRoute } from '../src/navigation/routes.js';

export default function RequestsRoute() {
  const router = useRouter();

  return (
    <RequestsScreen
      onNavigate={(screen) => router.push(getExpoRoute(screen))}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)'))}
    />
  );
}
