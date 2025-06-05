import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task, Priority } from "../../types/task";

interface TasksState {
  tasks: Task[];
  filter: Priority | "all";
  byDate: boolean;
  autoAdd: boolean;
}

const initialState: TasksState = {
  tasks: [],
  filter: "all",
  autoAdd: false,
  byDate: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<Priority | "all">) => {
      state.filter = action.payload;
    },

    toggleByDate: (state) => {
      state.byDate = !state.byDate;
    },

    toggleAutoAdd: (state) => {
      state.autoAdd = !state.autoAdd;
    },
  },
});

export const {
  addTask,
  updateTask,
  removeTask,
  setFilter,
  toggleAutoAdd,
  toggleByDate,
} = tasksSlice.actions;
export default tasksSlice.reducer;
