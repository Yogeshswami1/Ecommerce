import Layout from "../../layout/Layout";
import HeroSection from "../../heroSection/HeroSection";
import React from 'react'
import Category from "../../category/Category";
import HomePageProductCard from "../../homePageProductCard/HomePageProductCard";
import Track from "../../track/Track";
import Testimonial from "../../testimonial/Testimonial";
// import Footer from "../../footer/Footer";

const HomePage = () => {
    
  return (
    <Layout>
    <HeroSection/>
    <Category/>
    <HomePageProductCard/>
    <Track/>
    <Testimonial/>
  
    {/* <Footer/> */}

    </Layout>
  )
}

export default HomePage