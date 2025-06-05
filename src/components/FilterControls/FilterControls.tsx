import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  toggleAutoAdd,
  toggleByDate,
} from "../../store/slices/tasksSlice";
import type { RootState } from "../../store";
import {
  ControlsContainer,
  FilterButton,
  AutoAddButton,
  SortByButton,
} from "./styles";

const FilterControls: React.FC = () => {
  const dispatch = useDispatch();
  const { filter, autoAdd, byDate } = useSelector(
    (state: RootState) => state.tasks,
  );

  const handleFilterChange = (newFilter: "all" | "low" | "medium" | "high") => {
    dispatch(setFilter(newFilter));
  };

  const handleToggleAutoAdd = () => {
    dispatch(toggleAutoAdd());
  };

  const handleToggleByDate = () => {
    dispatch(toggleByDate());
  };

  return (
    <ControlsContainer>
      <FilterButton
        active={filter === "all"}
        onClick={() => handleFilterChange("all")}
      >
        Все
      </FilterButton>
      <FilterButton
        active={filter === "low"}
        onClick={() => handleFilterChange("low")}
      >
        Низкий
      </FilterButton>
      <FilterButton
        active={filter === "medium"}
        onClick={() => handleFilterChange("medium")}
      >
        Средний
      </FilterButton>
      <FilterButton
        active={filter === "high"}
        onClick={() => handleFilterChange("high")}
      >
        Высокий
      </FilterButton>
      <SortByButton active={byDate} onClick={handleToggleByDate}>
        byDate
      </SortByButton>

      <AutoAddButton active={autoAdd} onClick={handleToggleAutoAdd}>
        {autoAdd ? "Отменить автодобавление" : "Автодобавление"}
      </AutoAddButton>
    </ControlsContainer>
  );
};

export default FilterControls;
