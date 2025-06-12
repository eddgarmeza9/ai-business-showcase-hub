
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = ({ 
  searchQuery, 
  setSearchQuery 
}: { 
  searchQuery: string, 
  setSearchQuery: (query: string) => void 
}) => {
  return (
    <header className="sticky top-0 z-50 w-full glass-effect backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/3e826c8c-227b-4fc0-b85c-466b2d73f1a5.png" 
                alt="Verdtek Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Verdtek AI Hub
              </span>
              <span className="text-xs text-gray-500 font-medium">Solutions Gallery</span>
            </div>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/downloads" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Downloads
            </Link>
            <Link to="/videos" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Videos
            </Link>
            <Link to="/frameworks" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Frameworks
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search AI solutions..."
              className="w-64 pl-10 glass-effect border-gray-200/50 focus:border-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="verdtek-gradient text-white shadow-md hover:shadow-lg transition-all duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
