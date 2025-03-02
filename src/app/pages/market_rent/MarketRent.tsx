import { Container } from '@components/layout'
import React from 'react';
import { useAtom } from 'jotai';
import useCallTenancyRegion from '@hooks/useCallTenancyRegion';
import { locationAtom, bedroomAtom, dwellingTypeAtom } from '@components/tenancy/searchParamsAtoms';

function MarketRent() {
  const [location, setLocation] = useAtom(locationAtom)
  const [bedrooms, setBedrooms] = useAtom<string[]>(bedroomAtom)
  const [dwellingType, setDwellingType] = useAtom<string[]>(dwellingTypeAtom)

  const mutation = useCallTenancyRegion();

  const submit = (e: React.FormEvent) => {
    console.log(location, bedrooms, dwellingType);
    e.preventDefault();
    mutation.mutate({ location, bedrooms, dwellingType });
  };

  return (
    <Container>
      <h1>Market Rent</h1>
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
          <label>Number of Bedrooms:</label>
          <div>
            {["1", "2", "3", "4", "5+"].map((bedroom) => (
            <label key={bedroom} htmlFor={`bedrooms${bedroom}`}>
              <input
              type="checkbox"
              id={`bedrooms${bedroom}`}
              value={bedroom}
              checked={bedrooms.includes(bedroom)}
              onChange={(e) => {
                const value = e.target.value;
                setBedrooms((prev: string[]) =>
                prev.includes(value)
                  ? prev.filter((item: string) => item !== value)
                  : [...prev, value]
                );
              }}
              />
              {bedroom}
            </label>
            ))}
          </div>
            <label>Dwelling Type:</label>
            <div>
            {["Apartment", "BoardingHouse", "Flat", "House", "Room"].map((type) => (
              <label key={type} htmlFor={`dwellingType${type}`}>
              <input
                type="checkbox"
                id={`dwellingType${type}`}
                value={type}
                checked={dwellingType.includes(type)}
                onChange={(e) => {
                  const value = e.target.value;
                  setDwellingType((prev) =>
                  prev.includes(value)
                  ? prev.filter((item) => item !== value)
                  : [...prev, value]
                );
                }}
              />
              {type}
              </label>
            ))}
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
    </Container>
  )
}

export default MarketRent
