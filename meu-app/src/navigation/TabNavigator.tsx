import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
      <MaterialCommunityIcons name={name} color={color} size={size} />
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
              <MaterialCommunityIcons name="bookshelf" color={color} size={size} />
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
              <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
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
