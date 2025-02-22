import React, { useState } from 'react';
import useCallTenancyRegion from '@hooks/useCallTenancyRegion';

const MarketRentSearchForm: React.FC = () => {
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState(0);
  const mutation = useCallTenancyRegion();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!location) {
      alert('Location is required');
      return;
    }
    mutation.mutate({ location, bedrooms: bedrooms || 1 }); // Default to 1 bedroom if not specified
  };

  return (
    <div>
      <h2>Search Market Rent Data</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bedrooms">Number of Bedrooms:</label>
          <input
            type="number"
            id="bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(Number(e.target.value))}
            min="1"
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default MarketRentSearchForm;
