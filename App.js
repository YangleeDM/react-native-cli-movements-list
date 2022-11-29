import React from "react";

import { StatusBar, useColorScheme, View } from "react-native";
import ThemeProvider from './src/components/main-theme/Themed';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import { ColorSchemeName } from 'react-native';
import { MovementsScreen } from "./src/screens/products/movementsScreen";
import { MovementDetail } from "./src/screens/product-detail/movement-detail";

export function App() {

  //Get device color scheme
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>

      <ThemeProvider>
        <StatusBar/>
        <MainNavigator colorScheme={colorScheme}/>
      </ThemeProvider>

    </SafeAreaProvider>
  )
}


const MainNavigationStack = createNativeStackNavigator();
function MainNavigator ({colorScheme}: { colorScheme: ColorSchemeName }) {

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MainNavigationStack.Navigator>

        <MainNavigationStack.Screen
          options={{ headerShown: false }}
          name="MovementsScreen"
          component={MovementsScreen} />

        <MainNavigationStack.Screen
          options={{ headerShown: true, title : 'Detalle de movimiento' }}
          name="MovementDetail"
          component={MovementDetail} />

      </MainNavigationStack.Navigator>
    </NavigationContainer>
  )

}
