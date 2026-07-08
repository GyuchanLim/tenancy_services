import { Box } from "@chakra-ui/react";
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
} from "@atoms/tenancy/searchParamsAtoms";

const bedroomOptions = ["1", "2", "3", "4", "5+"];
const dwellingTypeOptions = [
  "Apartment",
  "BoardingHouse",
  "Flat",
  "House",
  "Room",
];

const searchGuides = [
  {
    title: "Choose a suburb or area",
    description:
      "Start with the location used by MBIE market rent records, then narrow with bedrooms and dwelling type.",
  },
  {
    title: "Compare a month range",
    description:
      "Use start and end months to focus the result set on the period you need.",
  },
  {
    title: "Check the source data",
    description:
      "Results are requested from public tenancy statistics backed by New Zealand's Ministry of Business, Innovation and Employment.",
  },
];

function MarketRent() {
  const [selectedLocation, setSelectedLocation] = useAtom(locationAtom);
  const [selectedBedrooms, setSelectedBedrooms] =
    useAtom<string[]>(bedroomAtom);
  const [selectedDwellingType, setSelectedDwellingType] =
    useAtom<string[]>(dwellingTypeAtom);
  const [selectedStartDate, setSelectedStartDate] = useAtom(startDateAtom);
  const [selectedEndDate, setSelectedEndDate] = useAtom(endDateAtom);

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
    e.preventDefault();
    mutation.mutate({
      selectedLocation,
      selectedBedrooms,
      selectedDwellingType,
      selectedStartDate,
      selectedEndDate,
    });
  };

  const clearFilters = () => {
    setSelectedLocation("");
    setSelectedBedrooms([]);
    setSelectedDwellingType([]);
    setSelectedStartDate("");
    setSelectedEndDate("");
  };

  const hasResults = mutation.isSuccess && mutation.data.length > 0;
  const resultLabel = `${mutation.data?.length ?? 0} ${
    mutation.data?.length === 1 ? "result" : "results"
  }`;
  const selectedBedroomsLabel =
    selectedBedrooms.length > 0 ? selectedBedrooms.join(", ") : "Any";
  const selectedDwellingTypesLabel =
    selectedDwellingType.length > 0 ? selectedDwellingType.join(", ") : "Any";
  const selectedDateRangeLabel =
    selectedStartDate || selectedEndDate
      ? `${selectedStartDate || "Any"} to ${selectedEndDate || "Any"}`
      : "Any";

  return (
    <Container>
      <Box as="section" className="space-y-10">
        <Box className="max-w-3xl space-y-4">
          <p className="text-sm font-mono font-semibold uppercase tracking-normal text-gray-500">
            Market rent search
          </p>
          <h1 className="text-4xl font-serif font-semibold text-gray-900">
            Search New Zealand market rent information.
          </h1>
          <p className="text-lg font-mono leading-7 text-gray-600">
            Filter location, bedrooms, dwelling type, and month range using
            official MBIE tenancy data.
          </p>
        </Box>

        <Box className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          <Box
            id="search-form"
            className="rounded-sm border border-gray-200 p-5"
          >
            <Box className="flex flex-col gap-3 border-b border-gray-200 pb-4 sm:flex-row sm:items-start sm:justify-between">
              <Box>
                <h2 className="font-serif text-2xl font-semibold text-gray-900">
                  Find market rent data
                </h2>
                <p className="mt-1 font-mono text-sm leading-6 text-gray-600">
                  Enter the filters you need, then run a focused search.
                </p>
              </Box>
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex w-fit rounded-sm border border-gray-200 px-3 py-2 font-mono text-sm font-medium text-gray-600 hover:border-gray-900 hover:text-gray-900"
              >
                Clear filters
              </button>
            </Box>

            <form className="mt-6 space-y-6" onSubmit={submit}>
              <Box className="space-y-2">
                <label
                  htmlFor="market-rent-location"
                  className="block font-mono text-sm font-medium text-gray-900"
                >
                  Location
                </label>
                <input
                  id="market-rent-location"
                  type="text"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  placeholder="e.g. Bayview West"
                  className="w-full rounded-sm border border-gray-200 px-3 py-2 font-mono text-sm text-gray-900 outline-none focus:border-gray-900"
                />
              </Box>

              <Box className="grid gap-6 md:grid-cols-2">
                <Box as="fieldset" className="space-y-3">
                  <legend className="font-mono text-sm font-medium text-gray-900">
                    Bedrooms
                  </legend>
                  <Box className="flex flex-wrap gap-2">
                    {bedroomOptions.map((option) => (
                      <label
                        key={option}
                        className="inline-flex items-center gap-2 rounded-sm border border-gray-200 px-3 py-2 font-mono text-sm text-gray-600 hover:border-gray-900 hover:text-gray-900"
                      >
                        <input
                          type="checkbox"
                          value={option}
                          checked={selectedBedrooms.includes(option)}
                          onChange={(e) =>
                            handleOnChange(setSelectedBedrooms, e)
                          }
                          className="h-4 w-4 accent-gray-900"
                        />
                        {option}
                      </label>
                    ))}
                  </Box>
                </Box>

                <Box as="fieldset" className="space-y-3">
                  <legend className="font-mono text-sm font-medium text-gray-900">
                    Dwelling type
                  </legend>
                  <Box className="flex flex-wrap gap-2">
                    {dwellingTypeOptions.map((option) => (
                      <label
                        key={option}
                        className="inline-flex items-center gap-2 rounded-sm border border-gray-200 px-3 py-2 font-mono text-sm text-gray-600 hover:border-gray-900 hover:text-gray-900"
                      >
                        <input
                          type="checkbox"
                          value={option}
                          checked={selectedDwellingType.includes(option)}
                          onChange={(e) =>
                            handleOnChange(setSelectedDwellingType, e)
                          }
                          className="h-4 w-4 accent-gray-900"
                        />
                        {option}
                      </label>
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box className="grid gap-4 sm:grid-cols-2">
                <Box className="space-y-2">
                  <label
                    htmlFor="market-rent-start-date"
                    className="block font-mono text-sm font-medium text-gray-900"
                  >
                    Start month
                  </label>
                  <input
                    id="market-rent-start-date"
                    type="month"
                    value={selectedStartDate}
                    onChange={(e) => setSelectedStartDate(e.target.value)}
                    className="w-full rounded-sm border border-gray-200 px-3 py-2 font-mono text-sm text-gray-900 outline-none focus:border-gray-900"
                  />
                </Box>

                <Box className="space-y-2">
                  <label
                    htmlFor="market-rent-end-date"
                    className="block font-mono text-sm font-medium text-gray-900"
                  >
                    End month
                  </label>
                  <input
                    id="market-rent-end-date"
                    type="month"
                    value={selectedEndDate}
                    onChange={(e) => setSelectedEndDate(e.target.value)}
                    className="w-full rounded-sm border border-gray-200 px-3 py-2 font-mono text-sm text-gray-900 outline-none focus:border-gray-900"
                  />
                </Box>
              </Box>

              <Box className="flex flex-col gap-3 border-t border-gray-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-sm text-gray-600">
                  Current filters: {selectedBedroomsLabel} bedrooms,{" "}
                  {selectedDwellingTypesLabel}, {selectedDateRangeLabel}.
                </p>
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="inline-flex w-fit rounded-sm bg-gray-900 px-4 py-2 font-mono font-medium text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  {mutation.isPending ? "Searching..." : "Search data"}
                </button>
              </Box>
            </form>
          </Box>

          <Box className="space-y-4">
            <Box className="rounded-sm border border-gray-200 p-5">
              <h2 className="font-serif text-xl font-semibold text-gray-900">
                Search summary
              </h2>
              <dl className="mt-4 space-y-3 font-mono text-sm">
                <Box className="flex items-start justify-between gap-4">
                  <dt className="text-gray-500">Location</dt>
                  <dd className="text-right text-gray-900">
                    {selectedLocation || "Any"}
                  </dd>
                </Box>
                <Box className="flex items-start justify-between gap-4">
                  <dt className="text-gray-500">Bedrooms</dt>
                  <dd className="text-right text-gray-900">
                    {selectedBedroomsLabel}
                  </dd>
                </Box>
                <Box className="flex items-start justify-between gap-4">
                  <dt className="text-gray-500">Dwelling</dt>
                  <dd className="text-right text-gray-900">
                    {selectedDwellingTypesLabel}
                  </dd>
                </Box>
                <Box className="flex items-start justify-between gap-4">
                  <dt className="text-gray-500">Period</dt>
                  <dd className="text-right text-gray-900">
                    {selectedDateRangeLabel}
                  </dd>
                </Box>
              </dl>
            </Box>

            <Box className="rounded-sm border border-gray-200 p-5">
              <h2 className="font-serif text-xl font-semibold text-gray-900">
                Source
              </h2>
              <p className="mt-2 font-mono text-sm leading-6 text-gray-600">
                Market rent statistics are requested from public tenancy data
                provided by MBIE.
              </p>
            </Box>
          </Box>
        </Box>

        <Box as="section" className="space-y-4" aria-live="polite">
          <Box className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <Box>
              <p className="text-sm font-mono font-semibold uppercase tracking-normal text-gray-500">
                Results
              </p>
              <h2 className="font-serif text-2xl font-semibold text-gray-900">
                {mutation.isSuccess ? resultLabel : "Search results"}
              </h2>
            </Box>
            {mutation.isSuccess && (
              <p className="font-mono text-sm text-gray-600">
                Search complete
              </p>
            )}
          </Box>

          {mutation.isIdle && (
            <Box className="rounded-sm border border-gray-200 p-5">
              <p className="font-mono text-sm leading-6 text-gray-600">
                Results will appear here after you run a search.
              </p>
            </Box>
          )}

          {mutation.isPending && (
            <Box className="rounded-sm border border-gray-200 p-5">
              <p className="font-mono text-sm leading-6 text-gray-600">
                Searching MBIE market rent data...
              </p>
            </Box>
          )}

          {mutation.isError && (
            <Box className="rounded-sm border border-gray-200 p-5">
              <p className="font-mono text-sm font-medium text-gray-900">
                Search failed.
              </p>
              <p className="mt-1 font-mono text-sm leading-6 text-gray-600">
                Check the API service and try again.
              </p>
            </Box>
          )}

          {mutation.isSuccess && !hasResults && (
            <Box className="rounded-sm border border-gray-200 p-5">
              <p className="font-mono text-sm leading-6 text-gray-600">
                No records matched these filters.
              </p>
            </Box>
          )}

          {hasResults && (
            <Box className="overflow-hidden rounded-sm border border-gray-200">
              <pre className="max-h-[32rem] overflow-auto p-5 font-mono text-sm leading-6 text-gray-900">
                {JSON.stringify(mutation.data, null, 2)}
              </pre>
            </Box>
          )}
        </Box>

        <Box className="grid gap-4 md:grid-cols-3">
          {searchGuides.map((guide) => (
            <Box
              as="article"
              key={guide.title}
              className="rounded-sm border border-gray-200 p-5"
            >
              <h2 className="font-serif text-lg font-semibold text-gray-900">
                {guide.title}
              </h2>
              <p className="mt-2 font-mono text-sm leading-6 text-gray-600">
                {guide.description}
              </p>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default MarketRent;
