// Expo
import { Stack } from "expo-router";

const Routes = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarHidden: true,
      }}
    >
      <Stack.Screen name='(tabs)' />
    </Stack>
  );
};

export default Routes;
