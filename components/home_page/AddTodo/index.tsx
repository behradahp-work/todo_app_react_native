// React Native
import { View, TextInput, TouchableOpacity } from "react-native";

// Styles
import themedStyles from "./styles";

// Types
import { ColorScheme } from "@/types/common.types";

// Icons
import { Ionicons } from "@expo/vector-icons";

const AddTodo = ({ colors }: { colors: ColorScheme }) => {
  const styles = themedStyles(colors);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='What need to be done?' />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Ionicons name='add' size={30} color={colors.surface} />
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
