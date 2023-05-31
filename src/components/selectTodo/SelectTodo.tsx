import React from 'react';
import { useAppDispatch, useAppSelector } from 'service/store';
import 'components/selectTodo/SelectTodo.css';
import { SELECT_CONST } from 'service/const/generalConst';
import { todoMarkAsDoneAction } from 'service/redux/todoAction';

const { MARK_AS_DONE, MARK_AS_NOT_DONE, UPDATE, DELETE, SELECT } = SELECT_CONST;

const SelectTodo = () => {
  const dispatch = useAppDispatch();
  const { selectedIdList } = useAppSelector((state) => state.todoReducer);

  // const onChangeSelectTag = () => {
  //   console.log('123');
  // };

  const selectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    console.log(value);

    switch (value) {
      case MARK_AS_DONE:
        dispatch(todoMarkAsDoneAction(true));
        break;
      case MARK_AS_NOT_DONE:
        console.log('2');
        break;
      // Update, Delete
      default:
        console.log('3');
        break;
    }
  };

  if (selectedIdList.length === 0) {
    console.log(selectedIdList.length);
    return null;
    // 비어있으면 null을 return하기에 밑에 실행하지마라.
  }

  return (
    <select className="select-dropdown-container" defaultValue={SELECT} onChange={selectOption}>
      <option value={SELECT} disabled hidden>
        Select
      </option>
      <option value={MARK_AS_DONE}>Mark As Done</option>
      <option value={MARK_AS_NOT_DONE}>Mark As Not Done</option>
      {selectedIdList.length === 1 && <option value={UPDATE}>Update</option>}
      <option value={DELETE}>Delete</option>
    </select>
  );

  // if (selectedIdList.length === 0) {
  //   console.log(selectedIdList.length);
  //   return null;
  //   // 비어있으면 null을 return하기에 밑에 실행하지마라.
  // } else if (selectedIdList.length === 1) {
  //   console.log(selectedIdList.length);
  //   return (
  //     <select className="select-dropdown-container">
  //       <option>Mark As Done</option>
  //       <option>Mark As Not Done</option>
  //       <option>Update</option>
  //       <option>Delete</option>
  //     </select>
  //   );
  // } else {
  //   return (
  //     <select className="select-dropdown-container">
  //       <option>Mark As Done</option>
  //       <option>Mark As Not Done</option>
  //       <option>Delete</option>
  //     </select>
  //   );
  // }

  // return <div>ddd</div>; // 여기 부분은 없어도 되는건강? ㅇ
};

export default SelectTodo;

// 숙제!!!!!!
// Select Dropdown.
// Mark As Done
// Mark As Not Done
// Update (selectedIdList가 한개일때만 나오게..2개 이상일때 안나오게)
// Delete