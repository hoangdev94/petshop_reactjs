import React, { useState } from 'react';

const productCategories = [
  { name: 'Balo', count: 12 },
  { name: 'Cát vệ sinh', count: 12 },
  { name: 'Chuồng', count: 12 },
  { name: 'Danh mục cún', count: 12 },
  { name: 'Danh mục mèo', count: 12 },
  { name: 'Phụ kiện', count: 12 },
  { name: 'Áo', count: 123 },
  { name: 'Bàn cáo', count: 15 },
  { name: 'Bát', count: 12 },
  { name: 'Dây dắt', count: 34 },
  { name: 'Đồ chơi', count: 239 },
  { name: 'Khay vệ sinh', count: 39 },
  { name: 'Thực phẩm', count: 100 },
  { name: 'Túi vận chuyển', count: 20 },
];

const ProductCategorySidebar = ({ onSelectCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = productCategories.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="bg-white p-5 shadow-md rounded-xl border border-gray-200 sticky">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Danh mục sản phẩm</h2>

      {/* Tìm kiếm */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Danh mục */}
      <div className="space-y-2">
        {filteredCategories.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelectCategory && onSelectCategory(item.name)}
            className="w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <span>{item.name}</span>
            <span className="text-sm text-gray-500">({item.count})</span>
          </button>
        ))}

        {filteredCategories.length === 0 && (
          <p className="text-center text-gray-400 text-sm mt-4">Không tìm thấy danh mục phù hợp.</p>
        )}
      </div>
    </aside>
  );
};

export default ProductCategorySidebar;
