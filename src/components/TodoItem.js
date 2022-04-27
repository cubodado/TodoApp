import classes from './TodoItem.module.css';

const TodoItem = ({ id, content, clear }) => {
  return (
    <div className={classes.item}>
      <label>
        <input type="checkbox" name="todo" key={id} clear={clear}></input>
        <p>{content}</p>
      </label>
    </div>
  );
};

export default TodoItem;
