import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/login', form);
      if (response.data.success) {
      const user = response.data.user;
      if (user.isAdmin === true) {
        localStorage.setItem("admin", JSON.stringify(user));
        navigate("/admin/"); 
      } 
      else {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/"); 
      }
    }
  } catch (error) {
    alert("Sai tài khoản hoặc mật khẩu");
  }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-darkblue mb-6">Đăng nhập</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-darkblue text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Đăng nhập
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Chưa có tài khoản?{' '}
          <a href="/register" className="text-darkblue underline">
            Đăng ký ngay
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
