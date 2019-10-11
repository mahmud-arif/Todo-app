import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import TodoApp from "./TodoApp";

function App() {
  return <TodoApp />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
