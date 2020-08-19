import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoFrom";
import useTodoState from "./Hooks/useTodoState";
import arrayMove from "array-move";

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  const onSortEnd = ({ oldIndex, newIndex }) => {
    return arrayMove(todos, oldIndex, newIndex);
  };

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
          {todos.length !== 0 && (
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              onSortEnd={onSortEnd}
            />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
