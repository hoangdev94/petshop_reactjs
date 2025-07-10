import React from 'react';
import { FaCirclePlay, FaAngleRight } from 'react-icons/fa6';
const DiscoverUs = () => {
  return (
    <div className="container flex items-end  mx-auto mt-5 bg-darkblue text-white py-10 rounded-3xl">
      <div className="container items-end mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center gap-10 justify-between">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="src/assets/img/discoverUs.png"
              alt="Discover"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold uppercase mb-2">Beso Pet Shop</h2>
            <h3 className="text-xl font-semibold mb-4">Lý do bạn nên chọn chúng tôi!</h3>
           <p className="b-discoverUs-short-desc">
            Chúng tôi cam kết mang đến cho thú cưng của bạn sự chăm sóc tốt nhất với dịch vụ tận tâm, sản phẩm chất lượng và đội ngũ nhân viên giàu kinh nghiệm. Với cơ sở vật chất hiện đại và quy trình chuyên nghiệp, Beso Pet Shop là lựa chọn tin cậy cho mọi nhu cầu của thú cưng – từ ăn uống, làm đẹp đến y tế và vui chơi.
            </p>
            <div className="flex gap-4 flex-wrap mt-5">
              <a
                href="#"
                className="border border-white text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-darkblue transition"
              >
                Xem video <FaCirclePlay />
              </a>
              <a
                href="#"
                className="bg-white text-darkblue px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200 transition"
              >
                Khám phá <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiscoverUs;
