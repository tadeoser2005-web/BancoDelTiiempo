import React from 'react';
import { useRouter } from 'expo-router';
import AdminUsersScreen from '../../src/screens/AdminUsersScreen.jsx';
import { getExpoRoute } from '../../src/navigation/routes.js';

export default function AdminUsersRoute() {
  const router = useRouter();

  return (
    <AdminUsersScreen
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
