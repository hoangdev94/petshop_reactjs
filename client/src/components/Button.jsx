import React from 'react';

const AddProductButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
    >
        Thêm sản phẩm
    </button>
);

export default AddProductButton;