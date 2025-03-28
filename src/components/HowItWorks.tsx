import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { icon: "🔍", title: "Suche", description: "Erkunde unsere kuratierte Auswahl einzigartiger Gegenstände, die zur Auktion stehen." },
    { icon: "⌚", title: "Finde Passenden Termin", description: "Finde den idealen Zeitpunkt, um an unserer Auktion live teilzunehmen und dir die Chance auf exklusive Angebote zu sichern." },
    { icon: "🏷️", title: "Biete", description: "Gib deine Gebote ab und messe dich mit anderen Sammlern." },
    { icon: "🎉", title: "Gewinne", description: "Gewinne Auktionen und füge einzigartige Gegenstände zu deiner Sammlung hinzu." }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Wie Funktioniert es</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bleibe mit dieser Website up-to-date und erfahre mehr über anstehende Auktionen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm 
                                      hover:shadow-md transition-shadow duration-200">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;