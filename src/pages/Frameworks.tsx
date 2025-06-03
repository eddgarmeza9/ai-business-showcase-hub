
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Filter, 
  ExternalLink,
  ChevronRight
} from "lucide-react";

const frameworks = [
  {
    id: "1",
    title: "AI Customer Support Implementation Framework",
    description: "Complete framework for selecting, implementing, and measuring AI chatbots for customer support.",
    steps: ["Needs Assessment", "Tool Selection", "Data Integration", "Training", "Deployment", "Measurement"],
    category: "Customer Service",
    industry: "Retail"
  },
  {
    id: "2",
    title: "Predictive Maintenance Framework",
    description: "End-to-end framework for implementing predictive maintenance AI in manufacturing settings.",
    steps: ["Sensor Selection", "Data Collection", "Model Development", "Integration", "Alert System", "Continuous Learning"],
    category: "Process Optimization",
    industry: "Manufacturing"
  },
  {
    id: "3",
    title: "AI Content Generation Governance Framework",
    description: "Framework for implementing and governing AI content generation in enterprises.",
    steps: ["Use Case Definition", "Tool Selection", "Editorial Guidelines", "Quality Control", "Approval Workflow", "Performance Analysis"],
    category: "Content Creation",
    industry: "Education"
  }
];

const Frameworks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-grow">
        <section className="bg-brand-lavender/30 py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">AI Implementation Frameworks</h1>
                <p className="text-gray-600 max-w-2xl">
                  Access structured frameworks to guide your AI implementation projects. 
                  These frameworks provide step-by-step processes to ensure successful AI adoption.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter Frameworks
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8">
              {frameworks.map(framework => (
                <div key={framework.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-xl mb-3">{framework.title}</h3>
                  <p className="text-gray-600 mb-5">{framework.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-sm mb-3 text-gray-500">IMPLEMENTATION PROCESS</h4>
                    <div className="flex flex-wrap gap-2">
                      {framework.steps.map((step, index) => (
                        <div key={index} className="flex items-center">
                          <div className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                            {index + 1}
                          </div>
                          <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                          <span className="text-sm font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    <Badge variant="secondary">{framework.category}</Badge>
                    <Badge variant="secondary">{framework.industry}</Badge>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Framework
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Frameworks;
