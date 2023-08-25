import React, { useState } from 'react';

import { useCountryData } from '../api/query';






interface Country {
  updated:number;
  country: string;
  countryInfo: {
    _id:number;
    iso2:string;
    iso3:string;
    lat: number;
    long: number;
    flag:string;
  };
  cases:number;
  todayCases:number;
  deaths:number;
  todayDeaths:number;
  recovered:number;
  todayRecovered:number;
  active:number;
  critical:number;
  casesPerOneMillion:number;
  deathsPerOneMillion:number;
  tests:number;
  testsPerOneMillion:number;
  population:number;
  continent:string;
  oneCasePerPeople:number;
  oneDeathPerPeople:number;
  oneTestPerPeople:number;
  activePerOneMillion:number;
  recoveredPerOneMillion:number;
  criticalPerOneMillion:number;

 
  // ... other properties
}

const Map: React.FC = () => {
  const { data: countryData } = useCountryData();

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryName = event.target.value;
    const selectedCountry = countryData.find(country => country.country === selectedCountryName);
    setSelectedCountry(selectedCountry || null);
  };

  return (
    <div >
      <select onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countryData.map((country: Country) => (
          <option key={country.country} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <h2>{selectedCountry.country}</h2>
          <p>Active Cases: {selectedCountry.active}</p>
          <p>Recovered Cases: {selectedCountry.recovered}</p>
          <p>Deaths: {selectedCountry.deaths}</p>
          {/* Display other country information here */}
        </div>
      )}
    </div>
  );
};

export default Map;