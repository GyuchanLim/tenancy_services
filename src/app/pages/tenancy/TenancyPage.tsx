import { Container } from '@components/layout'
import useCallTenancySuburb from '@hooks/useCallTenancySuburb'
import MarketRentSearchForm from "@components/MarketRentSearchForm";

function MarketRent() {
	const { data, error, isLoading } = useCallTenancySuburb('auckland')

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
      <h1>Market Rent</h1>
      <MarketRentSearchForm />
		</Container>
	)
}

export default MarketRent
