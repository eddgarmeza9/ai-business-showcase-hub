
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FilterBar from "@/components/FilterBar";
import UseCaseGrid from "@/components/UseCaseGrid";
import { useCases } from "@/data/useCases";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');
  const [activeFunction, setActiveFunction] = useState("all");
  const [activeIndustry, setActiveIndustry] = useState("all");
  const [filteredUseCases, setFilteredUseCases] = useState(useCases);

  useEffect(() => {
    const filtered = useCases.filter(useCase => {
      // Search query filter
      const matchesSearch = searchQuery === "" || 
        useCase.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        useCase.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Function filter
      const matchesFunction = activeFunction === "all" || 
        useCase.function.toLowerCase().includes(activeFunction.toLowerCase());
      
      // Industry filter
      const matchesIndustry = activeIndustry === "all" || 
        useCase.industry.toLowerCase() === activeIndustry.toLowerCase();
      
      return matchesSearch && matchesFunction && matchesIndustry;
    });
    
    setFilteredUseCases(filtered);
  }, [searchQuery, activeFunction, activeIndustry]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Hero />
      
      <main className="flex-grow">
        <FilterBar 
          activeView={activeView}
          setActiveView={setActiveView}
          activeFunction={activeFunction}
          setActiveFunction={setActiveFunction}
          activeIndustry={activeIndustry}
          setActiveIndustry={setActiveIndustry}
        />
        
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">AI Business Use Cases</h2>
            <UseCaseGrid useCases={filteredUseCases} view={activeView} />
          </div>
        </section>
        
        <section className="bg-brand-lightblue/20 py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-bold mb-4">Why Choose AI Business Hub</h2>
              <p className="text-gray-600">Discover practical AI implementations that deliver real business value with ready-to-use frameworks and examples.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Practical Solutions</h3>
                <p className="text-gray-600">Real-world AI implementations with step-by-step guides and resources.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18V18.01" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13.5V14C12 14.2652 12.1054 14.5196 12.2929 14.7071C12.4804 14.8946 12.7348 15 13 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V13.5C15 13.2348 14.8946 12.9804 14.7071 12.7929C14.5196 12.6054 14.2652 12.5 14 12.5H13C12.7348 12.5 12.4804 12.3946 12.2929 12.2071C12.1054 12.0196 12 11.7652 12 11.5V11C12 10.7348 12.1054 10.4804 12.2929 10.2929C12.4804 10.1054 12.7348 10 13 10H14C14.2652 10 14.5196 10.1054 14.7071 10.2929C14.8946 10.4804 15 10.7348 15 11V11.01" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Industry-Specific</h3>
                <p className="text-gray-600">Tailored AI use cases organized by industry and business function.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Complete Resources</h3>
                <p className="text-gray-600">Access downloads, videos, and frameworks to accelerate implementation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
