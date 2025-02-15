import { callTenancyRequestRent } from '@hooks/callTenancyRequestRent'

function MarketRent() {
	const { data, error, isLoading } = callTenancyRequestRent()

	return (
		<>
				{isLoading && <p>Loading...</p>}
				{error && <p>Error: {error.message}</p>}
				{data && <pre>{JSON.stringify(data, null, 2)}</pre>}
		</>
	)
}

export default MarketRent
