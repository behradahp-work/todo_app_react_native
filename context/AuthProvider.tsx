// React Native
import AsyncStorage from "@react-native-async-storage/async-storage";

// React
import React, { useEffect } from "react";

// Types
import { LoginCredentials, LoginResponse, User } from "@/types/auth.types";

// API Hook
import useFetch from "@/hooks/useFetch";
import { useRouter } from "expo-router";

// -------------------------------------------- Create Context ----------------------------------------
interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => void;
  logout: () => void;
}
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

// -------------------------------------------- Create Context Provider ----------------------------------------
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { postMethod, data, loading, error } = useFetch<
    LoginResponse,
    LoginCredentials
  >();

  const router = useRouter();
  const [isLoggedIn, setISLoggedIn] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<User | null>(null);

  // Start Context Proccess
  useEffect(() => {
    const checkAuth = async () => {
      const access = await AsyncStorage.getItem("accessToken");
      const refresh = await AsyncStorage.getItem("refreshToken");
      const user = await AsyncStorage.getItem("user");

      if (access && refresh && user) {
        setISLoggedIn(true);
        setUser(JSON.parse(user));
      }
    };

    checkAuth();
  }, []);

  // Success Login Proccess
  useEffect(() => {
    if (data) {
      const { accessToken, refreshToken, ...userData } = data;
      AsyncStorage.setItem("accessToken", accessToken);
      AsyncStorage.setItem("refreshToken", refreshToken);
      AsyncStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      setISLoggedIn(true);
      router.replace("/(tabs)");
    }
  }, [data]);

  const login = (credentials: LoginCredentials) =>
    postMethod("https://dummyjson.com/auth/login", credentials);

  const logout = () => {
    AsyncStorage.removeItem("accessToken");
    AsyncStorage.removeItem("refreshToken");
    setUser(null);
    setISLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, loading, error, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// -------------------------------------------- Create Context Hook ----------------------------------------
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
