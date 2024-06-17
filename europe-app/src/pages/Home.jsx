import React, { useContext } from 'react';
import { EuropeContext } from '../context/EuropeContext';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const { countries } = useContext(EuropeContext);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to Europe</h1>
      <p>
        Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere.
        It comprises the westernmost part of Eurasia and is bordered by the Arctic Ocean to the north,
        the Atlantic Ocean to the west, the Mediterranean Sea to the south, and Asia to the east.
      </p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" alt="EU Flag" style={{ width: '300px', margin: '2em 0' }} />
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
};

export default Home;
