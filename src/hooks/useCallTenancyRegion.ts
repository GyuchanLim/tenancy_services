import { useMutation } from '@tanstack/react-query';

const useCallTenancyRegion = () => {
  return useMutation({
    mutationFn: async (data: { location: string; bedrooms: number }) => {
      const response = await fetch('/api/tenancy-region', { // # /api/v1/rent/:id/statistics
        method: 'PUT',
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
