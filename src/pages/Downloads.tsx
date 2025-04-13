
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, FileText, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const downloadFiles = [
  {
    id: "1",
    title: "Customer Support AI Implementation Guide",
    description: "Complete guide to implementing AI chatbots for customer support with integration steps.",
    type: "pdf",
    size: "2.4 MB",
    category: "Customer Service",
    industry: "Retail"
  },
  {
    id: "2",
    title: "Inventory Optimization AI Model Template",
    description: "ML model template for predicting optimal inventory levels based on historical data.",
    type: "zip",
    size: "4.1 MB",
    category: "Process Optimization",
    industry: "Retail"
  },
  {
    id: "3",
    title: "Financial Reporting AI Dashboard",
    description: "Template for AI-powered financial reporting dashboard with anomaly detection.",
    type: "xlsx",
    size: "1.8 MB",
    category: "Analytics & Insights",
    industry: "Finance"
  },
  {
    id: "4",
    title: "Predictive Maintenance Data Schema",
    description: "Database schema and sample data for implementing predictive maintenance AI.",
    type: "sql",
    size: "950 KB",
    category: "Process Optimization",
    industry: "Manufacturing"
  },
  {
    id: "5",
    title: "AI Property Valuation Model",
    description: "Pre-trained model for real estate property valuation based on multiple features.",
    type: "zip",
    size: "5.2 MB",
    category: "Analytics & Insights",
    industry: "Real Estate"
  }
];

const Downloads = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDownloads, setFilteredDownloads] = useState(downloadFiles);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-grow">
        <section className="bg-brand-mint/30 py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Downloads</h1>
                <p className="text-gray-600 max-w-2xl">
                  Access downloadable resources to help implement AI solutions for your business needs. 
                  Templates, guides, and sample code to accelerate your AI journey.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter Resources
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <div className="grid gap-6">
              {downloadFiles.map(file => (
                <div key={file.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="text-primary h-5 w-5" />
                        <h3 className="font-semibold text-lg">{file.title}</h3>
                        <Badge variant="outline" className="uppercase text-xs">
                          {file.type}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{file.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{file.category}</Badge>
                        <Badge variant="secondary">{file.industry}</Badge>
                        <span className="text-xs text-gray-500 flex items-center">{file.size}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
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

export default Downloads;
