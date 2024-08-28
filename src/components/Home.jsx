import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const products = [
    { id: 1, name: 'Jeans', text: 2000 , image: 'https://img.freepik.com/free-photo/women-legs-front-yellow-wall_23-2148784188.jpg?t=st=1724840204~exp=1724843804~hmac=077effcbae5ffbb3e1ce656b5e874d4d5d579e7d6ae982a2150f163096b63a81&w=740' },
    { id: 2, name: 'Shirts', text: 1800, image: 'https://img.freepik.com/free-photo/clothes-hang_1339-2013.jpg?t=st=1724840564~exp=1724844164~hmac=4a781fa2c673d0354497b7790be2aa8a8bfb5aba969c623bff03dbdd1cea3897&w=740' },
    { id: 3, name: 'Watchs', text: 2500, image: 'https://img.freepik.com/free-photo/close-up-clock-with-time-change_23-2149241141.jpg?t=st=1724840703~exp=1724844303~hmac=7d3a6b248be31010383f6eda879931c69b912a0ad0590504112dfa4b98ee1692&w=360' },
    { id: 4, name: 'Snakers', text: 3500, image: 'https://img.freepik.com/free-photo/fashionforward-man-steps-out-blue-pants-fresh-white-sneakers_60438-3938.jpg?t=st=1724840798~exp=1724844398~hmac=7f919e03c6ea9813ded72361c4d60f582b77f049cc409d33a2d381d644d9a4e6&w=826' },
    { id: 5, name: 'Hoodies', text: 2499, image: 'https://img.freepik.com/free-psd/young-man-white-sweatshirt-white-background-back-view_1142-53309.jpg?w=740&t=st=1724843110~exp=1724843710~hmac=9c5ba3a6fe4dd1f3fa6c22dac2f9f706db2f827ea44f678b0b5dfee15799cf16' },
    { id: 6, name: 'Tracksuit', text: 3499, image: 'https://img.freepik.com/free-photo/sport-woman-outdoor_144627-24954.jpg?t=st=1724843379~exp=1724846979~hmac=5e3b15f93b5e40ddca1352e6120332e63fec7cc3e6f921accf196e2a8e8b39fe&w=360' },
    { id: 7, name: 'Women jeans', text: 2000, image:'https://img.freepik.com/free-photo/denims_1303-4489.jpg?t=st=1724844148~exp=1724847748~hmac=57326594899344dbf7066216913a03ff3ee17049a8f2444b705f9646e519a5cd&w=360'},
    { id: 8, name: 'Coats', text: 3499, image:'https://img.freepik.com/premium-photo/row-coats-hanging-rack-with-man-suit-jacket-hanging-rack_1271244-164790.jpg?w=826'}
    
  ];


  const handleMoreClick = () => {
    navigate('/products');
  };
  
  return (
    <div className="container mx-auto p-4 mt-1">
      <Slider {...sliderSettings} className="mb-8">
        <div>
          <img
            src="https://img.freepik.com/free-psd/fashion-event-youtube-cover-template_23-2150750101.jpg?w=826&t=st=1724778094~exp=1724778694~hmac=15de06fe92009a19cd2ef82e055abc3dcd345ae7bd92f68443c8c72e94307548" 
            alt="Slide 1"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-psd/modern-fashion-lifestyle-banner-template_23-2148924973.jpg?t=st=1724778593~exp=1724782193~hmac=6c37dda571c6e7b3a3c4e1e0ffd2db501393a8e21e161deced08f479e5fe5197&w=826" 
            alt="Slide 2"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-psd/fashion-template-design_23-2150658196.jpg?t=st=1724778689~exp=1724782289~hmac=748cd0c95ed9e982c8f9734f3368317942790e5d376e70257e7dda12460c0d05&w=826" 
            alt="Slide 3"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </Slider>
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="border rounded-lg p-4 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-500 mb-4">PKR.{product.text}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleMoreClick}
            >
              More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
