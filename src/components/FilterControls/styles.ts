import styled from "styled-components";

export const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: capitalize;
  background-color: ${({ active }) => (active ? "#495057" : "#e9ecef")};
  color: ${({ active }) => (active ? "white" : "#495057")};
  box-shadow: ${({ active }) =>
    active ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none"};

  &:hover {
    background-color: ${({ active }) => (active ? "#495057" : "#dee2e6")};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(73, 80, 87, 0.3);
  }
`;

export const SortButton = styled(FilterButton)`
  margin-left: auto;
  background-color: #e9ecef;
  color: #495057;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }
`;

export const FilterLabel = styled.span`
  font-size: 0.875rem;
  color: #6c757d;
  margin-right: 0.5rem;
  align-self: center;
`;

export const AutoAddButton = styled(FilterButton)`
  background-color: ${({ active }) => (active ? "#d4edda" : "#f8d7da")};
  color: ${({ active }) => (active ? "#155724" : "#721c24")};
  border: 1px solid ${({ active }) => (active ? "#c3e6cb" : "#f5c6cb")};

  &:hover {
    background-color: ${({ active }) => (active ? "#c3e6cb" : "#f5c6cb")};
  }
`;

export const SortByButton = styled(FilterButton)`
  background-color: ${({ active }) => (active ? "#d4edda" : "#f8d7da")};
  color: ${({ active }) => (active ? "#155724" : "#721c24")};
  border: 1px solid ${({ active }) => (active ? "#c3e6cb" : "#f5c6cb")};

  &:hover {
    background-color: ${({ active }) => (active ? "#c3e6cb" : "#f5c6cb")};
  }
`;
