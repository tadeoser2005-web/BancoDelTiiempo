import React from 'react';
import { useRouter } from 'expo-router';
import AdminReportPreviewScreen from '../../src/screens/AdminReportPreviewScreen.jsx';
import { getExpoRoute } from '../../src/navigation/routes.js';

export default function AdminReportPreviewRoute() {
  const router = useRouter();

  return (
    <AdminReportPreviewScreen
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
