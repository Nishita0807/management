import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface Country {
  id: number;
  name: string;
  lat: number;
  long: number;
  active: number;
  recovered: number;
  deaths: number;
}

interface MapProps {
  countries: Country[];
}

const Map: React.FC<MapProps> = ({ countries }) => {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countries.map((country) => (
        <Marker
          key={country.id}
          position={[country.lat, country.long]}
        >
          <Popup>
            <div>
              <h2>{country.name}</h2>
              <p>Active Cases: {country.active}</p>
              <p>Recovered Cases: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
