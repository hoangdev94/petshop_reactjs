import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, PawPrint, Package, Wrench, User } from 'lucide-react';

const AdminLayout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const linkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-100 transition ${
      location.pathname === path ? 'bg-blue-200 text-blue-700 font-semibold' : 'text-gray-700'
    }`;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-6 text-center uppercase">Admin Panel</h2>
          <nav className="space-y-2">
            <Link to="/admin/pets" className={linkClass('/admin/pets')}>
              <PawPrint className="w-5 h-5" /> Thú cưng
            </Link>
            <Link to="/admin/products" className={linkClass('/admin/products')}>
              <Package className="w-5 h-5" /> Sản phẩm
            </Link>
            <Link to="/admin/services" className={linkClass('/admin/services')}>
              <Wrench className="w-5 h-5" /> Dịch vụ
            </Link>
          </nav>
        </div>

        {/* Logout */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-2 text-gray-600 mb-2 px-4">
            <User className="w-4 h-4" />
            <span className="text-sm">Xin chào, Admin</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded transition"
          >
            <LogOut className="w-5 h-5" />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
