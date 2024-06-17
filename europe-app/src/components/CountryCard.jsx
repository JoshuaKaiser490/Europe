import React from 'react';
import 'flag-icons/css/flag-icons.min.css';

const CountryCard = ({ country }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1em', marginBottom: '1em' }}>
      <h2>{country.name} <span className={`fi fi-${country.flag}`}></span></h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Official Language:</strong> {country.language}</p>
      <img src={country.map} alt={`Map of ${country.name}`} style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block' }} />
      <h3>Culture</h3>
      <p>{country.culture}</p>
      <h3>Major Exports</h3>
      <p>{country.exports}</p>
      <h3>Holidays</h3>
      <p>{country.holidays}</p>
    </div>
  );
};

export default CountryCard;
