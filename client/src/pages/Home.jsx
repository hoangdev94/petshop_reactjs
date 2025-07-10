import React from 'react'
import ProductTab from '../components/ProductTab'
import DiscoverUs from '../components/Discoverus'
import Knowledge from '../components/Knowledge'
import BestSellerTabs from '../components/BestSellerTab'
import BannerSlider from '../components/Banner'
function Home() {
  return (
    <main className="main-content">
        <BannerSlider/>
        <div className='grid grid-cols-1 text-center text-3xl product-title font-semibold mt-5'><h1>Sản phẩm mới</h1></div>
        <ProductTab/>
        <div className='grid grid-cols-1 text-center text-3xl product-title font-semibold mt-10'><h1>Sản phẩm bán chạy</h1></div>
        <BestSellerTabs/>
        <DiscoverUs/>
        <Knowledge/>
    </main>
  )
}
export default Home