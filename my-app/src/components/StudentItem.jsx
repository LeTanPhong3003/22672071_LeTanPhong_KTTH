import React from 'react';

const StudentItem = ({ student, onDelete, onEdit }) => {
  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="px-4 py-2">{student.name}</td>
      <td className="px-4 py-2 text-center">{student.class}</td>
      <td className="px-4 py-2 text-center">{student.age}</td>
      <td className="px-4 py-2 text-center">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2"
          onClick={() => onDelete(student.id)}
        >
          Xoá
        </button>
        <button
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
          onClick={() => onEdit(student)}
        >
          Sửa
        </button>
      </td>
    </tr>
  );
};

export default StudentItem;