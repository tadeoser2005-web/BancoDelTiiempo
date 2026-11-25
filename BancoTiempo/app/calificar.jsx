import React from 'react';
import { useRouter } from 'expo-router';
import RateServiceScreen from '../src/screens/RateServiceScreen.jsx';
import { getExpoRoute } from '../src/navigation/routes.js';

export default function RateServiceRoute() {
  const router = useRouter();

  return (
    <RateServiceScreen
      onNavigate={(screen) => router.replace(getExpoRoute(screen))}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)'))}
    />
  );
}
