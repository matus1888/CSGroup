import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import TaskItem from "./TaskItem";
import { ListContainer } from "./styles";

const TaskList: React.FC = () => {
  const { byDate, tasks, filter } = useSelector(
    (state: RootState) => state.tasks,
  );

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.priority === filter);

  const sortedTasks = [...filteredTasks].sort(
    (a, b) => b.createdAt - a.createdAt,
  );

  return (
    <ListContainer>
      {byDate
        ? sortedTasks.map((task) => <TaskItem key={task.id} task={task} />)
        : filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)}
    </ListContainer>
  );
};

export default TaskList;
