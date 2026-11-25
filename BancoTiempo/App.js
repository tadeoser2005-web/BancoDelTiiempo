
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import MenuScreen from './src/screens/MenuScreen.jsx';
import SplashScreen from './src/screens/SplashScreen.jsx';
import LoginScreen from './src/screens/LoginScreen.jsx';
import HomeScreen from './src/screens/HomeScreen.jsx';
import PublishServiceScreen from './src/screens/PublishServiceScreen.jsx';
import ExploreScreen from './src/screens/ExploreScreen.jsx';
import ServiceDetailScreen from './src/screens/ServiceDetailScreen.jsx';
import RequestsScreen from './src/screens/RequestScreen.jsx';
import RequestDetailScreen from './src/screens/RequestDetailScreen.jsx';
import CreditsScreen from './src/screens/CreditsScreen.jsx';
import ProfileScreen from './src/screens/ProfileScreen.jsx';
import EditProfileScreen from './src/screens/EditProfileScreen.jsx';
import FavoritesScreen from './src/screens/FavoritesScreen.jsx';
import RateServiceScreen from './src/screens/RateServiceScreen.jsx';
import AdminDashboardScreen from './src/screens/AdminDashboardScreen.jsx';
import AdminUsersScreen from './src/screens/AdminUsersScreen.jsx';
import AdminUserDetailScreen from './src/screens/AdminUserDetailScreen.jsx';
import AdminServicesScreen from './src/screens/AdminServicesScreen.jsx';
import AdminReportsScreen from './src/screens/AdminReportsScreen.jsx';
import AdminTransactionsScreen from './src/screens/AdminTrasactionsScreen.jsx';
import AdminGenerateReportScreen from './src/screens/AdminGenerateReportScreen.jsx';
import ActiveExchangeScreen from './src/screens/ActiveExchangeScreen.jsx';
import AdminReportPreviewScreen from './src/screens/AdminReportPreviewScreen.jsx';
import RegisterScreen from "./src/screens/RegisterScreen.jsx";
import AdminCategoriesScreen from "./src/screens/AdminCategoriesScreen.jsx";
export default function App() {
  const [selectedScreen, setSelectedScreen] = useState(null);

  if (!selectedScreen) {
    return <MenuScreen onSelectScreen={(screenId) => setSelectedScreen(screenId)} />;
  }

  switch (selectedScreen) {
    case 'adminCategorias': return <AdminCategoriesScreen/>
    case 'Registro': return <RegisterScreen/>
    case 'splash': return <SplashScreen />;
    case 'login': return <LoginScreen />;
    case 'home': return <HomeScreen userCredits={8.5} />;
    case 'publish': return <PublishServiceScreen />;
    case 'explore': return <ExploreScreen />;
    case 'serviceDetail': return <ServiceDetailScreen userCredits={8.5} />;
    case 'requests': return <RequestsScreen />;
    case 'requestDetail': return <RequestDetailScreen />;
    case 'credits': return <CreditsScreen credits={8.5} />;
    case 'profile': return <ProfileScreen />;
    case 'editProfile': return <EditProfileScreen />;
    case 'favorites': return <FavoritesScreen />;
    case 'rate': return <RateServiceScreen />;
    case 'activeExchange': return <ActiveExchangeScreen />;
    case 'adminDashboard': return <AdminDashboardScreen />;
    case 'adminUsers': return <AdminUsersScreen />;
    case 'adminUserDetail': return <AdminUserDetailScreen />;
    case 'adminServices': return <AdminServicesScreen />;
    case 'adminReports': return <AdminReportsScreen />;
    case 'adminTransactions': return <AdminTransactionsScreen />;
    case 'adminGenerateReport': return <AdminGenerateReportScreen />;
    case 'adminReportPreview': return <AdminReportPreviewScreen />;
    default: return null;
  }
}
