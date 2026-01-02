// React Native
import { View, TouchableOpacity, Pressable, Text, Alert } from "react-native";

// Styles
import themedStyles from "./styles";

// Types
import { ColorScheme } from "@/types/common.types";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Types
import { Todo } from "@/types/todo.types";

// Todos Hook
import { useTodos } from "@/context/TodosProvider";

const TodoCard = ({
  todo,
  colors,
  onClickEdit,
}: {
  todo: Todo;
  colors: ColorScheme;
  onClickEdit: () => void;
}) => {
  const { changeTodoStatus, deleteTodo } = useTodos();

  const styles = themedStyles(todo.completed, colors);

  const createTwoButtonAlert = () =>
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => deleteTodo(todo.id),
      },
    ]);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.checkmark}
        onPress={() =>
          changeTodoStatus(todo.id, { completed: !todo.completed })
        }
      >
        {todo.completed && (
          <Ionicons name='checkmark' color={colors.surface} size={20} />
        )}
      </Pressable>

      <View style={styles.leftContainer}>
        <Text style={styles.title}>{todo.todo}</Text>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: colors.warning }}
            onPress={() => onClickEdit()}
          >
            <Ionicons name='pencil' color='white' size={18} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: colors.danger }}
            onPress={createTwoButtonAlert}
          >
            <Ionicons name='trash' color='white' size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TodoCard;
