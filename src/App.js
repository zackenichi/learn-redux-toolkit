import './App.css';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <div className="New-todo">
          <CreateTodo />
        </div>
        <div className="Todo-list">
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
