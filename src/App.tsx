import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from './api/queryClient';
import Home from './pages/Home';
import Map from './components/Map';
import ContactManagement from './components/ContactManagement';
import LineGraph from './components/LineGraph';
import Navbar from './components/Navbar'; // Import the Navbar component
import { QueryClient } from 'react-query';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router>
        <Navbar /> {/* Include the Navbar component */}
        <Routes>
          <Route path="/" element={<Home countries={[]} />} /> {/* Display the Home component */}
          <Route path="/charts-and-maps" element={<Map />} />
          <Route path="/contact-management" element={<ContactManagement />} />
          <Route path="/line-graph" element={<LineGraph />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
