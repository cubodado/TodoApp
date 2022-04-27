import './App.css';
import TodoInput from './components/todos/TodoInput';
import Line from './components/ui/Line';
import TodoList from './components/todos/TodoList';
import TodoFooter from './components/todos/TodoFooter';

function App() {
  return (
    <div className="App">
      <main>
        <h1>TODO LIST</h1>
        <TodoInput />
        <Line />
        <TodoList />
        <Line />
        <TodoFooter />
      </main>
    </div>
  );
}

export default App;
