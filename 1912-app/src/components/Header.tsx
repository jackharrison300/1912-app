import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/assets/logos/gold_black_sm.jpg" 
              alt="1912 Institute Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">1912 Institute</h1>
              <p className="text-sm text-gray-600">Making a bet on Arizona</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-desert-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/our-people" 
              className="text-gray-700 hover:text-desert-600 font-medium transition-colors duration-200"
            >
              Our People
            </Link>
            <Link 
              to="/our-vision" 
              className="text-gray-700 hover:text-desert-600 font-medium transition-colors duration-200"
            >
              Our Vision
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://www.1912wt.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-desert-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-desert-700 transition-colors duration-200"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
