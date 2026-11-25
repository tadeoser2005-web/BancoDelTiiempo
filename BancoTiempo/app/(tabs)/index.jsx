import React from 'react';
import { useRouter } from 'expo-router';
import HomeScreen from '../../src/screens/HomeScreen.jsx';
import { getExpoRoute } from '../../src/navigation/routes.js';

export default function HomeTabRoute() {
  const router = useRouter();

  return (
    <HomeScreen
      userCredits={8.5}
      onNavigate={(screen) => router.push(getExpoRoute(screen))}
    />
  );
}
