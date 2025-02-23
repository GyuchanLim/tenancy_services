import React from 'react';
import { useAtom } from 'jotai';
import useCallTenancyRegion from '@hooks/useCallTenancyRegion';
import { locationAtom, bedroomAtom } from './searchParamsAtoms';

const MarketRentSearchForm: React.FC = () => {
  const [location, setLocation] = useAtom(locationAtom)
  const [bedrooms, setBedrooms] = useAtom(bedroomAtom)

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
            type="text"
            id="bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
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
