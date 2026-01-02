// React Native
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

// React
import { useEffect, useState } from "react";

// Components
import SettingsPageTitle from "@/components/settings_page/SettingsPageTitle";
import SettingSection from "@/components/settings_page/Section";
import PreferencesItem from "@/components/settings_page/PreferencesItem";

// Theme Hook
import { useTheme } from "@/context/ThemeProvider";

// Styles
import settingsStyles from "@/assets/styles/settings.styles";
import StatsCard from "@/components/settings_page/StatsCard";

// Types
import { Todo } from "@/types/todo.types";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Todos Hook
import { useTodos } from "@/context/TodosProvider";

const Settings = () => {
  const { count, active, completed } = useTodos();

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
            number={count}
            icon={<Ionicons name='list' size={25} color='white' />}
          />
          <StatsCard
            colors={colors}
            mainColor={colors.success}
            title='Completed'
            number={completed}
            icon={<Ionicons name='checkmark-circle' size={25} color='white' />}
          />
          <StatsCard
            colors={colors}
            mainColor={colors.warning}
            title='Active'
            number={active}
            icon={<Ionicons name='time' size={25} color='white' />}
          />
        </SettingSection>

        {/* Preferences */}
        <SettingSection colors={colors} title='Preferences'>
          <PreferencesItem
            colors={colors}
            mainColor={colors.primary}
            title='Dark Mode'
            icon={<Ionicons name='moon' size={25} color='white' />}
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
