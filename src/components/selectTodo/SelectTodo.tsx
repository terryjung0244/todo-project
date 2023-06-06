import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'service/store';
import 'components/selectTodo/SelectTodo.css';
import { SELECT_CONST } from 'service/const/generalConst';
import {
  todoDeleteAction,
  todoMarkAsDoneAction,
  todoMarkAsNotDoneAction,
} from 'service/redux/todoAction';
import { Modal } from 'react-bootstrap';
import { TodoInput } from 'components/createTodo/CreateTodo';

const { MARK_AS_DONE, MARK_AS_NOT_DONE, UPDATE, DELETE, SELECT } = SELECT_CONST;

const SelectTodo = () => {
  const dispatch = useAppDispatch();
  const [updateTodo, setUpdateTodo] = useState<TodoInput>({
    title: '',
    desc: '',
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const { selectedIdList, todoList } = useAppSelector((state) => state.todoReducer);

  // const onChangeSelectTag = () => {
  //   console.log('123');
  // };

  const showModalFunc = (modalToggle: boolean) => {
    setShowModal(modalToggle);
  };

  const updateInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateTodo({ ...updateTodo, [e.target.name]: e.target.value });
  };

  const selectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    switch (value) {
      case MARK_AS_DONE:
        dispatch(todoMarkAsDoneAction());
        break;
      case MARK_AS_NOT_DONE:
        dispatch(todoMarkAsNotDoneAction()); // 요기서는 true을 바로 안보내고 해봄?
        break;

      case DELETE:
        dispatch(todoDeleteAction());
        break;

      case UPDATE:
        showModalFunc(true);
        // dispatch(())
        break;
      // Update, Delete
      default:
        break;
    }
  };

  if (selectedIdList.length === 0) {
    return null;
    // 비어있으면 null을 return하기에 밑에 실행하지마라.
  }

  // console.log(selectedIdList[0]);

  return (
    <>
      <select className="select-dropdown-container" defaultValue={SELECT} onChange={selectOption}>
        <option value={SELECT} disabled hidden>
          Select
        </option>
        <option value={MARK_AS_DONE}>Mark As Done</option>
        <option value={MARK_AS_NOT_DONE}>Mark As Not Done</option>
        {selectedIdList.length === 1 && <option value={UPDATE}>Update</option>}
        <option value={DELETE}>Delete</option>
      </select>

      <Modal show={showModal} onHide={() => showModalFunc(false)}>
        <div className="modal-container">
          <h3 className="modal-title">Update Todo</h3>
          <input
            name={'title'}
            value={updateTodo.title}
            onChange={updateInputTodo}
            placeholder="Update Todo Title"
          />
          <input
            name={'desc'}
            value={updateTodo.desc}
            onChange={updateInputTodo}
            placeholder="Update Todo Desc"
          />
        </div>
      </Modal>
    </>
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
