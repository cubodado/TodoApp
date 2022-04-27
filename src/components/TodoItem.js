import classes from './TodoItem.module.css';
import { useDispatch } from 'react-redux';
import { toggleClear, deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ id, content, clear }) => {
  const dispatch = useDispatch();

  const toggleClearHandler = () => {
    dispatch(
      toggleClear({
        id: id,
        clear: !clear,
      })
    );
  };

  const deleteTodoHandler = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  const showDeleteButton = (event) => {
    const deleteButton = event.currentTarget.childNodes[1];
    deleteButton.classList.add(`${classes.visible}`);
  };

  const hideDeleteButton = (event) => {
    const deleteButton = event.currentTarget.childNodes[1];
    deleteButton.classList.remove(`${classes.visible}`);
  };

  return (
    <div
      className={`${classes.item} ${clear && classes.checked}`}
      onMouseOver={showDeleteButton}
      onMouseLeave={hideDeleteButton}
    >
      <label>
        <input
          type="checkbox"
          checked={clear}
          onChange={toggleClearHandler}
          key={id}
        ></input>
        <p>{content}</p>
      </label>
      <button className={classes.delete} onClick={deleteTodoHandler}>
        🗑️
      </button>
    </div>
  );
};

export default TodoItem;
