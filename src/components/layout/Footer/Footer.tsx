import { Box } from "@chakra-ui/react";
import Container from "../Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container as="footer">
      <Box className="border-t border-gray-200 py-6">
        <Box className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Box>
            <p className="font-serif text-lg font-semibold text-gray-900">
              NZ Govt APIs
            </p>
            <p className="mt-1 font-mono text-sm leading-6 text-gray-600">
              Market rent search powered by official tenancy data.
            </p>
          </Box>

          <Box className="font-mono text-sm leading-6 text-gray-600 sm:text-right">
            <p>&copy; {currentYear}</p>
            <p>
              Sourced from{" "}
              <a
                className="font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600"
                href="https://portal.api.business.govt.nz/"
                rel="noreferrer"
                target="_blank"
              >
                MBIE
              </a>
            </p>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
