import Container from "../Container";

const Navbar = () => {
  return (
    <Container as="nav">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-serif whitespace-nowrap text-gray-400">
            NZ Govt APIs
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-row space-x-8">
            <li>
              <a
                href="/"
                className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-gray-400"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="market_rent"
                className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 text-gray-400"
                aria-current="page"
              >
                Market Rent
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
