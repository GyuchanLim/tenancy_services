import { Container } from "@components/layout"
import MarketRentSearchForm from "@components/MarketRentSearchForm";

function HomePage() {

	return (
		<Container>
			<div>
				<h1>Introduction</h1>
				<p>
					This service provides users with the ability to customize their search on the market rent data of New Zealand using the public API provided by the Ministry of Business, Innovation, and Employment of New Zealand.
				</p>
			</div>
			<MarketRentSearchForm />
		</Container>
	)
}

export default HomePage
