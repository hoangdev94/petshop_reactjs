// React Component: BannerSlider.jsx
import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const BannerSlider = () => {
  useEffect(() => {
    new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);
const swiperStyles = `
  .swiper-button-prev::after,
  .swiper-button-next::after {
    top: 50%;
    width: 40px;
    height: 40px;
    color: #fff;
    background-color: #00274a;
    border-radius: 50%;
    display: flex;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    opacity: 0.3;
  }
   .swiper-button-prev:hover::after,
  .swiper-button-next:hover::after {
   opacity: 1;
  }
`;
  return (
    <div className="w-full relative">
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="src\assets\img\baner-1.png" alt="Banner 1" className="w-full object-cover" />
          </div>
          <div className="swiper-slide">
            <img src="src\assets\img\baner-2.png" alt="Banner 2" className="w-full object-cover" />
          </div>
          <div className="swiper-slide">
            <img src="src\assets\img\baner-3.png" alt="Banner 3" className="w-full object-cover" />
          </div>
        </div>

        {/* Navigation */}
        <div  className="swiper-button-prev w-1 h-1 sm:w-10 sm:h-10 text-xs sm:text-sm"></div>
        <div className="swiper-button-next w-1 h-1 sm:w-10 sm:h-10 text-xs sm:text-sm"></div>
        <style>{swiperStyles}</style>
        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default BannerSlider;


