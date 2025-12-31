// React Native
import { View, TextInput, TouchableOpacity } from "react-native";

// React
import { useEffect, useState } from "react";

// Styles
import themedStyles from "./styles";

// Types
import { ColorScheme } from "@/types/common.types";
import { AddTodoPayload, Todo } from "@/types/todo.types";

// Icons
import { Ionicons } from "@expo/vector-icons";

const AddTodo = ({
  colors,
  userId,
  editableTodo,
  onAdd,
  onEdit,
}: {
  colors: ColorScheme;
  userId: number;
  editableTodo: Todo | null;
  onAdd: (paylaod: AddTodoPayload) => void;
  onEdit: (paylaod: AddTodoPayload) => void;
}) => {
  const [paylaod, setPaylaod] = useState<AddTodoPayload>({
    todo: "",
    completed: false,
    userId: userId,
  });
  const [error, setError] = useState<boolean>(false);
  const styles = themedStyles(colors, error);

  useEffect(() => {
    if (editableTodo) {
      setPaylaod({
        todo: editableTodo.todo,
        completed: editableTodo.completed,
        userId: editableTodo.userId,
      });
    }
  }, [editableTodo]);

  const handleAddTodo = () => {
    if (!paylaod.todo) setError(true);
    else {
      setError(false);
      onAdd(paylaod);
      setPaylaod({ todo: "", completed: false, userId: userId });
    }
  };
  const handleEditTodo = () => {
    if (!paylaod.todo) setError(true);
    else {
      setError(false);
      onEdit(paylaod);
      setPaylaod({ todo: "", completed: false, userId: userId });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='What need to be done?'
        placeholderTextColor={colors.surface}
        value={paylaod.todo}
        onChangeText={(text) => setPaylaod({ ...paylaod, todo: text })}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={editableTodo ? () => handleEditTodo() : () => handleAddTodo()}
      >
        <Ionicons
          name={editableTodo ? "pencil" : "add"}
          size={30}
          color={colors.surface}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
