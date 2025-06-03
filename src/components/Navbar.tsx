
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-1">
              <svg 
                viewBox="0 0 24 24" 
                fill="white" 
                className="h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-6.671-5.575A8 8 0 1 0 16.425 5.328a8.001 8.001 0 0 0-11.096 11.097zm10.392-9.7a5.996 5.996 0 0 1 0 8.486 5.996 5.996 0 0 1-8.486 0 5.996 5.996 0 0 1 0-8.486 5.996 5.996 0 0 1 8.486 0z" />
              </svg>
            </div>
            <span className="font-semibold text-xl">AI Business Hub</span>
          </Link>

          <nav className="flex gap-4">
            <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
            <Link to="/downloads" className="text-sm font-medium hover:text-primary">Downloads</Link>
            <Link to="/videos" className="text-sm font-medium hover:text-primary">Videos</Link>
            <Link to="/frameworks" className="text-sm font-medium hover:text-primary">Frameworks</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search use cases..."
              className="w-64 pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
