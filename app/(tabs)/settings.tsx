// React Native
import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import SettingsPageTitle from "@/components/settings_page/SettingsPageTitle";
import SettingSection from "@/components/settings_page/Section";
import PreferencesItem from "@/components/settings_page/PreferencesItem";

// Theme Hook
import { useTheme } from "@/context/ThemeProvider";

// Styles
import settingsStyles from "@/assets/styles/settings.styles";
import StatsCard from "@/components/settings_page/StatsCard";

// Icons
import { Ionicons } from "@expo/vector-icons";

const Settings = () => {
  const { colors, toggleDarkMode, isDarkMode } = useTheme();
  const styles = settingsStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <SettingsPageTitle colors={colors} />

      <ScrollView style={styles.scrollView}>
        {/* Stats card */}
        <SettingSection colors={colors} title='Progress Stats'>
          <StatsCard
            colors={colors}
            mainColor={colors.primary}
            title='Total Todos'
            number={0}
            icon={<Ionicons name='list' size={25} color={colors.surface} />}
          />
          <StatsCard
            colors={colors}
            mainColor={colors.success}
            title='Completed'
            number={0}
            icon={
              <Ionicons
                name='checkmark-circle'
                size={25}
                color={colors.surface}
              />
            }
          />
          <StatsCard
            colors={colors}
            mainColor={colors.warning}
            title='Active'
            number={0}
            icon={<Ionicons name='time' size={25} color={colors.surface} />}
          />
        </SettingSection>

        {/* Preferences */}
        <SettingSection colors={colors} title='Preferences'>
          <PreferencesItem
            colors={colors}
            mainColor={colors.primary}
            title='Dark Mode'
            icon={<Ionicons name='moon' size={25} color={colors.surface} />}
            active={isDarkMode}
            onPress={() => toggleDarkMode()}
          />
        </SettingSection>

        {/* Danger Zone */}
        {/* <SettingSection
          colors={colors}
          title='Danger Zone'
          titleColor={colors.danger}
        >
          <Text>Hello</Text>
        </SettingSection> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
