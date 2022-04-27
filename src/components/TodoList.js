import classes from './TodoList.module.css';
import TodoItem from './TodoItem';
import EmptyPage from './ui/EmptyPage';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

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
