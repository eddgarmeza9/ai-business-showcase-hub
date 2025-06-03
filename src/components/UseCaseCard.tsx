
import { 
  Download, 
  Video, 
  FileText,
  ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type UseCaseType = {
  id: string;
  title: string;
  description: string;
  function: string;
  industry: string;
  steps: Array<{
    name: string;
    description: string;
  }>;
  resources: {
    hasDownload: boolean;
    hasVideo: boolean;
    hasFramework: boolean;
  };
  bgColor: string;
};

type UseCaseCardProps = {
  useCase: UseCaseType;
  view: 'grid' | 'list';
};

const UseCaseCard = ({ useCase, view }: UseCaseCardProps) => {
  if (view === 'grid') {
    return (
      <div className={`use-case-card ${useCase.bgColor} h-full flex flex-col justify-between`}>
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold">{useCase.title}</h3>
            <div className="flex gap-1.5">
              {useCase.resources.hasDownload && (
                <Download size={18} className="text-gray-500" />
              )}
              {useCase.resources.hasVideo && (
                <Video size={18} className="text-gray-500" />
              )}
              {useCase.resources.hasFramework && (
                <FileText size={18} className="text-gray-500" />
              )}
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">{useCase.description}</p>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline">{useCase.function}</Badge>
              <Badge variant="outline">{useCase.industry}</Badge>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-sm">Process Steps:</h4>
            <div className="space-y-1">
              {useCase.steps.map((step, idx) => (
                <div key={idx} className="text-sm flex items-start gap-2">
                  <div className="rounded-full bg-primary w-5 h-5 flex items-center justify-center text-white text-xs mt-0.5 flex-shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700">{step.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Button className="w-full mt-4" size="sm">
          View Details
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
  }
  
  // List view
  return (
    <div className={`use-case-card ${useCase.bgColor} flex flex-col md:flex-row gap-6`}>
      <div className="md:w-3/5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{useCase.title}</h3>
          <div className="flex gap-1.5">
            {useCase.resources.hasDownload && (
              <Download size={18} className="text-gray-500" />
            )}
            {useCase.resources.hasVideo && (
              <Video size={18} className="text-gray-500" />
            )}
            {useCase.resources.hasFramework && (
              <FileText size={18} className="text-gray-500" />
            )}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{useCase.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline">{useCase.function}</Badge>
          <Badge variant="outline">{useCase.industry}</Badge>
        </div>
      </div>
      
      <div className="md:w-2/5 flex flex-col">
        <h4 className="font-medium mb-2 text-sm">Process Steps:</h4>
        <div className="space-y-1 mb-4">
          {useCase.steps.map((step, idx) => (
            <div key={idx} className="text-sm flex items-start gap-2">
              <div className="rounded-full bg-primary w-5 h-5 flex items-center justify-center text-white text-xs mt-0.5 flex-shrink-0">
                {idx + 1}
              </div>
              <span className="text-gray-700">{step.name}</span>
            </div>
          ))}
        </div>
        
        <Button className="mt-auto" size="sm">
          View Details
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default UseCaseCard;
