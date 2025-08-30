import { Container } from "@components/layout";
import React from "react";
import { useAtom } from "jotai";
import useCallTenancyRegion from "@hooks/useCallTenancyRegion";
import {
  locationAtom,
  bedroomAtom,
  dwellingTypeAtom,
  startDateAtom,
  endDateAtom,
} from "@components/tenancy/searchParamsAtoms";
import { MultiSelectField, InputField, DateField } from "./FormFields";

function MarketRent() {
  const [selectedLocation, setSelectedLocation] = useAtom(locationAtom);
  const [selectedBedrooms, setSelectedBedrooms] =
    useAtom<string[]>(bedroomAtom);
  const [selectedDwellingType, setSelectedDwellingType] =
    useAtom<string[]>(dwellingTypeAtom);
  const [selectedStartDate, setSelectedStartDate] = useAtom(startDateAtom);
  const [selectedEndDate, setSelectedEndDate] = useAtom(endDateAtom);

  const bedroomOptions = ["1", "2", "3", "4", "5+"];
  const dwellingTypeOptions = [
    "Apartment",
    "BoardingHouse",
    "Flat",
    "House",
    "Room",
  ];

  const handleOnChange = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const mutation = useCallTenancyRegion();

  const submit = (e: React.FormEvent) => {
    console.log(selectedLocation, selectedBedrooms, selectedDwellingType);
    e.preventDefault();
    mutation.mutate({
      selectedLocation,
      selectedBedrooms,
      selectedDwellingType,
      selectedStartDate,
      selectedEndDate,
    });
  };

  return (
    <Container>
      <h1>Market Rent</h1>
      <div id="search-form">
        <h2>Search Market Rent Data</h2>
        <form onSubmit={submit}>
          <InputField
            label="Location:"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          />
          <MultiSelectField
            label="Number of bedrooms:"
            selectOptions={bedroomOptions}
            selectedOptions={selectedBedrooms}
            onChange={(e) => handleOnChange(setSelectedBedrooms, e)}
          />
          <MultiSelectField
            label="Dwelling Type:"
            selectOptions={dwellingTypeOptions}
            selectedOptions={selectedDwellingType}
            onChange={(e) => handleOnChange(setSelectedDwellingType, e)}
          />
          <DateField
            label="Start date"
            value={selectedStartDate}
            onChange={(e) => setSelectedStartDate(e.target.value)}
          />
          <DateField
            label="End date"
            value={selectedEndDate}
            onChange={(e) => setSelectedEndDate(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {mutation.isPending && <p className="text-xl">Loading...</p>}
        {mutation.isError && <p className="text-xl">Error: </p>}
        {mutation.isSuccess && (
          <div>
            <p className="text-xl">Data Loaded</p>
            <pre>{JSON.stringify(mutation.data, null, 2)}</pre>
          </div>
        )}
      </div>
    </Container>
  );
}

export default MarketRent;
