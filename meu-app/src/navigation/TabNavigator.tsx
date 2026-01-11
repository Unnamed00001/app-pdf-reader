import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { AppIcon } from "../components/AppIcon";
import { LibraryScreen } from "../screens/libraryScreen/LibraryScreen";
import { PdfScreen } from "../screens/pdfScreen/PdfScreen";
import { SettingsScreen } from "../screens/settingsScreen/SettingsScreen";

const Tab = createBottomTabNavigator();

// Componente para o fundo da TabBar
const TabBarBackground = () => {
  return (
    <View style={styles.tabBarBackground} />
  );
};

// Componente para ícone levantado
const FloatingIcon = ({ name, color, size }: any) => {
  return (
    <View style={styles.floatingIconContainer}>
      <AppIcon family="Ionicons" name="book" size={40} color="#2F2F2F" />
    </View>
  );
};

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            height: 40,
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarBackground: () => <TabBarBackground />,
        }}
      >
        <Tab.Screen
          name="Estante"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AppIcon family="MaterialCommunityIcons" name="bookshelf" size={30} color="#2F2F2F" />
            ),
          }}
        />
        <Tab.Screen
          name="Leitor"
          component={PdfScreen}
          options={{
            tabBarIcon: () => (
              <FloatingIcon name="book-open-page-variant" color="#000" size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Configurações"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AppIcon family="Fontisto" name="book" size={22} color="#2F2F2F" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarBackground: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: "#D9D9D9",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  floatingIconContainer: {        
    width: 150,
    height: 60,
    borderRadius: 25,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
});
