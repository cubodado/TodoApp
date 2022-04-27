import classes from './TodoList.module.css';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = [
    { id: 1, content: 'Meditation', clear: false },
    { id: 2, content: 'Taking a nap', clear: true },
    { id: 3, content: 'Reading network books', clear: false },
    { id: 4, content: 'Running', clear: false },
  ];

  return (
    <ul className={classes.list}>
      {todos.map((todo) => {
        return (
          <TodoItem id={todo.id} content={todo.content} clear={todo.clear} />
        );
      })}
    </ul>
  );
};

export default TodoList;
