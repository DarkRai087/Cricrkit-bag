const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          This project is made by <span className="font-semibold text-white">Parth Pandey</span>, 15 Sep batch student, for React Final Project.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2 transition-colors duration-300"
          >
            Twitter
          </a>
        </div>
        <p className="text-xs mt-4 text-gray-500">
          © {new Date().getFullYear()} CricKit-Bag. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;