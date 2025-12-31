// React Native
import { View, TouchableOpacity, Pressable, Text } from "react-native";

// Styles
import themedStyles from "./styles";

// Types
import { ColorScheme } from "@/types/common.types";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Types
import { Todo } from "@/types/todo.types";

const TodoCard = ({ todo, colors }: { todo: Todo; colors: ColorScheme }) => {
  const styles = themedStyles(todo.completed, colors);

  return (
    <View style={styles.container}>
      <Pressable style={styles.checkmark}>
        {todo.completed && <Ionicons name='checkmark' color={colors.surface} />}
      </Pressable>

      <View style={styles.leftContainer}>
        <Text style={styles.title}>{todo.todo}</Text>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: colors.warning }}
            onPress={() => {}}
          >
            <Ionicons name='pencil' color={colors.surface} size={18} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: colors.danger }}
            onPress={() => {}}
          >
            <Ionicons name='trash' color={colors.surface} size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TodoCard;
