import { Fragment } from 'react';
import classes from './TodoFooter.module.css';
import { useSelector } from 'react-redux';

const TodoFooter = () => {
  const leftTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.clear === false)
  );

  return (
    <Fragment>
      <div className={classes.footer}>
        <button>{leftTodos.length} left</button>
        <div>
          <button className={`${classes.status} ${classes.checked}`}>
            All
          </button>
          <button className={classes.status}>Active</button>
          <button className={classes.status}>Completed</button>
        </div>
        <button>Clear Completed</button>
      </div>
    </Fragment>
  );
};

export default TodoFooter;
