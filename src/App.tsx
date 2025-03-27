// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuctionList from './components/AuctionList';
import AuctionDetail from './components/AuctionDetail';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuctionList />} />
                <Route path="/auction/:id" element={<AuctionDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
