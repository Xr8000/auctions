import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedAuctions from './components/FeaturedAuctions';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import AuctionList from './components/AuctionList';
import AuctionDetail from './components/AuctionDetail';

const App: React.FC = () => {
  const [auctions, setAuctions] = React.useState([]);

  React.useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch('http://sunken-relics.de:8055/items/Auktionen?fields=*,Themen.Themen_id.*');
        const data = await response.json();
        if (data && data.data) {
          setAuctions(data.data);
        }
      } catch (err) {
        console.error('Error fetching auctions:', err);
      }
    };

    fetchAuctions();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FeaturedAuctions auctions={auctions} />
              <HowItWorks />
            </>
          } />
          <Route path="/auctions" element={<AuctionList />} />
          <Route path="/auction/:id" element={<AuctionDetail />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
        <div className='mt-auto'>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App