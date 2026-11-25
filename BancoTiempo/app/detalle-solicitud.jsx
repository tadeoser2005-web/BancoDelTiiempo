import React from 'react';
import { useRouter } from 'expo-router';
import RequestDetailScreen from '../src/screens/RequestDetailScreen.jsx';
import { getExpoRoute } from '../src/navigation/routes.js';

export default function RequestDetailRoute() {
  const router = useRouter();

  return (
    <RequestDetailScreen
      onNavigate={(screen) => router.push(getExpoRoute(screen))}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/solicitudes'))}
    />
  );
}
