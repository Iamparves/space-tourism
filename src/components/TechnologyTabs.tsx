import { twMerge } from "tailwind-merge";

interface TechnologyTabsProps {
  technologyIndex: number;
  changeTechnology: (index: number) => void;
  totalTechnologies: number;
}

const TechnologyTabs: React.FC<TechnologyTabsProps> = ({
  technologyIndex,
  changeTechnology,
  totalTechnologies,
}) => {
  return (
    <div className="flex gap-4 lg:flex-col lg:gap-8">
      {[...Array(totalTechnologies)].map((_, index) => (
        <button
          onClick={() => changeTechnology(index)}
          className={twMerge(
            "size-10 rounded-full border border-white/25 duration-300 hover:border-white md:size-[60px] md:text-2xl lg:size-20 lg:text-[32px]",
            technologyIndex === index
              ? "border-white bg-white text-primary"
              : "bg-primary text-white",
          )}
          key={`tech-tab-${index}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default TechnologyTabs;
