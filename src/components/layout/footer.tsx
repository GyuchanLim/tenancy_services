const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div id="container" className="flex p-10 border rounded-xl justify-between">
        <span id="links" className="font-mono text-xl text-gray-600">
          &copy;2025
        </span>
        <span className="font-mono text-xl text-gray-600">
          Sourced from <a className="text-gray-400" href="https://portal.api.business.govt.nz/">MBIE</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer;
  