import { useQuery } from '@tanstack/react-query'

export const callTenancyRequestRent = () =>
    useQuery({
        queryKey: ['RequestRent'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/api/v1/rent');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    })