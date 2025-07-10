import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

const BestSellerTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [topPets, setTopPets] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    // Gọi API lấy thú cưng isTop
    axios
      .get('http://localhost:3000/pets/top') // backend cần tạo endpoint này
      .then((response) => {
        setTopPets(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy thú cưng bán chạy:', error);
      });
    axios
      .get('http://localhost:3000/products/top') // backend cần tạo endpoint này
      .then((response) => {
        setTopProducts(response.data);
        console.log('Top sản phẩm:', response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy sản phẩm bán chạy:', error);
      });
  }, []);
  const renderCards = (list) => (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((data) => (
          <ProductCard
            key={data.id}
            image={`http://localhost:3000${data.image}`}
            name={data.name}
            price={data.price}
            discount={data.discount}
            isNew={data.isNew}
            isTop={data.isTop}
            isOutOfStock={data.stock === 0}
            rating={data.rating}
            stock={data.stock}
            onFavorite={() => console.log(`Yêu thích: ${data.name}`)}
            onView={() => console.log(`Xem thêm: ${data.name}`)}
            onAddToCart={() => console.log(`Thêm vào giỏ: ${data.name}`)}
          />
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 1, label: 'Thú cưng bán chạy', content: renderCards(topPets) },
    { id: 2, label: 'Sản phẩm bán chạy', content: renderCards(topProducts) },
  ];

  return (
    <div className="w-full">
      <ul className="flex space-x-4 border-b border-gray-300 mb-4 justify-center mt-5">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 cursor-pointer ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? 'block' : 'hidden'}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
export default BestSellerTabs;
