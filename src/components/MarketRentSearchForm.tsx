import React from 'react';
import { useAtom } from 'jotai';
import useCallTenancyRegion from '@hooks/useCallTenancyRegion';
import { locationAtom, bedroomAtom, dwellingTypeAtom } from './searchParamsAtoms';

const MarketRentSearchForm: React.FC = () => {
  const [location, setLocation] = useAtom(locationAtom)
  const [bedrooms, setBedrooms] = useAtom(bedroomAtom)
  const [dwellingType, setDwellingType] = useAtom(dwellingTypeAtom)

  const mutation = useCallTenancyRegion();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ location, bedrooms, dwellingType });
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
          <select 
            name="bedrooms"
            id="bedrooms"
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <option value="5+">5+</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
        <div>
          <label htmlFor="dwellingType">Dwelling type:</label>
          <select 
            name="dwellingType"
            id="dwellingType"
            onChange={(e) => setDwellingType(e.target.value)}
          >
            <option value="Apartment">Apartment</option>
            <option value="BoardingHouse">Boarding House</option>
            <option value="Flat">Flat</option>
            <option value="House">House</option>
            <option value="Room">Room</option>
          </select>
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
