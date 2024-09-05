import React from 'react';
import BannerHome from '../../assets/images/banner1.png'
import BannerAbout from '../../assets/images/banner2.png'

const bannerData = {
  '/': {
    image: BannerHome,
    alt: "Bannière de la page d'accueil",
    text: "Chez vous, partout et ailleurs",
  },
  '/about': {
    image: BannerAbout,
    alt: "Bannière de la page À propos",
    text: "",
  },
};

const Banner = ({ routeData }) => {
  const { image, alt, text } = bannerData[routeData.pathname] || {};

  return (
    <div className='banner'>
      <img src={image} alt={alt} />
      <p>{text}</p>
    </div>
  );
};

export default Banner;