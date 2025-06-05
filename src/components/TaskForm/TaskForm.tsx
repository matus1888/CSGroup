import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../../store/slices/tasksSlice";
import type { Task, Priority } from "../../types/task";
import { FormContainer, Input, TextArea, Select, Button } from "./styles";

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      priority,
      createdAt: Date.now(),
    };

    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setPriority("medium");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название задачи"
        required
      />
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание задачи"
      />
      <Select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value="low">Низкий</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
      </Select>
      <Button type="submit">Добавить задачу</Button>
    </FormContainer>
  );
};

export default TaskForm;
