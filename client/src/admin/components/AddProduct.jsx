import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const AddProduct = ({ onSuccess }) => {
  const { register, handleSubmit,reset,setValue } = useForm();
  const [priceDisplay, setPriceDisplay] = useState('');
 const onSubmit = async (data) => {
  const formData = new FormData();
  formData.append('image', data.image[0]);
  formData.append('name', data.name);
  formData.append('price', data.price);
  formData.append('discount', data.discount);
  formData.append('rating', data.rating);
  formData.append('stock', data.stock);
  formData.append('isTop', data.isTop || false);
  formData.append('isNew', data.isNew || false);
  formData.append('isOutOfStock', data.isOutOfStock || false);

  console.log('Submitting form data:', data);

  try {
    const response = await axios.post("http://localhost:3000/products", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Product added successfully:', response.data);
    if (onSuccess) onSuccess();
    reset();
  } catch (error) {
    console.error('Failed to add Product:', error);
  }
};
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block">Tên sản phẩm</label>
          <input {...register('name')} required className="w-full border p-2 rounded" />
        </div>

        <div>
            <label className="block">Giá (VND)</label>
            <input
              type="text"
              value={priceDisplay}
              onChange={(e) => {
                const rawValue = e.target.value.replace(/\D/g, ''); // chỉ giữ số
                const formatted = Number(rawValue).toLocaleString('vi-VN'); // format VND
                setPriceDisplay(formatted);
              }}
              onBlur={() => {
                // khi mất focus, set giá trị thực tế vào react-hook-form
                const raw = priceDisplay.replace(/\D/g, '');
                setValue('price', raw); // set giá trị thô
              }}
              className="w-full border p-2 rounded"
              placeholder="Ví dụ: 100.000"
            />
            <input type="hidden" {...register('price', { required: true })} />
       </div>

        <div>
          <label className="block">Giảm giá (%)</label>
          <input type="number" {...register('discount')} defaultValue={0} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block">Đánh giá (sao)</label>
          <input type="number" {...register('rating')} defaultValue={0} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block">Số lượng trong kho</label>
          <input type="number" {...register('stock')} defaultValue={0} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block">Ảnh</label>
          <input type="file" {...register('image')} accept="image/*" required className="w-full" />
        </div>

        <div className="flex gap-4 mt-2">
          <label><input type="checkbox" {...register('isTop')} /> Nổi bật</label>
          <label><input type="checkbox" {...register('isNew')} /> Mới</label>
          <label><input type="checkbox" {...register('isOutOfStock')} /> Hết hàng</label>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};
export default AddProduct;
