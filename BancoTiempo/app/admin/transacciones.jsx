import React from 'react';
import { useRouter } from 'expo-router';
import AdminTransactionsScreen from '../../src/screens/AdminTrasactionsScreen.jsx';
import { getExpoRoute } from '../../src/navigation/routes.js';

export default function AdminTransactionsRoute() {
  const router = useRouter();

  return (
    <AdminTransactionsScreen
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
