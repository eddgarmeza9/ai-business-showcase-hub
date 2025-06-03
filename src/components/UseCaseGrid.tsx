
import UseCaseCard, { UseCaseType } from "./UseCaseCard";

type UseCaseGridProps = {
  useCases: UseCaseType[];
  view: 'grid' | 'list';
};

const UseCaseGrid = ({ useCases, view }: UseCaseGridProps) => {
  if (useCases.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <h3 className="text-xl font-medium text-gray-700 mb-2">No matching use cases</h3>
        <p className="text-gray-500">Try adjusting your filters or search query</p>
      </div>
    );
  }
  
  return (
    <div className={view === 'grid' 
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
      : "flex flex-col gap-6"
    }>
      {useCases.map(useCase => (
        <UseCaseCard key={useCase.id} useCase={useCase} view={view} />
      ))}
    </div>
  );
};

export default UseCaseGrid;
