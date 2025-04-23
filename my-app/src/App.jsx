import { useState } from 'react';

function App() {
  // Danh sách sinh viên mẫu
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyen Van A', class: '10A1', age: 16 },
    { id: 2, name: 'Tran Thi B', class: '10A2', age: 17 },
    { id: 3, name: 'Le Van C', class: '10A3', age: 16 },
  ]);

  // State để lưu thông tin sinh viên mới
  const [newStudent, setNewStudent] = useState({ name: '', class: '', age: '' });

  // Hàm xử lý thêm sinh viên
  const handleAddStudent = () => {
    if (newStudent.name && newStudent.class && newStudent.age) {
      setStudents([
        ...students,
        { id: students.length + 1, ...newStudent, age: parseInt(newStudent.age) },
      ]);
      setNewStudent({ name: '', class: '', age: '' }); // Reset form
    } else {
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
  };

  // Hàm xử lý xóa sinh viên
  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Quản lý danh sách sinh viên</h1>

      {/* Form thêm sinh viên */}
      <div className="mb-6 bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Thêm sinh viên mới</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Họ tên"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            className="border px-3 py-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Lớp"
            value={newStudent.class}
            onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
            className="border px-3 py-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Tuổi"
            value={newStudent.age}
            onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
        <button
          onClick={handleAddStudent}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Thêm sinh viên
        </button>
      </div>

      {/* Bảng danh sách sinh viên */}
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
                    onClick={() => handleDeleteStudent(student.id)}
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