import classes from './TodoInput.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

const TodoInput = () => {
  const dispatch = useDispatch();

  const isEnter = (e) => {
    const todoInput = document.querySelector('input');
    if (e.charCode === 13) {
      isValidTodo(todoInput);
    }
  };

  const isAllString = (todoInput) => {
    const r = / /gi;
    const todoInputLength = todoInput.replace(r, '').length;
    return !!todoInputLength;
  };

  const isValidTodo = (todoInput) => {
    if (isAllString(todoInput.value) === false) {
      const ALERT_MESSAGE = '공백이 아닌 글자를 입력해 주세요.';
      alert(ALERT_MESSAGE);
      todoInput.value = '';
      return;
    }

    const validTodoInput = todoInput.value.trim();

    dispatch(
      addTodo({
        content: validTodoInput,
      })
    );

    todoInput.value = '';
  };

  return (
    <input
      className={classes.input}
      placeholder="Write your todo📝 and press enter ⌨️"
      onKeyPress={isEnter}
    ></input>
  );
};

export default TodoInput;
