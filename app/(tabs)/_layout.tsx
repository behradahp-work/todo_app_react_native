// Expo
import { Tabs } from "expo-router";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Theme Hook
import { useTheme } from "@/context/ThemeProvider";

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        sceneStyle: {
          backgroundColor: colors.bg,
        },
        tabBarStyle: {
          height: 90,
          paddingBottom: 30,
          paddingTop: 10,
          backgroundColor: colors.surface,
          borderTopWidth: 1,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='flash-outline' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings' color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
