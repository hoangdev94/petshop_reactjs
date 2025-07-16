import React from 'react';
import petCareImg from '../assets/img/pet-care.jpg';
import spaImg from '../assets/img/spa.jpg';
import hotelImg from '../assets/img/hotel.jpg';   
import healthImg from '../assets/img/health.jpg';
const services = [
  {
    title: 'Tắm rửa & Vệ sinh',
    description:
      'Giúp thú cưng luôn sạch sẽ, thơm tho, với quy trình tắm gội an toàn, sấy khô nhẹ dịu và khử mùi hiệu quả.',
    image: petCareImg,
  },
  {
    title: 'Spa & Cắt tỉa lông',
    description:
      'Thư giãn và làm đẹp với dịch vụ cắt tỉa, tạo kiểu chuyên nghiệp – giúp thú cưng luôn rạng rỡ và tự tin.',
    image: spaImg,
  },
  {
    title: 'Gửi thú cưng (Pet Hotel)',
    description:
      'Không gian lưu trú tiện nghi, có nhân viên chăm sóc, khu vui chơi và camera theo dõi 24/7 cho thú cưng yên tâm.',
    image: hotelImg,
  },
  {
    title: 'Chăm sóc sức khỏe',
    description:
      'Khám bệnh, tiêm phòng, kiểm tra dinh dưỡng định kỳ – đồng hành cùng sức khỏe thú cưng mỗi ngày.',
    image: healthImg,
  },
];

const Service = () => {
  return (
    <div className="container mx-auto px-4 py-14">
      <h1 className="text-4xl font-extrabold text-center mb-16 text-darkblue">
        Dịch vụ chăm sóc thú cưng
      </h1>

      <div className="space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center gap-10 group`}
          >
            <div className="lg:w-1/2 w-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="lg:w-1/2 w-full px-2">
              <h2 className="text-2xl md:text-3xl font-bold text-darkblue mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
