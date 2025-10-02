import './App.css'

function App() {
  return (
    <>
      <div className="todo-wrapper">
  <div className="card">
    <h1 className="todo-title">Danh sách công việc</h1>

    <div className="toolbar">
      <input className="input" placeholder="Lọc công việc theo cấp độ" />
      <button className="btn btn-primary">Thêm</button>
    </div>

    <div className="todo-list">
      <div className="todo-item">
        <input type="checkbox" className="checkbox" />
        <div className="todo-content">
          <span className="todo-text">Xây dựng thành Header</span>
          <span className="badge badge-urgent">Khẩn cấp</span>
        </div>
        <div className="actions">
          <button className="btn btn-outline">Sửa</button>
          <button className="btn btn-danger-soft">Xóa</button>
        </div>
      </div>

      <div className="todo-item">
        <input type="checkbox" className="checkbox" />
        <div className="todo-content">
          <span className="todo-text">Xây dựng thành Menu</span>
          <span className="badge badge-important">Quan trọng</span>
        </div>
        <div className="actions">
          <button className="btn btn-outline">Sửa</button>
          <button className="btn btn-danger-soft">Xóa</button>
        </div>
      </div>

    </div>

    <div className="todo-footer">
      <div className="counter">Số công việc hoàn thành: <strong>10</strong></div>
      <div className="actions">
        <button className="btn btn-primary">Hoàn thành tất cả</button>
        <button className="btn btn-danger-soft">Xóa tất cả</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App
