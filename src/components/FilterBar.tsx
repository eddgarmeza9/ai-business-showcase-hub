
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
    <div className="py-8 bg-gray-50/50">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowFunctionality(!showFunctionality)}
              className="flex gap-2 items-center glass-effect border-gray-200/50 hover:border-blue-300 hover:bg-blue-50/50"
            >
              Filter by Function
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showFunctionality ? 'rotate-180' : ''}`} />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowIndustry(!showIndustry)}
              className="flex gap-2 items-center glass-effect border-gray-200/50 hover:border-blue-300 hover:bg-blue-50/50"
            >
              Filter by Industry
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showIndustry ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          
          <div className="flex gap-1 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-1">
            <Button 
              variant={activeView === 'grid' ? 'default' : 'ghost'} 
              size="sm" 
              onClick={() => setActiveView('grid')}
              className={`rounded-lg ${activeView === 'grid' ? 'verdtek-gradient text-white shadow-md' : 'hover:bg-gray-100'}`}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button 
              variant={activeView === 'list' ? 'default' : 'ghost'} 
              size="sm" 
              onClick={() => setActiveView('list')}
              className={`rounded-lg ${activeView === 'list' ? 'verdtek-gradient text-white shadow-md' : 'hover:bg-gray-100'}`}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {showFunctionality && (
          <div className="flex flex-wrap gap-3 mb-6 animate-fade-in">
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
          <div className="flex flex-wrap gap-3 animate-fade-in">
            {industries.map(industry => {
              const Icon = industry.icon;
              return (
                <button 
                  key={industry.id} 
                  className={`filter-pill flex items-center gap-2 ${activeIndustry === industry.id ? 'active' : ''}`}
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
