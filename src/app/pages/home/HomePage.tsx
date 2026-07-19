import { Box } from "@chakra-ui/react";
import { Container } from "@components/layout";
import FeatureBoxes from "@components/FeatureBoxes";
import { Header } from "@components/Header";

const features = [
  {
    title: "Market rent search",
    description:
      "Filter New Zealand rental data by location, bedroom count, dwelling type, and date range.",
  },
  {
    title: "Official data source",
    description:
      "Uses public tenancy data from New Zealand's Ministry of Business, Innovation and Employment.",
  },
  {
    title: "Focused results",
    description:
      "Search only the tenancy details you need instead of working through raw API responses.",
  },
];

function HomePage() {
  return (
    <Container>
      <Box as="section" className="space-y-10 py-0">
        <Header
          pageName="NZ tenancy data"
          title="Find market rent data faster."
          description="Search New Zealand market rent information using clear filters backed by official MBIE tenancy data."
        />
        <a
          href="/market_rent"
          className="inline-flex rounded-sm bg-gray-900 px-4 py-2 font-mono font-medium text-white hover:bg-gray-700"
        >
          Search market rent
        </a>

        <FeatureBoxes features={features} />
      </Box>
    </Container>
  );
}

export default HomePage;
