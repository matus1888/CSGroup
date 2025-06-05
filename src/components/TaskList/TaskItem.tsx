import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask, removeTask } from "../../store/slices/tasksSlice";
import type { Task, Priority } from "../../types/task";
import {
  TaskContainer,
  TaskHeader,
  TaskTitle,
  TaskDescription,
  TaskActions,
  EditButton,
  DeleteButton,
  SaveButton,
  CancelButton,
  EditInput,
  EditTextArea,
  EditSelect,
} from "./styles";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateTask(editedTask));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask(task);
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

  const getPriorityLabel = (priority: Priority) => {
    switch (priority) {
      case "low":
        return "Низкий";
      case "medium":
        return "Средний";
      case "high":
        return "Высокий";
      default:
        return priority;
    }
  };

  return (
    <TaskContainer priority={task.priority}>
      {isEditing ? (
        <>
          <EditInput
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />
          <EditTextArea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          />
          <EditSelect
            name="priority"
            value={editedTask.priority}
            onChange={handleChange}
          >
            <option value="low">Низкий</option>
            <option value="medium">Средний</option>
            <option value="high">Высокий</option>
          </EditSelect>
          <TaskActions>
            <SaveButton onClick={handleSave}>Сохранить</SaveButton>
            <CancelButton onClick={handleCancel}>Отмена</CancelButton>
          </TaskActions>
        </>
      ) : (
        <>
          <TaskHeader>
            <TaskTitle>{task.title}</TaskTitle>
            <span>{getPriorityLabel(task.priority)}</span>
          </TaskHeader>
          <TaskDescription>{task.description}</TaskDescription>
          <TaskActions>
            <EditButton onClick={handleEdit}>Редактировать</EditButton>
            <DeleteButton onClick={handleDelete}>Удалить</DeleteButton>
          </TaskActions>
        </>
      )}
    </TaskContainer>
  );
};

export default TaskItem;
