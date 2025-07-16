import React, { useState, useEffect } from 'react';
import AddPet from './components/AddPet';
import axios from 'axios';

function PetManager() {
  const [showForm, setShowForm] = useState(false);
  const [pets, setPets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 7;

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pets');
      setPets(response.data);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu thú cưng:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc muốn xóa thú cưng này?')) {
      try {
        await axios.delete(`http://localhost:3000/pets/${id}`);
        fetchPets();
      } catch (error) {
        console.error('Lỗi khi xóa:', error);
      }
    }
  };

  // Tính toán dữ liệu hiển thị theo trang
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);
  const totalPages = Math.ceil(pets.length / petsPerPage);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý thú cưng</h1>
      <div className="flex justify-between items-center mb-4 mt-5">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {showForm ? 'Đóng form' : 'Thêm thú cưng'}
        </button>
      </div>
       {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl font-bold"
              >
                ×
              </button>
              <AddPet onSuccess={() => {
                fetchPets();
                setShowForm(false);
              }} />
            </div>
          </div>
        )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded text-center items-center">
          <thead>
            <tr className="bg-gray-100 items-center text-center">
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Tên</th>
              <th className="py-2 px-4 border-b">Giới tính</th>
              <th className="py-2 px-4 border-b">Giá</th>
              <th className="py-2 px-4 border-b">Ảnh</th>
              <th className="py-2 px-4 border-b">Tồn kho</th>
              <th className="py-2 px-4 border-b">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {currentPets.map((pet, index) => (
              <tr key={pet.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{indexOfFirstPet + index + 1}</td>
                <td className="py-2 px-4 border-b">{pet.name}</td>
                 <td className="py-2 px-4 border-b">{pet.sex}</td>
                <td className="py-2 px-4 border-b">{pet.price.toLocaleString()} đ</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex justify-center items-center">
                    <img
                      src={`http://localhost:3000${pet.image}`}
                      alt={pet.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </div>
                </td>
                <td className="py-2 px-4 border-b">{pet.stock}</td>
                <td className="py-2 px-4 border-b space-x-2">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">Sửa</button>
                  <button
                    onClick={() => handleDelete(pet.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
            {pets.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-4">Không có dữ liệu</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PetManager;
