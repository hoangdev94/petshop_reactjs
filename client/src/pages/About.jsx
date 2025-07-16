import React from 'react';
import bgImg from '../assets/img/about-title.jpg';
import missionImg from '../assets/img/mission.jpg';
import ceoImg from '../assets/img/ceo-about.jpg'; 
import storeImg from '../assets/img/store.jpg';

const About = () => {

  const aboutSections = [
  {
    title: 'Sứ mệnh của chúng tôi',
    description:
      'Tại Beso Pet Shop, chúng tôi cam kết mang đến những sản phẩm và dịch vụ tốt nhất cho thú cưng. Từ chăm sóc sức khỏe đến làm đẹp, mọi thứ đều được thực hiện bằng cả trái tim.',
    image: missionImg,
  },
  {
    title: 'Người sáng lập',
    description:
      'Julia Johnson – người sáng lập Beso Pet Shop, đã dành cả tâm huyết để tạo ra một môi trường thân thiện, nơi thú cưng được yêu thương và chăm sóc như chính thành viên trong gia đình.',
    image: ceoImg,
  },
  {
    title: 'Không gian cửa hàng',
    description:
      'Cửa hàng Beso là nơi bạn và thú cưng có thể trải nghiệm mua sắm, spa, gửi thú trong môi trường hiện đại, sạch sẽ và chuyên nghiệp. Một điểm đến lý tưởng cho mọi người bạn bốn chân.',
    image: storeImg,
  },
];
  return (
    <div>
      {/* Tiêu đề trang */}
      <div
        className="bg-cover bg-center h-80 text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h3 className="text-5xl font-bold ">Beso Pet Shop</h3>
      </div>

      {/* Nội dung giới thiệu */}
       <div className="bg-gray-50 py-14 px-4">
      <div className="container mx-auto">
        <div className="space-y-20">
          {aboutSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-10 bg-white rounded-2xl shadow-md p-6"
            >
              <div className="lg:w-1/2 w-full overflow-hidden rounded-xl shadow">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-darkblue mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
