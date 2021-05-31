import React, { useState } from "react";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };
    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const auxTasks = [...tasks];
    const task = auxTasks.find((w) => w.id === id);
    const index = auxTasks.findIndex((w) => w.id === id);

    if (task) {
     if(!task.done) task.done =  true;
     else task.done =  false;
     
      auxTasks[index] = task;
    }

    console.log('teste: ', task)

    setTasks(auxTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks((oldTasks) => [...oldTasks.filter(w => w.id !== id)]);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
