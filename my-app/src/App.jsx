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

  // State để lưu sinh viên đang được chỉnh sửa
  const [editingStudent, setEditingStudent] = useState(null);

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

  // Hàm xử lý lưu thông tin sau khi sửa
  const handleSaveEdit = () => {
    setStudents(
      students.map((student) =>
        student.id === editingStudent.id ? editingStudent : student
      )
    );
    setEditingStudent(null); // Đóng form chỉnh sửa
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
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2"
                    onClick={() => handleDeleteStudent(student.id)}
                  >
                    Xoá
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    onClick={() => setEditingStudent(student)}
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form chỉnh sửa sinh viên */}
      {editingStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Chỉnh sửa sinh viên</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Họ tên"
                value={editingStudent.name}
                onChange={(e) =>
                  setEditingStudent({ ...editingStudent, name: e.target.value })
                }
                className="border px-3 py-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Lớp"
                value={editingStudent.class}
                onChange={(e) =>
                  setEditingStudent({ ...editingStudent, class: e.target.value })
                }
                className="border px-3 py-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Tuổi"
                value={editingStudent.age}
                onChange={(e) =>
                  setEditingStudent({ ...editingStudent, age: e.target.value })
                }
                className="border px-3 py-2 rounded w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setEditingStudent(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
              >
                Hủy
              </button>
              <button
                onClick={handleSaveEdit}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;