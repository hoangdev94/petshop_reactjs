// src/admin/ProductManager.jsx
import React from 'react';
import { useState } from 'react';
import AddProduct from './components/AddProduct'; // Assuming AddProduct is the component for adding products
const ProductManager = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Quản lý sản phẩm</h2>
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {showForm ? 'Đóng form' : 'Thêm sản phẩm'}
      </button>
      {showForm && <AddProduct />}
      <p className="mt-6 text-gray-600">Nội dung quản lý sản phẩm ở đây</p>
    </div>
  );
};
export default ProductManager;
