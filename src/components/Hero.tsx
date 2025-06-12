
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              AI Solutions Gallery for
              <br />
              <span className="text-primary">Business Innovation</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-md">
              Explore our curated collection of AI implementations that transform 
              business processes and drive innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg">Explore Solutions</Button>
              <Button variant="outline" size="lg">View Demo</Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full z-0" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full z-0" />
              <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
                <div className="text-3xl font-bold mb-4 text-primary">Verdtek AI</div>
                <div className="text-gray-600 mb-6">Intelligent solutions for modern business challenges.</div>
                
                <div className="flex items-center justify-between mb-2">
                  {[
                    { icon: "🔍", label: "Discover" },
                    { icon: "⚡", label: "Implement" },
                    { icon: "🎯", label: "Optimize" },
                    { icon: "📈", label: "Scale" }
                  ].map((step, index, arr) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl mb-2">
                        {step.icon}
                      </div>
                      <span className="text-xs">{step.label}</span>
                      {index < arr.length - 1 && (
                        <div className="absolute h-0.5 bg-gray-300 w-12" style={{
                          left: `calc(${(index + 0.5) * 25}% - 6px)`,
                          width: '12%',
                          top: '50%'
                        }}/>
                      )}
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
