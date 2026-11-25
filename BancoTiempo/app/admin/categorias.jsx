import React from 'react';
import { useRouter } from 'expo-router';
import AdminCategoriesScreen from '../../src/screens/AdminCategoriesScreen.jsx';
import { getExpoRoute } from '../../src/navigation/routes.js';

export default function AdminCategoriesRoute() {
  const router = useRouter();

  return (
    <AdminCategoriesScreen
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
