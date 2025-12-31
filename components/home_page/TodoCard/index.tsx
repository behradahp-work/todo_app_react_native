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

const TodoCard = ({
  todo,
  colors,
  onDelete,
  onStatusChange,
  onClickEdit,
}: {
  todo: Todo;
  colors: ColorScheme;
  onDelete: () => void;
  onStatusChange: () => void;
  onClickEdit: () => void;
}) => {
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
        onPress: () => onDelete(),
      },
    ]);

  return (
    <View style={styles.container}>
      <Pressable style={styles.checkmark} onPress={onStatusChange}>
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
            <Ionicons name='pencil' color={colors.surface} size={18} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: colors.danger }}
            onPress={createTwoButtonAlert}
          >
            <Ionicons name='trash' color={colors.surface} size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TodoCard;
