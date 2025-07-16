import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import salebaner from '../assets/img/sale.jpg';
import PetCategorySidebar from '../components/PetCategorySidebar';
function Pet() {
  const [petProducts, setPetProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Tất cả');

  useEffect(() => {
    axios
      .get('http://localhost:3000/pets')
      .then((response) => {
        setPetProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu thú cưng:', error);
      });
  }, []);

  // Lọc theo danh mục hoặc tìm kiếm
  useEffect(() => {
    let result = [...petProducts];

    if (category !== 'Tất cả') {
      result = result.filter(p => p.type === category);
    }

    if (search.trim() !== '') {
      result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredProducts(result);
  }, [search, category, petProducts]);
  
  const renderCards = (list) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {list.map((data) => (
        <ProductCard
          key={data.id}
          image={`http://localhost:3000${data.image}`}
          name={data.name}
          sex={data.sex}
          price={data.price}
          discount={data.discount === 0 ? null : data.discount}
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
  );

  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-col lg:flex-row gap-6">

        <div className="lg:w-1/5 w-full hidden lg:block mt-14">
           <PetCategorySidebar onSelectBreed={(breedName) => {
              setSearch(breedName); // hoặc lọc theo giống, tùy bạn xử lý
              setCategory('Tất cả');
            }} />
          <div className="bg-yellow-100 rounded shadow text-center">
            <img
              src={salebaner}
              alt="Banner Giảm Giá"
              className="rounded-2xl w-full object-cover mt-5"
            />
          </div>
        </div>
        {/* DANH SÁCH THÚ CƯNG */}
        <div className="lg:w-4/5 w-full">
          <h1 className="text-3xl font-bold text-center mb-6">Danh sách thú cưng</h1>
          {filteredProducts.length > 0 ? (
            renderCards(filteredProducts)
          ) : (
            <p className="text-center text-gray-500">Không tìm thấy thú cưng nào.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pet;
