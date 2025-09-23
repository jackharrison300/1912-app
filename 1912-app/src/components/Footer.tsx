const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to 1912</h3>
            <p className="text-gray-300 mb-4">
              A source for commentary, current affairs, and informed opinion, 1912 will host everyday citizens, elected officials, academics, and community leaders to write columns on issues of interest.
            </p>
            <a 
              href="https://www.1912wt.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-desert-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-desert-700 transition-colors duration-200"
            >
              Newsletter
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/our-people" className="text-gray-300 hover:text-white transition-colors">Our People</a></li>
              <li><a href="/our-vision" className="text-gray-300 hover:text-white transition-colors">Our Vision</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              1912 is a publication of the Western Tribune, a 501(c)(3) nonprofit news media company.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Western Tribune</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
