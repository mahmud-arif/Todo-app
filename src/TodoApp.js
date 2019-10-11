import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoFrom";
import uuid from "uuid";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "clean fishtank", completed: false },
    { id: 2, task: "Wash car", completed: true },
    { id: 3, task: "Grow beard", completed: false }
  ];

  const [todo, setTodo] = useState(initialTodos);
  const addTodo = newtodoText => {
    setTodo([...todo, { id: uuid(), task: newtodoText, completed: false }]);
  };
  const removeTodo = rmId => {
    const updateTodo = todo.filter(todo => todo.id !== rmId);
    setTodo(updateTodo);
  };
  const toggleTodo = todoId => {
    const updatedTodos = todo.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodo(updatedTodos);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
