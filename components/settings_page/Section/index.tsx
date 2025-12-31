// React Native
import { View, Text } from "react-native";

// Types
import { ColorScheme } from "@/types/common.types";

// Styles
import themedStyles from "./styles";

const SettingSection = ({
  children,
  colors,
  title,
  titleColor,
}: {
  children: React.ReactNode;
  colors: ColorScheme;
  title: string;
  titleColor?: string;
}) => {
  const styles = themedStyles(colors);

  return (
    <View style={styles.container}>
      <Text
        style={
          titleColor ? { ...styles.title, color: titleColor } : styles.title
        }
      >
        {title}
      </Text>

      {children}
    </View>
  );
};

export default SettingSection;
