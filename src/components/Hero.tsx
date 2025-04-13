
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-brand-lavender py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              AI Tools for Everyday
              <br />
              <span className="text-primary">Business Challenges</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-md">
              Discover practical AI solutions that streamline processes, automate tasks, and 
              solve real business problems across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg">Explore Use Cases</Button>
              <Button variant="outline" size="lg">Watch Demo</Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-lightblue rounded-full z-0" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-mint rounded-full z-0" />
              <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
                <div className="text-3xl font-bold mb-4">AI Workflow</div>
                <div className="text-gray-600 mb-6">Like a recipe. Always follows the same steps.</div>
                
                <div className="flex items-center justify-between mb-2">
                  {[
                    { icon: "⚡", label: "Trigger" },
                    { icon: "📧", label: "Email" },
                    { icon: "🧠", label: "AI Process" },
                    { icon: "✓", label: "Complete" }
                  ].map((step, index, arr) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-brand-peach flex items-center justify-center text-xl mb-2">
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
