import { Fragment } from 'react';
import classes from './TodoFooter.module.css';

const TodoFooter = () => {
  return (
    <Fragment>
      <div className={classes.footer}>
        <button>left</button>
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
