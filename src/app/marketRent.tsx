import Container from '@components/layout/container'
import RadioButton from '@components/common/radioButtons'
import CheckBox from '@components/common/checkBoxes'
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
				<RadioButton radioButtonOptions={['Huey', 'Dewey', 'Louie', 'Donald', 'Mickey']} />
				<CheckBox radioButtonOptions={['Huey', 'Dewey', 'Louie', 'Donald', 'Mickey']} />
				{/* Area interested in? */}
				{/* Property type? */}
				{/* Information to know? (optional) */}
				{/* display result */}
		</Container>
	)
}

export default MarketRent
