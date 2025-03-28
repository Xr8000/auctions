import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/auction.png';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Entdecke Dein Lieblingsstück
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Komm in das einziugartige Auktionshaus und finde dein Schmuckstück
            </p>
            <div className="flex space-x-4">
              <Link to="/auctions" className="btn-primary">
                Auktionen
              </Link>
              <Link to="/about" className="px-6 py-2 border-2 border-primary-600 text-primary-600
                                        rounded-lg hover:bg-primary-50 transition-colors duration-200 
                                        font-semibold">
                erfahre mehr
              </Link>
            </div>
          </div>
          <div className="relative md:w-2/3 h-1/2 opacity-80 ml-80">
            <img
              src={hero}
              alt="Auction items"
              className="rounded-lg shadow-xl h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;