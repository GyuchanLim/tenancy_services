import { useMutation, UseMutationResult } from '@tanstack/react-query';

type Statistics = {
  location: string;
  bedrooms: string;
  dwellingType: string;
};

const useCallTenancyRegion = (): UseMutationResult<Statistics[], unknown, Statistics> => {
  return useMutation<Statistics[], unknown, Statistics>({
    mutationFn: async (data: Statistics) => {
      const response = await fetch('http://localhost:3000/api/v1/statistic/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  });
};

export default useCallTenancyRegion;
