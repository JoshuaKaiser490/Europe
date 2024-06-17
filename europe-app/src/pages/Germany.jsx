import React, { useContext } from 'react';
import { EuropeContext } from '../context/EuropeContext';
import CountryCard from '../components/CountryCard';

const Germany = () => {
  const { countries } = useContext(EuropeContext);
  const country = countries.find(c => c.name === 'Germany');

  return (
    <div>
      <CountryCard country={country} />
    </div>
  );
};

export default Germany;
