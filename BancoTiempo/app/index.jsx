import React from 'react';
import { useRouter } from 'expo-router';
import LoginScreen from '../src/screens/LoginScreen.jsx';
import { getExpoRoute } from '../src/navigation/routes.js';

export default function LoginRoute() {
  const router = useRouter();

  return (
    <LoginScreen
      onNavigate={(screen) => {
        if (screen === 'home') {
          router.replace(getExpoRoute(screen));
        } else {
          router.push(getExpoRoute(screen));
        }
      }}
      onBack={router.canGoBack() ? () => router.back() : undefined}
    />
  );
}
