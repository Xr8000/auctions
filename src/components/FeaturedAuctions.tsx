import React from 'react';
import { Link } from 'react-router-dom';

interface Auction {
  id: number;
  status: string;
  Datum: string;
  Themen: {Themen_id:{id: number, Name:string}}[];
  Auktionsleiter: string;
}

function extract_theme(themes:{Themen_id:{id: number, Name:string}}[]): string {
  return (themes.map(x => x.Themen_id.Name)).join(', ');
}

const FeaturedAuctions: React.FC<{ auctions: Auction[] }> = ({ auctions }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Alle Auktionen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Erfahre mehr über anstehende Auktionen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {auctions.map((auction) => (
            <Link to={`/auction/${auction.id}`} key={auction.id} className="auction-card group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 
                               transition-colors duration-200">
                    Auction #{auction.id}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs 
                                 font-medium bg-primary-100 text-primary-800">
                    {auction.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{extract_theme(auction.Themen)}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{(auction.Datum).replace('T',' ')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuctions;