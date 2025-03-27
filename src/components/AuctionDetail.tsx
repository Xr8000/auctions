// src/components/AuctionDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Ware {
    id: number;
    status: string;
    user_created: string;
    date_created: string;
    user_updated: string | null;
    date_updated: string | null;
    Name: string;
    Startpreis: number;
    Beschreibung: string;
    Themen: string[];
    Auktion: number;
    Bild: string | null;
}

const AuctionDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [wares, setWares] = useState<Ware[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchWares = async () => {
        setLoading(true);
        try {
            // Filter: Hole Waren, deren "Auktion" Feld gleich der übergebenen id ist
            const response = await fetch(`http://sunken-relics.de:8055/items/Waren?filter[Auktion][_eq]=${id}`);
            const data = await response.json();
            if (data && data.data) {
                setWares(data.data);
            } else {
                setError('Keine Waren für diese Auktion gefunden.');
            }
        } catch (err) {
            console.error('Fehler beim Abrufen der Waren:', err);
            setError('Fehler beim Abrufen der Waren.');
        }
        setLoading(false);
    };

    useEffect(() => {
        // Initialen Abruf durchführen
        fetchWares();
        // Polling: Alle 10 Sekunden neu laden
        const interval = setInterval(() => {
            fetchWares();
        }, 10000);
        return () => clearInterval(interval);
    }, [id]);

    if (loading && wares.length === 0) return <div>Lädt Waren...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={{ margin: '2rem' }}>
            <h1>Waren für Auktion {id}</h1>
            <Link to="/">← Zurück zur Auktionliste</Link>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {wares.length > 0 ? (
                    wares.map((ware) => (
                        <li key={ware.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                            <h2>{ware.Name} (Startpreis: {ware.Startpreis})</h2>
                            {ware.Bild ? (
                                <img src={ware.Bild} alt={ware.Name} style={{ maxWidth: '200px' }} />
                            ) : (
                                <p>Kein Bild verfügbar</p>
                            )}
                            <p>{ware.Beschreibung}</p>
                            <p>Status: {ware.status}</p>
                            <p>Themen: {ware.Themen.join(', ')}</p>
                        </li>
                    ))
                ) : (
                    <li>Keine Waren gefunden.</li>
                )}
            </ul>
        </div>
    );
};

export default AuctionDetail;
