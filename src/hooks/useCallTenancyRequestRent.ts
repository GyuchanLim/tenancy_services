import { useQuery } from '@tanstack/react-query'

const useCallTenancyRequestRent = () =>
  useQuery({
    queryKey: ['RequestRent'],
    queryFn: async () => {
      const response = await fetch('/api/v1/rent');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  })

export default useCallTenancyRequestRent;
