import classes from './TodoList.module.css';
import TodoItem from './TodoItem';
import EmptyPage from '../ui/EmptyPage';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodoAsync } from '../../redux/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  const todoItems = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        content={todo.content}
        clear={todo.clear}
      />
    );
  });

  return (
    <ul className={classes.list}>{todos.length ? todoItems : <EmptyPage />}</ul>
  );
};

export default TodoList;
