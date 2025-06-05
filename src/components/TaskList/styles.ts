import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

export const TaskContainer = styled.div<{ priority: 'low' | 'medium' | 'high' }>`
  background-color: ${({ priority }) => {
    switch (priority) {
      case 'low': return '#f8f9fa';
      case 'medium': return '#fff3cd';
      case 'high': return '#f8d7da';
      default: return '#f8f9fa';
    }
  }};
  border-left: 4px solid ${({ priority }) => {
    switch (priority) {
      case 'low': return '#6c757d';
      case 'medium': return '#ffc107';
      case 'high': return '#dc3545';
      default: return '#6c757d';
    }
  }};
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const TaskTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: #212529;
`;

export const TaskDescription = styled.p`
  margin: 0.5rem 0 1rem;
  color: #495057;
  line-height: 1.5;
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const BaseButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const EditButton = styled(BaseButton)`
  background-color: #ffc107;
  color: #212529;
`;

export const DeleteButton = styled(BaseButton)`
  background-color: #dc3545;
  color: white;
`;

export const SaveButton = styled(BaseButton)`
  background-color: #28a745;
  color: white;
`;

export const CancelButton = styled(BaseButton)`
  background-color: #6c757d;
  color: white;
`;

export const EditInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
`;

export const EditTextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
`;

export const EditSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
`;
