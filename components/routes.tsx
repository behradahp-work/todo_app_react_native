// Expo
import { Stack } from "expo-router";

// Auth Context
import { useAuth } from "@/context/AuthProvider";

const Routes = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarHidden: true,
      }}
    >
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name='(tabs)' />
      </Stack.Protected>

      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name='login' />
      </Stack.Protected>
    </Stack>
  );
};

export default Routes;
