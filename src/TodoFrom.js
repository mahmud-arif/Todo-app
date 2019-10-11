import React from "react";
import Paper from "@material-ui/core/Paper";
import useInputState from "./Hooks/useInputState";
import TextField from "@material-ui/core/TextField";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="NewTodo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
