import React from 'react';
import { useRouter } from 'expo-router';
import AdminReportsScreen from '../../src/screens/AdminReportsScreen.jsx';
import { getExpoRoute } from '../../src/navigation/routes.js';

export default function AdminReportsRoute() {
  const router = useRouter();

  return (
    <AdminReportsScreen
      onNavigate={(screen) => {
        if (screen === 'home') {
          router.replace(getExpoRoute(screen));
        } else {
          router.push(getExpoRoute(screen));
        }
      }}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/admin'))}
    />
  );
}
