
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Filter } from "lucide-react";

const videoList = [
  {
    id: "1",
    title: "Implementing AI Customer Support: Step-by-Step Guide",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=225",
    duration: "18:45",
    description: "Learn how to implement an AI chatbot for customer support in this detailed tutorial.",
    category: "Customer Service",
    industry: "Retail"
  },
  {
    id: "2",
    title: "AI for Financial Reporting: Case Study",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=225",
    duration: "24:10",
    description: "See how a financial firm implemented AI to automate reporting and gain insights.",
    category: "Analytics & Insights",
    industry: "Finance"
  },
  {
    id: "3",
    title: "Content Generation with AI: Marketing Applications",
    thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&h=225",
    duration: "15:22",
    description: "Discover how AI can enhance your marketing content creation process.",
    category: "Content Creation",
    industry: "Education"
  },
  {
    id: "4",
    title: "Healthcare Triage: AI Implementation Workshop",
    thumbnail: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=400&h=225",
    duration: "47:18",
    description: "Full workshop on implementing AI patient triage systems in healthcare settings.",
    category: "Process Optimization",
    industry: "Healthcare"
  }
];

const Videos = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-grow">
        <section className="bg-brand-lightblue/30 py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Video Tutorials</h1>
                <p className="text-gray-600 max-w-2xl">
                  Watch practical tutorials and case studies on implementing AI solutions for various business needs.
                  Learn from step-by-step guides and real-world examples.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter Videos
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoList.map(video => (
                <div key={video.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="bg-white rounded-full p-3">
                        <Play className="h-8 w-8 text-primary" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4">{video.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{video.category}</Badge>
                      <Badge variant="secondary">{video.industry}</Badge>
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

export default Videos;
