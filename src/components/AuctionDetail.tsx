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
    Themen: {Themen_id:{id: number, Name:string}}[];
    Auktion: number;
    Bild: string | null;
}

function extract_theme(themes:{Themen_id:{id: number, Name:string}}[]): string {
    return (themes.map(x => x.Themen_id.Name)).join(', ');
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
            const response = await fetch(`http://sunken-relics.de:8055/items/Waren?filter[Auktion][_eq]=${id}&fields=*,Themen.Themen_id.*`);
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
        <div style={{margin: '2rem'}}>
            <h1>Waren für Auktion {id}</h1>
            <Link to="/">← Zurück zur Auktionliste</Link>
            <div className="flex flex-wrap gap-4 mt-4">
                {wares.length > 0 ? (
                    wares.map((ware) => (
                        <div
                            key={ware.id}
                            className="bg-white shadow rounded p-4 w-64 h-80 flex flex-col"
                        >
                            <h2 className="text-lg font-semibold">
                                {ware.Name} (Startpreis: {ware.Startpreis})
                            </h2>
                            {ware.Bild ? (
                                <img
                                    src={'http://sunken-relics.de:8055/assets/' + ware.Bild}
                                    alt={ware.Name}
                                    className="object-cover w-full h-32 my-2"
                                />
                            ) : (
                                <div className="flex items-center justify-center w-full h-32 bg-gray-200 my-2">
                                    <p>Kein Bild verfügbar</p>
                                </div>
                            )}
                            <p className="text-sm flex-grow">{ware.Beschreibung}</p>
                            <p className="text-sm">Status: {ware.status}</p>
                            <p className="text-sm">Themen: {extract_theme(ware.Themen)}</p>
                        </div>
                    ))
                ) : (
                    <p>Keine Waren gefunden.</p>
                )}
            </div>
        </div>
    );
};

export default AuctionDetail;
