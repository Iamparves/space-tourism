import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface CrewDotsProps {
  crewIndex: number;
  changeCrew: (index: number) => void;
  totalCrew: number;
}

const CrewDots: React.FC<CrewDotsProps> = ({
  totalCrew,
  changeCrew,
  crewIndex,
}) => {
  return (
    <div className="flex items-center gap-4">
      {[...Array(totalCrew)].map((_, index) => (
        <motion.button
          key={`crew-dot-${index}`}
          onClick={() => changeCrew(index)}
          className={twMerge(
            "size-2.5 rounded-full bg-white opacity-20 duration-300 hover:opacity-50 lg:size-[15px]",
            index === crewIndex && "opacity-100",
          )}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: index === crewIndex ? 1 : 0.5, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
        ></motion.button>
      ))}
    </div>
  );
};

export default CrewDots;
