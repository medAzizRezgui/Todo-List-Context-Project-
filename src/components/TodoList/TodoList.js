import React from "react";
import styles from "./TodoList.module.css";

import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {

  return (
    <div className={styles.todoList}>
      <h3 className={styles.todoList__title}>TO-DOS</h3>
      <div className={styles.todoList__todos}>

      </div>
    </div>
  );
};

export default TodoList;
