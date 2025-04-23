import { useState } from 'react';

function App() {
  // Danh sách sinh viên mẫu
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyen Van A', class: '10A1', age: 16 },
    { id: 2, name: 'Tran Thi B', class: '10A2', age: 17 },
    { id: 3, name: 'Le Van C', class: '10A3', age: 16 },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Quản lý danh sách sinh viên</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2">Tên</th>
              <th className="px-4 py-2">Lớp</th>
              <th className="px-4 py-2">Tuổi</th>
              <th className="px-4 py-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
  {students.map((student) => (
    <tr key={student.id} className="border-b hover:bg-gray-100">
      <td className="px-4 py-2">{student.name}</td>
      <td className="px-4 py-2 text-center">{student.class}</td>
      <td className="px-4 py-2 text-center">{student.age}</td>
      <td className="px-4 py-2 text-center">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          onClick={() => alert(`Xoá sinh viên: ${student.name}`)}
        >
          Xoá
        </button>
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;