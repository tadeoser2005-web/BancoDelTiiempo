import React from 'react';
import { useRouter } from 'expo-router';
import CreditsScreen from '../src/screens/CreditsScreen.jsx';
import { getExpoRoute } from '../src/navigation/routes.js';

export default function CreditsRoute() {
  const router = useRouter();

  return (
    <CreditsScreen
      credits={8.5}
      onNavigate={(screen) => router.push(getExpoRoute(screen))}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)'))}
    />
  );
}
