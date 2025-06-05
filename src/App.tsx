import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./store/slices/tasksSlice";
import { generateRandomTask } from "./utils/generateRandomTask";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import FilterControls from "./components/FilterControls/FilterControls";
import { AppContainer, AppHeader } from "./App.styles";
import type { RootState } from "./store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { autoAdd } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (autoAdd) {
      interval = setInterval(
        () => {
          const randomTask = generateRandomTask();
          dispatch(addTask(randomTask));
        },
        10000 + Math.random() * 10000,
      ); // 10-20 секунд
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoAdd, dispatch]);

  return (
    <AppContainer>
      <AppHeader>Менеджер задач</AppHeader>
      <TaskForm />
      <FilterControls />
      <TaskList />
    </AppContainer>
  );
};

export default App;
