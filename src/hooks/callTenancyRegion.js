import { useQuery } from '@tanstack/react-query'

export const callTenancyRegion = () =>
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