import React from "react";
import ListItem from "@material-ui/core/ListItem";
import useToggleState from "./Hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { SortableElement } from "react-sortable-hoc";

const Todo = SortableElement(
  ({ id, task, completed, removeTodo, toggleTodo, editTodo }) => {
    const [isEditing, toggle] = useToggleState(false);
    return (
      <ListItem style={{ height: "64px" }} index>
        {isEditing ? (
          <EditTodoForm
            editTodo={editTodo}
            id={id}
            task={task}
            toggleEditForm={toggle}
          />
        ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => toggleTodo(id)}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggle}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    );
  }
);

export default Todo;
