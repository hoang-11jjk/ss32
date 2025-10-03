import React from "react";

export default function TodoList() {
  return (
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
  );
}
