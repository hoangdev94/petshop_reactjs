import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const AddPet = ({ onSuccess }) => {
  const { register, handleSubmit, reset } = useForm();

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
    const response = await axios.post("http://localhost:3000/pets", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Pet added successfully:', response.data);
    if (onSuccess) onSuccess();
    reset();
  } catch (error) {
    console.error('Failed to add pet:', error);
  }
};


  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Thêm thú cưng mới</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block">Tên thú cưng</label>
          <input {...register('name')} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block">Giá</label>
          <input type="number" {...register('price')} required className="w-full border p-2 rounded" />
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
          Thêm thú cưng
        </button>
      </form>
    </div>
  );
};
export default AddPet;
