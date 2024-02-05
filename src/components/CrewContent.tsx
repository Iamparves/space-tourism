import { twMerge } from "tailwind-merge";
import { Crew } from "../utils/types";

interface CrewContentProps {
  crew: Crew;
  changeCrew: (index: number) => void;
  totalCrew: number;
}

const CrewContent: React.FC<CrewContentProps> = ({
  crew,
  changeCrew,
  totalCrew,
}) => {
  return (
    <div className="flex flex-col-reverse items-center">
      <div className=""></div>
      <div className="flex items-center gap-4">
        {[...Array(totalCrew)].map((_, index) => (
          <button
            onClick={() => changeCrew(index)}
            className={twMerge(
              "size-2.5 rounded-full bg-white opacity-20 hover:opacity-50",
            )}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CrewContent;
