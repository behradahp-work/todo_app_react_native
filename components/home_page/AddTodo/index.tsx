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

// Todos Hook
import { useTodos } from "@/context/TodosProvider";

const AddTodo = ({
  colors,
  editableTodo,
}: {
  colors: ColorScheme;
  editableTodo: Todo | null;
}) => {
  const { addTodo, updateTodo } = useTodos();

  const [paylaod, setPaylaod] = useState<AddTodoPayload>({
    todo: "",
    completed: false,
  });
  const [error, setError] = useState<boolean>(false);
  const styles = themedStyles(colors, error);

  useEffect(() => {
    if (editableTodo) {
      setPaylaod({
        todo: editableTodo.todo,
        completed: editableTodo.completed,
      });
    }
  }, [editableTodo]);

  const handleAddTodo = () => {
    if (!paylaod.todo) setError(true);
    else {
      setError(false);
      addTodo(paylaod);
      setPaylaod({ todo: "", completed: false });
    }
  };
  const handleEditTodo = () => {
    if (!editableTodo) return;
    if (!paylaod.todo) setError(true);
    else {
      setError(false);
      updateTodo(editableTodo.id, paylaod);
      setPaylaod({ todo: "", completed: false });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='What need to be done?'
        placeholderTextColor={colors.textMuted}
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
          color='white'
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
