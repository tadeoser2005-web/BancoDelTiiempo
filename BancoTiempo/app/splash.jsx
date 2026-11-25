import React from 'react';
import { useRouter } from 'expo-router';
import SplashScreen from '../src/screens/SplashScreen.jsx';
import { getExpoRoute } from '../src/navigation/routes.js';

export default function SplashRoute() {
  const router = useRouter();

  return (
    <SplashScreen
      onNavigate={(screen) => router.replace(getExpoRoute(screen))}
      onBack={router.canGoBack() ? () => router.back() : undefined}
    />
  );
}
