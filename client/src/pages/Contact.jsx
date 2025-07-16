import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faEarthAmericas,
} from '@fortawesome/free-solid-svg-icons';
import contactImg from '../assets/img/contact-img.jpg';

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-10">
        {/* Tiêu đề */}
        <h1 className="text-4xl font-extrabold text-center text-darkblue mb-10">
          Liên hệ với chúng tôi
        </h1>

        {/* Thông tin liên hệ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-12">
          <div className="space-y-2">
            <FontAwesomeIcon icon={faLocationDot} className="text-2xl text-darkblue" />
            <p>
              <strong>Địa chỉ:</strong> Mễ Trì - Nam Từ Liêm - Hà Nội
            </p>
          </div>
          <div className="space-y-2">
            <FontAwesomeIcon icon={faPhone} className="text-2xl text-darkblue" />
            <p>
              <strong>Điện thoại:</strong> (+84)123 456 789
            </p>
          </div>
          <div className="space-y-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-darkblue" />
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@besopet-shop.com" className="text-darkblue underline">
                info@besopet-shop.com
              </a>
            </p>
          </div>
          <div className="space-y-2">
            <FontAwesomeIcon icon={faEarthAmericas} className="text-2xl text-darkblue" />
            <p>
              <strong>Website:</strong>{' '}
              <a href="https://besopetshop.com.vn" className="text-darkblue underline">
                besopetshop.com.vn
              </a>
            </p>
          </div>
        </div>

        {/* Form liên hệ */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-darkblue mb-4">Liên hệ ngay</h3>
            <form className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nhập họ và tên..."
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Nhập email..."
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Địa chỉ</label>
                <input
                  type="text"
                  placeholder="Nhập địa chỉ..."
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Số điện thoại</label>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại..."
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Nội dung</label>
                <textarea
                  rows="5"
                  placeholder="Nhập nội dung..."
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-darkblue text-white px-6 py-2 rounded hover:bg-pink-700 transition"
              >
                Gửi ngay
              </button>
            </form>
          </div>

          {/* Ảnh liên hệ */}
          <div className="flex justify-center ">
            <img
              src={contactImg}
              alt="Liên hệ"
              className="w-full h-2/3 rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>  
    </div>
  );
};
export default Contact;
