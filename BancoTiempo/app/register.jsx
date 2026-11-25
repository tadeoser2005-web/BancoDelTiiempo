import React from 'react';
import { useRouter } from 'expo-router';
import RegisterScreen from '../src/screens/RegisterScreen.jsx';
import { getExpoRoute } from '../src/navigation/routes.js';

export default function RegisterRoute() {
  const router = useRouter();

  return (
    <RegisterScreen
      onNavigate={(screen) => {
        if (screen === 'home') {
          router.replace(getExpoRoute(screen));
        } else {
          router.push(getExpoRoute(screen));
        }
      }}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/'))}
    />
  );
}
