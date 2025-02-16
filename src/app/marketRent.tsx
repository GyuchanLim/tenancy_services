import Container from '@components/layout/container'
import { callTenancyRequestRent } from '@hooks/callTenancyRequestRent'

function MarketRent() {
	const { data, error, isLoading } = callTenancyRequestRent()

	return (
		<Container>
				{isLoading && 
					<p className="text-xl">Loading...</p>
				}
				{error && 
					<p className="text-xl">Error: {error.message}</p>
				}
				{data &&
					<p className="text-xl">Data Loaded</p> 
					// <pre>{JSON.stringify(data, null, 2)}</pre>
				}
		</Container>
	)
}

export default MarketRent
