import React from 'react';
import { useAppSelector } from 'service/store';

const SelectTodo = () => {
  const { selectedIdList } = useAppSelector((state) => state.todoReducer);

  if (selectedIdList.length === 0) return null;

  return <div>text</div>;
};

export default SelectTodo;

// Select Dropdown.
// Mark As Done
// Mark As Not Done
// Update (selectedIdList가 한개일때만 나오게..)
// Delete
