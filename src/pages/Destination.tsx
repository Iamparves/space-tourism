import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import DestinationContent from "../components/DestinationContent";
import DestinationTabs from "../components/DestinationTabs";
import NavbarSpace from "../components/NavbarSpace";
import { getDestinations } from "../utils/getData";

const Destination = () => {
  const destinations = getDestinations();
  const [destinationIndex, setDestinationIndex] = useState(0);

  const destinationNames = useMemo(() => {
    return destinations.map((destination) => destination.name);
  }, [destinations]);

  const changeDestination = (index: number) => {
    setDestinationIndex(index);
  };

  return (
    <motion.main
      initial={{
        x: "100%",
      }}
      animate={{
        x: 0,
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: 1.3,
          duration: 0.2,
        },
      }}
      transition={{
        duration: 0.5,
      }}
      layout
      className="grid min-h-dvh grid-cols-1 bg-[url(/destination/background-destination-mobile.jpg)] bg-cover bg-fixed bg-center bg-no-repeat md:bg-[url(/destination/background-destination-tablet.jpg)] lg:bg-[url(/destination/background-destination-desktop.jpg)]"
    >
      <NavbarSpace />
      <div className="mx-auto w-full max-w-[1110px] px-6 pb-14 pt-2.5 md:pb-16 md:pt-10 xl:px-0 xl:pt-8">
        <motion.h5
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="heading-5 flex justify-center gap-4 md:justify-start"
        >
          <span className="font-bold opacity-25">01</span>
          Pick your destination
        </motion.h5>
        {destinations[destinationIndex].name && (
          <DestinationContent destination={destinations[destinationIndex]}>
            <DestinationTabs
              destinationIndex={destinationIndex}
              destinationNames={destinationNames}
              changeDestination={changeDestination}
            />
          </DestinationContent>
        )}
      </div>
    </motion.main>
  );
};

export default Destination;
