import React from 'react';
import { useRouter } from 'expo-router';
import AdminUserDetailScreen from '../../src/screens/AdminUserDetailScreen.jsx';
import { getExpoRoute } from '../../src/navigation/routes.js';

export default function AdminUserDetailRoute() {
  const router = useRouter();

  return (
    <AdminUserDetailScreen
      onNavigate={(screen) => {
        if (screen === 'home') {
          router.replace(getExpoRoute(screen));
        } else {
          router.push(getExpoRoute(screen));
        }
      }}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/admin/usuarios'))}
    />
  );
}
