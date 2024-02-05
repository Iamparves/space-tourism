import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Destination } from "../utils/types";

interface DestinationContentProps {
  destination: Destination;
  children?: ReactNode;
}

const DestinationContent: React.FC<DestinationContentProps> = ({
  destination,
  children,
}) => {
  return (
    <div className="mt-8 flex flex-col items-center gap-6 md:mt-[60px] md:gap-14 lg:flex-row lg:items-end lg:justify-between xl:pl-16">
      <div>
        {destination?.images && (
          <motion.img
            initial={{ opacity: 0, x: 50, rotate: "10deg" }}
            animate={{ opacity: 1, x: 0, rotate: "0deg" }}
            exit={{ opacity: 0, x: -50, rotate: "-10deg" }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="size-[170px] md:size-[300px] lg:size-[445px]"
            src={`/destination/${destination.images.webp}`}
            alt={destination.name}
            key={destination.name}
          />
        )}
      </div>
      <div>
        {children} {/* DestinationTabs Components */}
        <div className="mt-5 max-w-[330px] text-center md:max-w-[580px] lg:max-w-[450px] lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="heading-2"
            key={`destinationTitle-${destination.name}`}
          >
            {destination.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="body-text leading-[1.75] text-secondary"
            key={`destinationDescription-${destination.name}`}
          >
            {destination.description}
          </motion.p>

          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: "100%" }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="my-8 border-[#383B4B] md:mt-12 lg:mt-14"
            key={`line-${destination.name}`}
          />

          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-24 lg:justify-start lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              key={`destinationStats-${destination.name}`}
            >
              <p className="subheading-2 text-secondary">Avg. Distance</p>
              <h4 className="subheading-1">{destination.distance}</h4>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, delay: 1.1 }}
              key={`destinationTravel-${destination.name}`}
            >
              <p className="subheading-2 text-secondary">Est. Travel Time</p>
              <h4 className="subheading-1">{destination.travel}</h4>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationContent;
