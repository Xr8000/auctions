// src/components/AuctionList.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Auction {
    id: number;
    status: string;
    Datum: string;
    Themen: string;
    Auktionsleiter: string;
}

const AuctionList: React.FC = () => {
    const [auctions, setAuctions] = useState<Auction[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAuctions = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://sunken-relics.de:8055/items/Auktionen');
            const data = await response.json();
            if (data && data.data) {
                setAuctions(data.data);
            } else {
                setError('Keine Auktionen gefunden.');
            }
        } catch (err) {
            console.error('Fehler beim Abrufen der Auktionen:', err);
            setError('Fehler beim Abrufen der Auktionen.');
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchAuctions();
    }, []);

    if (loading) return <div>Lädt Auktionen...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={{ margin: '2rem' }}>
            <h1>Auktionen</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {auctions.map((auction) => (
                    <li key={auction.id} style={{ marginBottom: '1rem' }}>
                        <Link to={`/auction/${auction.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2>Auktion {auction.id}</h2>
                            <p>Status: {auction.status}</p>
                            <p>Datum: {auction.Datum}</p>
                            <p>Themen: {auction.Themen}</p>
                            <p>Auktionsleiter: {auction.Auktionsleiter}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AuctionList;
