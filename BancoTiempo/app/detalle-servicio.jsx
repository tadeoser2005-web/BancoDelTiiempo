import React from 'react';
import { useRouter } from 'expo-router';
import ServiceDetailScreen from '../src/screens/ServiceDetailScreen.jsx';
import { getExpoRoute } from '../src/navigation/routes.js';

export default function ServiceDetailRoute() {
  const router = useRouter();

  return (
    <ServiceDetailScreen
      userCredits={8.5}
      onNavigate={(screen) => router.push(getExpoRoute(screen))}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/explorar'))}
    />
  );
}
