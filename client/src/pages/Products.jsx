import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import salebaner from '../assets/img/sale.jpg';
import ProductCategorySidebar from '../components/ProductCategorySidebar';

function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Tất cả');
  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
      });
  }, []);
  useEffect(() => {
    let result = [...products];

    if (category !== 'Tất cả') {
      result = result.filter((p) => p.category === category);
    }

    if (search.trim() !== '') {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [search, category, products]);

  const renderCards = (list) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {list.map((product) => (
        <ProductCard
          key={product.id}
          image={`http://localhost:3000${product.image}`}
          name={product.name}
          price={product.price}
          discount={product.discount === 0 ? null : product.discount}
          isNew={product.isNew}
          isTop={product.isTop}
          isOutOfStock={product.stock === 0}
          rating={product.rating}
          stock={product.stock}
          onFavorite={() => console.log(`Yêu thích: ${product.name}`)}
          onView={() => console.log(`Xem thêm: ${product.name}`)}
          onAddToCart={() => console.log(`Thêm vào giỏ: ${product.name}`)}
        />
      ))}
    </div>
  );
  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* SIDEBAR + BANNER */}
        <div className="lg:w-1/5 w-full hidden lg:block mt-14">
          <ProductCategorySidebar
            onSelectCategory={(categoryName) => {
              setSearch('');
              setCategory(categoryName);
            }}
          />
          <div className="bg-yellow-100 rounded shadow text-center mt-5">
            <img
              src={salebaner}
              alt="Banner Giảm Giá"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>

        {/* DANH SÁCH SẢN PHẨM */}
        <div className="lg:w-4/5 w-full">
          <h1 className="text-3xl font-bold text-center mb-6">Danh sách sản phẩm</h1>
          {filteredProducts.length > 0 ? (
            renderCards(filteredProducts)
          ) : (
            <p className="text-center text-gray-500">Không tìm thấy sản phẩm nào.</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default Product;
