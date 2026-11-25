import React from 'react';
import { useRouter } from 'expo-router';
import ActiveExchangeScreen from '../src/screens/ActiveExchangeScreen.jsx';
import { getExpoRoute } from '../src/navigation/routes.js';

export default function ActiveExchangeRoute() {
  const router = useRouter();

  return (
    <ActiveExchangeScreen
      onNavigate={(screen) => router.push(getExpoRoute(screen))}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/solicitudes'))}
    />
  );
}
