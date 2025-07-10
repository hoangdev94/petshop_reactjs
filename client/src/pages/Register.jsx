import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/users", data);
      console.log('User added successfully:', response.data);
      reset();
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-darkblue mb-6">Đăng ký tài khoản</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Họ</label>
            <input
              {...register('firstName', { required: true })}
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-darkblue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Tên</label>
            <input
              {...register('lastName', { required: true })}
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-darkblue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-darkblue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Số điện thoại</label>
            <input
              {...register('phone', { required: true })}
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-darkblue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Mật khẩu</label>
            <input
              {...register('password', { required: true })}
              type="password"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-darkblue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Xác nhận mật khẩu</label>
            <input
              {...register('confirmPassword', { required: true })}
              type="password"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-darkblue"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-darkblue text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Đăng ký
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Đã có tài khoản? <a href="/login" className="text-darkblue underline">Đăng nhập</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
