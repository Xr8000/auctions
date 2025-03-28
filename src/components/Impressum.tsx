import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
        <p className="mb-4">
          Max Mustermann<br />
          Musterstraße 123<br />
          12345 Musterstadt
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
        <p className="mb-2">Telefon: +49 (0) 123 456789</p>
        <p className="mb-2">E-Mail: info@example.com</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Umsatzsteuer-ID</h2>
        <p className="mb-2">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
        <p>DE 123 456 789</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Streitschlichtung</h2>
        <p className="mb-4">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
          <a href="https://ec.europa.eu/consumers/odr" className="text-primary-600 hover:text-primary-700 ml-1">
            https://ec.europa.eu/consumers/odr
          </a>
        </p>
        <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
      </section>
    </div>
  );
};

export default Impressum;