import { useQuery } from '@tanstack/react-query'

import './App.css'

const callTenancyRequestRent = async () => {
    const response = await fetch(
        `http://localhost:3000/api/v1/rent`,
    )

    return await response.json()
}

function MarketRent() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['testing'],
        queryFn: callTenancyRequestRent,
        enabled: true,
    })

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </>
    )
}

export default MarketRent
