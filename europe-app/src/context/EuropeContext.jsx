import React, { createContext, useState } from 'react';
import germanyMap from '../assets/germany-map.png';
import franceMap from '../assets/france-map.png';
import italyMap from '../assets/italy-map.png';
import spainMap from '../assets/spain-map.png';

export const EuropeContext = createContext();

export const EuropeProvider = ({ children }) => {
  const [countries] = useState([
    {
      name: 'Germany',
      capital: 'Berlin',
      population: '83 million',
      language: 'German',
      map: germanyMap,
      flag: 'de',
      culture: 'Germany has a rich cultural heritage, known for its contributions to music, philosophy, and the arts.',
      exports: 'Germany is known for exporting cars, machinery, and chemicals.',
      holidays: 'Notable holidays include Oktoberfest, Unity Day, and Christmas.'
    },
    {
      name: 'France',
      capital: 'Paris',
      population: '67 million',
      language: 'French',
      map: franceMap,
      flag: 'fr',
      culture: 'France is famous for its cuisine, fashion, art, and the iconic Eiffel Tower.',
      exports: 'France exports machinery, aircraft, and wine.',
      holidays: 'Important holidays are Bastille Day, Armistice Day, and Christmas.'
    },
    {
      name: 'Italy',
      capital: 'Rome',
      population: '60 million',
      language: 'Italian',
      map: italyMap,
      flag: 'it',
      culture: 'Italy is renowned for its rich history, art, architecture, and cuisine.',
      exports: 'Italy is known for exporting machinery, vehicles, and fashion products.',
      holidays: 'Key holidays include Republic Day, Christmas, and Easter.'
    },
    {
      name: 'Spain',
      capital: 'Madrid',
      population: '47 million',
      language: 'Spanish',
      map: spainMap,
      flag: 'es',
      culture: 'Spain is famous for its vibrant culture, flamenco music and dance, and delicious cuisine.',
      exports: 'Spain exports machinery, motor vehicles, and agricultural products.',
      holidays: 'Major holidays are National Day, Christmas, and Epiphany.'
    }
  ]);

  return (
    <EuropeContext.Provider value={{ countries }}>
      {children}
    </EuropeContext.Provider>
  );
};
