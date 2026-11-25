import React from 'react';
import { useRouter } from 'expo-router';
import ProfileScreen from '../../src/screens/ProfileScreen.jsx';
import { getExpoRoute } from '../../src/navigation/routes.js';

export default function ProfileTabRoute() {
  const router = useRouter();

  return (
    <ProfileScreen
      onNavigate={(screen) => router.push(getExpoRoute(screen))}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)'))}
    />
  );
}
