import React, { useState } from 'react';
import useCallTenancyRegion from '@hooks/useCallTenancyRegion';

const MarketRentSearchForm: React.FC = () => {
  const [location, setLocation] = useState('auckland');
  const [bedrooms, setBedrooms] = useState(1);

  const mutation = useCallTenancyRegion();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ location, bedrooms });
  };

  return (
    <div>
      <h2>Search Market Rent Data</h2>
      <form onSubmit={submit}>
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

        {mutation.isPending && <p className="text-xl">Loading...</p>}
        {mutation.isError && <p className="text-xl">Error: </p>}
        {mutation.isSuccess && (
          <div>
            <p className="text-xl">Data Loaded</p>
            <pre>{JSON.stringify(mutation.data, null, 2)}</pre>
          </div>
        )}
      </form>
    </div>
  );
};

export default MarketRentSearchForm;
