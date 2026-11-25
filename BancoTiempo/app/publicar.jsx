import React from 'react';
import { useRouter } from 'expo-router';
import PublishServiceScreen from '../src/screens/PublishServiceScreen.jsx';
import { getExpoRoute } from '../src/navigation/routes.js';

export default function PublishRoute() {
  const router = useRouter();

  return (
    <PublishServiceScreen
      onNavigate={(screen) => router.push(getExpoRoute(screen))}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)'))}
    />
  );
}
