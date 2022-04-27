import './App.css';
import TodoInput from './components/TodoInput';
import Line from './components/ui/Line';

function App() {
  return (
    <div className="App">
      <main>
        <h1>TODO LIST</h1>
        <TodoInput />
        <Line />
      </main>
    </div>
  );
}

export default App;
