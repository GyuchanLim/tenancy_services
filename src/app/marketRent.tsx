import Container from '@components/layout/container'
// import { callTenancyRequestRent } from '@hooks/callTenancyRequestRent'
// import { callTenancyRegion } from '@hooks/callTenancyRegion'
import { callTenancySuburb } from '@hooks/callTenancySuburb'

function MarketRent() {
	const { data, error, isLoading } = callTenancySuburb('hehe')

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
				{/* Area interested in? */}
				{/* Property type? */}
				{/* Information to know? (optional) */}
				{/* display result */}
		</Container>
	)
}

export default MarketRent
