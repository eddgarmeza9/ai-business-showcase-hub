
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">AI Business Hub</h3>
            <p className="text-gray-600 text-sm">
              Showcasing practical AI solutions for everyday business challenges.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/downloads" className="text-sm text-gray-600 hover:text-primary">Downloads</Link></li>
              <li><Link to="/videos" className="text-sm text-gray-600 hover:text-primary">Videos</Link></li>
              <li><Link to="/frameworks" className="text-sm text-gray-600 hover:text-primary">Frameworks</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/use-cases" className="text-sm text-gray-600 hover:text-primary">All Use Cases</Link></li>
              <li><Link to="/industries" className="text-sm text-gray-600 hover:text-primary">Industries</Link></li>
              <li><Link to="/functions" className="text-sm text-gray-600 hover:text-primary">Functions</Link></li>
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-primary">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:info@aibusinesshub.com" className="text-sm text-gray-600 hover:text-primary">info@aibusinesshub.com</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Support</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} AI Business Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
