import classes from './TodoList.module.css';
import TodoItem from './TodoItem';
import EmptyPage from './ui/EmptyPage';

const TodoList = () => {
  const todos = [
    { id: 1, content: 'Meditation', clear: 'false' },
    { id: 2, content: 'Taking a nap', clear: 'true' },
    { id: 3, content: 'Reading network books', clear: 'false' },
    { id: 4, content: 'Running', clear: 'false' },
  ];

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
