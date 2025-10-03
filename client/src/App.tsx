import './App.css'
import FooterBar from './views/FooterBar'
import TodoList from './views/TodoItem'
import Toolbar from './views/Toolbar'
function App() {
  return (
    <>
      <div className="todo-wrapper">
  <div className="card">
    <h1 className="todo-title">Danh sách công việc</h1>
    <Toolbar/>
    <TodoList/>
    <FooterBar/>
  </div>
</div>

    </>
  )
}

export default App
