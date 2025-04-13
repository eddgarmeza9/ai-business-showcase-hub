
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  LayoutGrid, 
  List, 
  ChevronDown,
  Briefcase,
  ShoppingCart,
  LineChart,
  HeartPulse,
  GraduationCap,
  Factory,
  Building
} from "lucide-react";

type FilterBarProps = {
  activeView: 'grid' | 'list';
  setActiveView: (view: 'grid' | 'list') => void;
  activeFunction: string;
  setActiveFunction: (func: string) => void;
  activeIndustry: string;
  setActiveIndustry: (industry: string) => void;
};

const FilterBar = ({
  activeView,
  setActiveView,
  activeFunction,
  setActiveFunction,
  activeIndustry,
  setActiveIndustry
}: FilterBarProps) => {
  const [showFunctionality, setShowFunctionality] = useState(true);
  const [showIndustry, setShowIndustry] = useState(false);

  const functions = [
    { id: 'all', name: 'All Functions' },
    { id: 'automation', name: 'Automation' },
    { id: 'analytics', name: 'Analytics & Insights' },
    { id: 'customer-service', name: 'Customer Service' },
    { id: 'content-creation', name: 'Content Creation' },
    { id: 'process-optimization', name: 'Process Optimization' }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: Briefcase },
    { id: 'retail', name: 'Retail', icon: ShoppingCart },
    { id: 'finance', name: 'Finance', icon: LineChart },
    { id: 'healthcare', name: 'Healthcare', icon: HeartPulse },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory },
    { id: 'real-estate', name: 'Real Estate', icon: Building }
  ];

  return (
    <div className="py-6 border-b">
      <div className="container">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowFunctionality(!showFunctionality)}
              className="flex gap-2 items-center"
            >
              Filter by Function
              <ChevronDown className={`h-4 w-4 transition-transform ${showFunctionality ? 'rotate-180' : ''}`} />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowIndustry(!showIndustry)}
              className="flex gap-2 items-center"
            >
              Filter by Industry
              <ChevronDown className={`h-4 w-4 transition-transform ${showIndustry ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          
          <div className="flex gap-2 border rounded-md">
            <Button 
              variant={activeView === 'grid' ? 'default' : 'ghost'} 
              size="sm" 
              onClick={() => setActiveView('grid')}
              className="rounded-none"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button 
              variant={activeView === 'list' ? 'default' : 'ghost'} 
              size="sm" 
              onClick={() => setActiveView('list')}
              className="rounded-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {showFunctionality && (
          <div className="flex flex-wrap gap-2 mb-4 animate-fade-in">
            {functions.map(func => (
              <button 
                key={func.id} 
                className={`filter-pill ${activeFunction === func.id ? 'active' : ''}`}
                onClick={() => setActiveFunction(func.id)}
              >
                {func.name}
              </button>
            ))}
          </div>
        )}
        
        {showIndustry && (
          <div className="flex flex-wrap gap-2 animate-fade-in">
            {industries.map(industry => {
              const Icon = industry.icon;
              return (
                <button 
                  key={industry.id} 
                  className={`filter-pill flex items-center gap-1.5 ${activeIndustry === industry.id ? 'active' : ''}`}
                  onClick={() => setActiveIndustry(industry.id)}
                >
                  <Icon className="h-4 w-4" />
                  {industry.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
