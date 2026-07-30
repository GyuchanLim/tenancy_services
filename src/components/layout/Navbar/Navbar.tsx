import { Box } from "@chakra-ui/react";
import Container from "../Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/market_rent", label: "Market Rent" },
];

const Navbar = () => {
  return (
    <Container as="nav">
      <Box className="flex flex-col gap-4 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="inline-flex w-fit items-center">
          <span className="font-serif text-2xl font-semibold whitespace-nowrap text-gray-900">
            NZ Govt APIs
          </span>
        </a>

        <Box as="ul" className="flex flex-row gap-6 font-mono text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-gray-900"
                aria-current="page"
              >
                {link.label}
              </a>
            </li>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
