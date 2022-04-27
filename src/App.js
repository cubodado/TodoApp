import './App.css';
import TodoInput from './components/TodoInput';
import Line from './components/ui/Line';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

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
