import React from 'react';
import { useRouter } from 'expo-router';
import AdminDashboardScreen from '../../src/screens/AdminDashboardScreen.jsx';
import { getExpoRoute } from '../../src/navigation/routes.js';

export default function AdminDashboardRoute() {
  const router = useRouter();

  return (
    <AdminDashboardScreen
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
