import { useMutation, UseMutationResult } from "@tanstack/react-query";

type Statistics = {
  selectedLocation: string;
  selectedBedrooms: Array<string>;
  selectedDwellingType: Array<string>;
  selectedStartDate: string;
  selectedEndDate: string;
};

type MarketRentResult = {
  area: string;
  dwell: string;
  nBedrms: string;
  nLodged: number;
  nClosed: number;
  nCurr: number | null;
  mean: number | null;
  lq: number | null;
  med: number | null;
  uq: number | null;
  sd: number | null;
  brr: number | null;
  lmean: number | null;
  lsd: number | null;
  slq: number | null;
  suq: number | null;
};

type MarketRentResponse = {
  data?: {
    items?: MarketRentResult[];
  };
};

const useCallTenancyRegion = (): UseMutationResult<
  MarketRentResult[],
  unknown,
  Statistics
> => {
  return useMutation<MarketRentResult[], unknown, Statistics>({
    mutationFn: async (data: Statistics) => {
      const response = await fetch(
        "/api/v1/statistics/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ statistic: data }),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseBody = (await response.json()) as MarketRentResponse;
      return responseBody.data?.items ?? [];
    },
  });
};

export default useCallTenancyRegion;
