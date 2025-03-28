import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
        <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
        <p className="mb-4">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
          wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
          werden können.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Datenerfassung auf dieser Website</h2>
        <h3 className="text-lg font-medium mb-2">Cookies</h3>
        <p className="mb-4">
          Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. 
          Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Ihre Rechte</h2>
        <p className="mb-4">Sie haben folgende Rechte:</p>
        <ul className="list-disc pl-5 mb-4">
          <li className="mb-2">Recht auf Auskunft</li>
          <li className="mb-2">Recht auf Berichtigung oder Löschung</li>
          <li className="mb-2">Recht auf Einschränkung der Verarbeitung</li>
          <li className="mb-2">Recht auf Widerspruch gegen die Verarbeitung</li>
          <li className="mb-2">Recht auf Datenübertragbarkeit</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Kontakt</h2>
        <p className="mb-4">
          Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, 
          Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
        </p>
        <p>
          E-Mail: datenschutz@example.com<br />
          Telefon: +49 (0) 123 456789
        </p>
      </section>
    </div>
  );
};

export default Datenschutz;