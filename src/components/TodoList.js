const TodoList = () => {
  const todos = [
    { id: 1, content: 'Meditation', clear: false },
    { id: 2, content: 'Taking a nap', clear: true },
    { id: 3, content: 'Reading network books', clear: false },
    { id: 4, content: 'Running', clear: false },
  ];

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <p>
            {todo.id} : {todo.content} {todo.clear}
          </p>
        );
      })}
    </ul>
  );
};

export default TodoList;
