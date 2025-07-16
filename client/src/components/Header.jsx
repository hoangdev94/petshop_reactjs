import React from "react";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";



const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    },[]);
    const handleLogout = () => {
      localStorage.removeItem('admin');
      localStorage.removeItem('user');
      setUser(null);
      window.location.reload();
    };
  return (
    <>
      <div className=" sticky top-0 z-50" >
        <div className="bg-darkblue text-sm text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-1">
              <i className="fa-regular fa-envelope" />
              info@besopet-shop.com
            </a>
            <a href="#" className="flex items-center gap-1">
              <i className="fa-solid fa-phone"></i>
              (+84)123 456 789
            </a>
            <ul className="flex items-center gap-3">
              <li>
                <a href="#"><i className="fa-brands fa-facebook" /></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-twitter" /></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-instagram" /></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-youtube" /></a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <a href="#" className="flex items-center gap-2 relative">
                <i className="fa-regular fa-bell" />
                <span className="absolute -top-2 ml-1 mr-1 bg-red-500 text-white text-xs px-1  rounded-full">
                  8
                </span>
                Thông báo
              </a>
              {/* Dropdown Thông báo */}
              <div className="absolute bg-white shadow-md mt-2 right-0 w-48 rounded-md p-3 text-sm z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <p className="text-gray-500 text-center">Không có thông báo mới</p>
              </div>
            </div>
            {!user ? (
              <>
                <Link to="/register">Đăng ký</Link>
                <Link to="/login">Đăng nhập</Link>
              </>
            ) : (
                <>
                  <span >Xin chào, <b>{user.lastName}</b></span>
                  <button onClick={handleLogout} className="text-re hover:underline bg-darkblue">Đăng xuất</button>
                </>
              )}
          </div>
        </div>
      </div>
      {/* Main Header */}
        <div className="bg-darkblue text-white">
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
           <Link to="/" className="flex items-center">
              <img
                src="src/assets/img/logoshop.png"
                alt="BesoPetShop"
                className="w-28 h-28 md:w-30 md:h-24"
              />
            </Link>
           <ul className="flex gap-6 font-medium uppercase text-l">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-500 font-semibold" : "hover:text-blue-300"
                  }
                >
                  trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/pets" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-500 font-semibold" : "hover:text-blue-300"
                  }
                >
                  thú cưng
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/products" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-500 font-semibold" : "hover:text-blue-300"
                  }
                >
                  sản phẩm
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-500 font-semibold" : "hover:text-blue-300"
                  }
                >
                  dịch vụ
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-500 font-semibold" : "hover:text-blue-300"
                  }
                >
                  giới thiệu
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    isActive ? "text-blue-500 font-semibold" : "hover:text-blue-300"
                  }
                >
                  liên hệ
                </NavLink>
              </li>
            </ul>
            <div className="relative group">
          <a href="" className="relative flex items-center">
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full">
              99
            </span>
          </a>
          {/* Dropdown Cart */}
          <div className="absolute right-0 mt-2 w-96  bg-white shadow-lg p-3 pb-20 rounded-md text-sm z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <p className="text-gray-500 font-semibold bg-g mb-2">Sản phẩm mới thêm</p>
            <div className="border-t pt-2">
              <p className="text-gray-500 text-center">Không có sản phẩm mới</p>
            </div>
            <a
              href=""
              className=" absolute p-5 mt-5 bottom-2 right-2 block text-center bg-darkblue text-white py-1.5 rounded hover:bg-green-600 hover:text-white transition-colors"
            >
              Xem giỏ hàng
            </a>
          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
