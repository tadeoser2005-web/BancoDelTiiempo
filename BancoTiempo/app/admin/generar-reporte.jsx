import React from 'react';
import { useRouter } from 'expo-router';
import AdminGenerateReportScreen from '../../src/screens/AdminGenerateReportScreen.jsx';
import { getExpoRoute } from '../../src/navigation/routes.js';

export default function AdminGenerateReportRoute() {
  const router = useRouter();

  return (
    <AdminGenerateReportScreen
      onNavigate={(screen) => {
        if (screen === 'home') {
          router.replace(getExpoRoute(screen));
        } else {
          router.push(getExpoRoute(screen));
        }
      }}
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/admin/reportes'))}
    />
  );
}
