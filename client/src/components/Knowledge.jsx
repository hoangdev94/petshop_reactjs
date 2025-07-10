import React from 'react'
import { FaAngleRight } from 'react-icons/fa6';
const knowledges = [
  {
    img: 'src/assets/img/kienthuc1.jpg',
    title: 'Tại sao chó con lại cắn phá đồ đạc và cách phòng ngừa hiệu quả',
    desc: 'Chó con thường cắn phá vì mọc răng hoặc buồn chán. Bạn có thể huấn luyện, cung cấp đồ chơi phù hợp và tăng vận động để giảm hành vi này.',
  },
  {
    img: 'src/assets/img/kienthuc2.jpg',
    title: 'Tại sao cún con cần giữ ấm và cách giữ ấm hiệu quả cho cún vào mùa đông',
    desc: 'Giữ ấm cho cún giúp phòng tránh bệnh hô hấp. Sử dụng áo ấm, chăn và giữ không gian sống khô ráo, ấm áp.',
  },
  {
    img: 'src/assets/img/kienthuc3.jpg',
    title: 'Tại sao phải thăm khám sức khỏe cho thú cưng định kỳ?',
    desc: 'Thăm khám định kỳ giúp phát hiện bệnh sớm, tiêm phòng đúng lịch và đảm bảo thú cưng phát triển khỏe mạnh.',
  },
];
function Knowledge() {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <p className="text-lg text-black-500">Bạn đã sẵn sàng để biết?</p>
            <h3 className="text-2xl md:text-3xl font-bold text-darkblue">Những kiến thức hữu ích cho thú cưng</h3>
          </div>
          <div>
            <a
              href="#"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 border border-darkblue text-darkblue px-4 py-2 rounded-full hover:bg-darkblue hover:text-white transition"
            >
              Xem thêm <FaAngleRight />
            </a>
          </div>
        </div>
        {/* Knowledge List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledges.map((item, index) => (
            <a
              href="#"
              key={index}
              className="bg-gray-100 hover:bg-white shadow-sm hover:shadow-lg transition rounded-xl overflow-hidden"
            >
              <img src={item.img} alt={item.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <p className="text-sm text-pink-600 font-semibold mb-1">Pet knowledge</p>
                <h4 className="text-lg font-bold mb-2 text-darkblue">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Knowledge