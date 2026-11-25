import React from 'react';
import { useRouter } from 'expo-router';
import AdminServicesScreen from '../../src/screens/AdminServicesScreen.jsx';
import { getExpoRoute } from '../../src/navigation/routes.js';

export default function AdminServicesRoute() {
  const router = useRouter();

  return (
    <AdminServicesScreen
      onNavigate={(screen) => {
        if (screen === 'home') {
          router.replace(getExpoRoute(screen));
        } else {
          router.push(getExpoRoute(screen));
        }
      }}
    />
  );
}
