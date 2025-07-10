import React from 'react'
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="bg-darkblue text-white py-10 px-4 rounded-t-3xl">
  <div className="max-w-7xl mx-auto">
    {/* Subscribe Section */}
    <div className="mb-10 text-center">
      <h3 className="text-lg md:text-xl font-semibold mb-4">
        Đăng ký để nhận các chương trình ưu đãi của chúng tôi
      </h3>
      <form className="flex flex-col md:flex-row justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your Email"
          className="px-4 py-2 rounded-md text-black w-full md:w-80"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
        >
          Đăng ký ngay
        </button>
      </form>
    </div>

    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      {/* Intro */}
      <div className='flex flex-col items-center'>
        <img src="src\assets\img\logoshop.png" alt="BesoPetShop" className="h-20 mb-4" />
        <p className="text-sm text-gray-300 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio autem natus expedita at, assumenda harum veniam odio similique enim.
        </p>
        <div className="flex gap-4">
          <a href="#"><i className="fa-brands fa-facebook" /></a>
          <a href="#"><i className="fa-brands fa-twitter" /></a>
          <a href="#"><i className="fa-brands fa-instagram" /></a>
          <a href="#"><i className="fa-brands fa-youtube" /></a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Liên Kết nhanh</h4>
        <ul className="space-y-2 text-sm">
          {['Trang chủ', 'Sản phẩm', 'Dịch vụ', 'Tin tức', 'Blog', 'Giới thiệu'].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <i className="fa-solid fa-arrow-right"></i>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Info */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Liên hệ</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#"><i className="fa-solid fa-location-dot mr-2 "></i> Yên Nghĩa, Hà đông, Hà Nội</a></li>
          <li><a href="#"><i className="fa-solid fa-phone mr-2"></i> (+84)123 456 789</a></li>
          <li><a href="#"><i className="fa-regular fa-envelope mr-2" /> info@besopet-shop.com</a></li>
          <li><i className="fa-regular fa-clock mr-2" /> Mon-Sun: 09:00 AM - 07:00 PM</li>
        </ul>
      </div>
    </div>
    {/* Copyright */}
    <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
      <p className="mb-3 md:mb-0">
        <i className="fa-regular fa-copyright" /> {year} <span className="font-semibold">BesoPetShop</span>. All rights reserved.
      </p>
      <ul className="flex gap-4">
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="hover:underline">Cookies</a></li>
        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
      </ul>
    </div>
  </div>
</footer>
  )
}

export default Footer