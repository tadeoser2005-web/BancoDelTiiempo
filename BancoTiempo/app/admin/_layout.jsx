import React from 'react';
import { Stack } from 'expo-router';

export default function AdminLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="usuarios" />
      <Stack.Screen name="usuario-detalle" />
      <Stack.Screen name="servicios" />
      <Stack.Screen name="categorias" />
      <Stack.Screen name="reportes" />
      <Stack.Screen name="transacciones" />
      <Stack.Screen name="generar-reporte" />
      <Stack.Screen name="vista-previa" />
    </Stack>
  );
}
