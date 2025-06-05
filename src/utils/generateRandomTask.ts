import { v4 as uuidv4 } from "uuid";
import type { Task, Priority } from "../types/task";

const titles = [
  "Закончить проект",
  "Сделать домашнее задание",
  "Купить продукты",
  "Позвонить другу",
  "Записаться к врачу",
  "Прочитать книгу",
  "Сходить в спортзал",
  "Написать отчет",
];

const descriptions = [
  "Важная задача, которую нельзя откладывать",
  "Обычная повседневная задача",
  "Не срочно, но нужно сделать",
  "Задача с высоким приоритетом",
  "Можно отложить на потом",
];

export const generateRandomTask = (): Task => {
  const priorities: Priority[] = ["low", "medium", "high"];
  const randomPriority =
    priorities[Math.floor(Math.random() * priorities.length)];

  return {
    id: uuidv4(),
    title: titles[Math.floor(Math.random() * titles.length)],
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    priority: randomPriority,
    createdAt: Date.now(),
  };
};
