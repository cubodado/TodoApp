import classes from './TodoItem.module.css';
import { useDispatch } from 'react-redux';
import { toggleClear } from '../redux/todoSlice';

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

  return (
    <div className={`${classes.item} ${clear && classes.checked}`}>
      <label>
        <input
          type="checkbox"
          checked={clear}
          onChange={toggleClearHandler}
          key={id}
        ></input>
        <p>{content}</p>
      </label>
    </div>
  );
};

export default TodoItem;
