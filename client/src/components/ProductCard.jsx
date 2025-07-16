import React from "react";

const ProductCard = ({
  image,
  name,
  sex,
  price,
  discount,
  isTop,
  isNew,
  isOutOfStock,
  rating = 0,
  stock = null,
  onFavorite,
  onView,
  onAddToCart
}) => {
  const discountedPrice = discount ? price - price * (discount / 100) : price;
  const imagestyle = `
    .product-image {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: center top;
    border-radius: inherit;
    transition: all 0.3s linear;
  }
`;
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md group bg-white">
      {/* Image and Overlay */}
      <style>{imagestyle}</style>
      <a href="#" className="block relative">
        <img src={image} alt={name} className="object-cover product-image" />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition "></div>
      </a>
      {/* Badges */}
      <ul className="absolute top-2 left-2 space-y-1 text-xs font-semibold z-10">
        {isTop && <li className="bg-yellow-500 text-white px-2 py-1 rounded">Top</li>}
        {isNew && <li className="bg-green-600 text-white px-2 py-1 rounded">New</li>}
        {discount && <li className="bg-red-500 text-white px-2 py-1 rounded">-{discount}%</li>}
        {isOutOfStock && <li className="bg-gray-500 text-white px-2 py-1 rounded">Hết hàng</li>}
      </ul>
      {/* Action Buttons */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition space-y-2 z-10 pointer-events-none">
        <button
          onClick={onFavorite}
          className="bg-white text-gray-800 text-xs px-3 py-1 flex items-center gap-1 hover:bg-gray-100 pointer-events-auto rounded-xl"
        >
          <i className="fa-regular fa-heart"></i> <span>Yêu thích</span>
        </button>
        <button
          onClick={onView}
          className="bg-white text-gray-800 text-xs px-3 py-1  flex items-center gap-1 hover:bg-gray-100 pointer-events-auto rounded-xl"
        >
          <i className="fa-solid fa-magnifying-glass"></i> <span>Xem thêm</span>
        </button>
      </div>
      {/* Product Info */}
      <div className="p-4 text-sm">
        <a href=""><h3 className="font-semibold text-gray-800 line-clamp-2 mb-1">{name}</h3></a>
        <div className="flex items-center gap-2 mb-1">
          {discount ? (
            <>
              <span className="text-red-600 font-bold">{discountedPrice.toLocaleString()}₫</span>
              <span className="text-gray-400 line-through text-xs">{price.toLocaleString()}₫</span>
            </>
          ) : (
            <span className="text-gray-800 font-bold">{price.toLocaleString()}₫</span>
          )}
        </div>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{'★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))}</span>
          {stock !== null && (
            <span>{stock > 0 ? `${stock} sản phẩm còn lại` : 'Hết hàng'}</span>
          )}
        </div>
         <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          {sex !== null && (
            <span>{sex != null ? `Giới tính: ${sex}`: ''}</span>
          )}
        </div>
        <button
          onClick={onAddToCart}
          disabled={isOutOfStock || stock === 0}
          className=" mt-1 w-full text-center bg-darkblue text-white py-1.5 rounded-xl hover:bg-green-600 transition-colors text-xs disabled:opacity-50"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
