import { useQuery } from '@tanstack/react-query'

const useCallTenancyRegion = () =>
  useQuery({
    queryKey: ['TenancyRegion'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/api/v1/region');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  })

export default useCallTenancyRegion;
