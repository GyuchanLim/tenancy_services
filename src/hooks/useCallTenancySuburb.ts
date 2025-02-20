import { useQuery } from '@tanstack/react-query';

interface TenancySuburbData {
  suburb: string;
}

const useCallTenancySuburb = (suburb: string) =>
  useQuery<TenancySuburbData, Error>({
    queryKey: ['TenancySuburb', suburb],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/v1/region/${suburb}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });

export default useCallTenancySuburb;
