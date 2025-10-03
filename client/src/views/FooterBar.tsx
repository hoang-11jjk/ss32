import React from 'react'

export default function FooterBar() {
  return (
    <div className="todo-footer">
      <div className="counter">
        Số công việc hoàn thành: <strong>10</strong>
      </div>
      <div className="actions">
        <button className="btn btn-primary">Hoàn thành tất cả</button>
        <button className="btn btn-danger-soft">Xóa tất cả</button>
      </div>
    </div>
  );
}
