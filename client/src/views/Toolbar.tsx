import React from 'react'

export default function Toolbar() {
  return (
    <div className="toolbar">
      <input
        className="input"
        placeholder="Lọc công việc theo cấp độ"
        list="priorities"
      />
      <datalist id="priorities">
        <option value="all" />
        <option value="urgent" />
        <option value="important" />
        <option value="normal" />
        <option value="low" />
      </datalist>
      <button className="btn btn-primary" >
        Thêm
      </button>
    </div>
  );
}
