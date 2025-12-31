// React Native
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

// React
import React from "react";

// Styles
import loginStyles from "@/assets/styles/login.styles";

// Theme Hook
import { useTheme } from "@/context/ThemeProvider";

// Auth Hook
import { useAuth } from "@/context/AuthProvider";

// Types
import { LoginCredentials } from "@/types/auth.types";

// Images
const loginImage = require("@/assets/images/login.png");

const Login = () => {
  const { colors } = useTheme();
  const { loading, error, login } = useAuth();
  const styles = loginStyles(colors);

  const [credentials, setCredentials] = React.useState<LoginCredentials>({
    username: "",
    password: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* Login Image */}
      <Image
        source={loginImage}
        style={{ width: "90%", height: 300, resizeMode: "contain" }}
      />

      {/* Login Page Title */}
      <Text style={styles.title}>Welcome Back</Text>

      {/* Login Form Inputs */}
      <View style={styles.filedsContainer}>
        <TextInput
          style={styles.input}
          placeholder='Enter Username'
          onChangeText={(text) =>
            setCredentials({ ...credentials, username: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder='Enter Password'
          onChangeText={(text) =>
            setCredentials({ ...credentials, password: text })
          }
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => login(credentials)}
      >
        {loading ? (
          <ActivityIndicator size={32} color={colors.surface} />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.error}>{error}</Text>
    </KeyboardAvoidingView>
  );
};

export default Login;
