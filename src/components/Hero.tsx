
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-verdtek-hero">
      <div className="container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 animate-fade-in">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 w-fit">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">AI Solutions Gallery</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-gray-900">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                Business with AI
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Discover our curated collection of AI implementations that streamline 
              processes, enhance productivity, and drive innovation across every industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="verdtek-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-2xl" />
              
              {/* Main card */}
              <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 max-w-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 verdtek-gradient rounded-2xl flex items-center justify-center shadow-lg">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="white" 
                      className="h-6 w-6" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="m2 17 10 5 10-5"/>
                      <path d="m2 12 10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                      Verdtek AI
                    </div>
                    <div className="text-sm text-gray-500">Solutions Gallery</div>
                  </div>
                </div>
                
                <div className="text-gray-600 mb-8 leading-relaxed">
                  Intelligent solutions for modern business challenges with proven results and seamless integration.
                </div>
                
                {/* Process steps */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🔍", label: "Discover", color: "from-blue-500 to-blue-600" },
                    { icon: "⚡", label: "Implement", color: "from-blue-400 to-teal-500" },
                    { icon: "🎯", label: "Optimize", color: "from-teal-400 to-teal-500" },
                    { icon: "📈", label: "Scale", color: "from-teal-500 to-blue-500" }
                  ].map((step, index) => (
                    <div key={index} className="flex flex-col items-center p-4 rounded-2xl bg-gray-50/50 hover:bg-white/80 transition-all duration-300 verdtek-card-hover">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl mb-2 shadow-md`}>
                        {step.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
