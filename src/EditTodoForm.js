import React from "react";
import useInputState from "./Hooks/useInputState";
import TextFeild from "@material-ui/core/TextField";

function EditTodoForm({ id, editTodo, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm(false);
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextFeild
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
