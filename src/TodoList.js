import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { SortableContainer } from "react-sortable-hoc";
import Todo from "./Todo";

const TodoList = SortableContainer(
  ({ todos, removeTodo, toggleTodo, editTodo }) => {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <Fragment key={todo.id}>
              <Todo
                id={todo.id}
                task={todo.task}
                index={i}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  }
);

export default TodoList;
