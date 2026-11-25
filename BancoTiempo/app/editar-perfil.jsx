import React from 'react';
import { useRouter } from 'expo-router';
import EditProfileScreen from '../src/screens/EditProfileScreen.jsx';
import { getExpoRoute } from '../src/navigation/routes.js';

export default function EditProfileRoute() {
  const router = useRouter();

  return (
    <EditProfileScreen
      onNavigate={(screen) => router.push(getExpoRoute(screen))}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)/perfil'))}
    />
  );
}
