import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
      <Stack.Screen name="splash" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="explorar" />
      <Stack.Screen name="publicar" />
      <Stack.Screen name="detalle-servicio" />
      <Stack.Screen name="solicitudes" />
      <Stack.Screen name="detalle-solicitud" />
      <Stack.Screen name="intercambio-activo" />
      <Stack.Screen name="creditos" />
      <Stack.Screen name="editar-perfil" />
      <Stack.Screen name="calificar" />
      <Stack.Screen name="admin" />
    </Stack>
  );
}
