import { useState } from "react";
import uuid from "uuid";

export default initialValue => {
  const [todos, setTodo] = useState(initialValue);

  return {
    todos,
    addTodo: newtodoText => {
      setTodo([...todos, { id: uuid(), task: newtodoText, completed: false }]);
    },
    removeTodo: rmId => {
      const updateTodo = todos.filter(todo => todo.id !== rmId);
      setTodo(updateTodo);
    },

    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodo(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodo(updatedTodos);
    }
  };
};
