import { Box } from "@chakra-ui/react";
import { Container } from "@components/layout";

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
    <Container className="py-0 sm:py-0">
      <Box as="section" className="space-y-10 py-0">
        <Box className="max-w-3xl space-y-4">
          <p className="text-sm font-mono font-semibold uppercase tracking-wide text-gray-500">
            NZ tenancy data
          </p>
          <h1 className="text-4xl font-serif font-semibold text-gray-900">
            Find market rent data faster.
          </h1>
          <p className="text-lg font-mono text-gray-600">
            Search New Zealand market rent information using clear filters
            backed by official MBIE tenancy data.
          </p>
          <a
            href="/market_rent"
            className="inline-flex rounded-sm bg-gray-900 px-4 py-2 font-mono font-medium text-white hover:bg-gray-700"
          >
            Search market rent
          </a>
        </Box>

        <Box className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <Box
              as="article"
              key={feature.title}
              className="rounded-sm border border-gray-200 p-5"
            >
              <h2 className="text-lg font-serif font-semibold text-gray-900">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm font-mono leading-6 text-gray-600">
                {feature.description}
              </p>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
