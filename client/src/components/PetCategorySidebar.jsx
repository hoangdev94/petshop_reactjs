import React, { useState } from 'react';

const petBreeds = [
  { name: 'Chó Poodle', count: 18 },
  { name: 'Chó Phốc Sóc', count: 12 },
  { name: 'Chó Golden', count: 9 },
  { name: 'Chó Corgi', count: 7 },
  { name: 'Chó Husky', count: 5 },
  { name: 'Mèo Anh Lông Ngắn', count: 22 },
  { name: 'Mèo Ba Tư', count: 14 },
  { name: 'Mèo Munchkin', count: 11 },
  { name: 'Mèo Scottish Fold', count: 8 },
  { name: 'Mèo Bengal', count: 4 },
];

const PetCategorySidebar = ({ onSelectBreed }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBreeds = petBreeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="bg-white p-5 shadow-md rounded-xl border border-gray-200 sticky">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Giống thú cưng</h2>
      {/* Tìm kiếm */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm giống chó, mèo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Danh sách giống */}
      <div className="space-y-2">
        {filteredBreeds.map((breed, index) => (
          <button
            key={index}
            onClick={() => onSelectBreed && onSelectBreed(breed.name)}
            className="w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <span>{breed.name}</span>
            <span className="text-sm text-gray-500">({breed.count})</span>
          </button>
        ))}
        {filteredBreeds.length === 0 && (
          <p className="text-center text-gray-400 text-sm mt-4">Không tìm thấy giống phù hợp.</p>
        )}
      </div>
    </aside>
  );
};

export default PetCategorySidebar;
