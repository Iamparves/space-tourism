import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface DestinationTabsProps {
  destinationNames: string[];
  destinationIndex: number;
  changeDestination: (index: number) => void;
}

const DestinationTabs: React.FC<DestinationTabsProps> = ({
  destinationNames,
  destinationIndex,
  changeDestination,
}) => {
  return (
    <div className="flex justify-center gap-6 md:gap-9 lg:justify-start">
      {destinationNames.map((destination, tabIndex) => (
        <motion.button
          key={destination}
          className={twMerge(
            "relative py-2 font-barlow-condensed font-normal uppercase tracking-[2.36px] text-secondary duration-300 hover:text-white",
            destinationIndex === tabIndex ? "text-white" : "",
          )}
          onClick={() => changeDestination(tabIndex)}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{
            duration: 0.3,
            delay: 0.5 + tabIndex * 0.1,
            ease: "easeIn",
          }}
        >
          {destination}
          {destinationIndex === tabIndex && (
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-[3px] bg-white"
              layoutId="destinationUnderline"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
              }}
            ></motion.span>
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default DestinationTabs;
