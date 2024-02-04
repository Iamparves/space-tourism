import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import NavbarSpace from "../components/NavbarSpace";
import { getDestinations } from "../utils/getData";

const Destination = () => {
  const destinations = getDestinations();

  const [currentDestination, setCurrentDestination] = useState(destinations[0]);

  const changeDestination = (index: number) => {
    setCurrentDestination(destinations[index]);
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
          delay: 1.4,
          duration: 0.2,
        },
      }}
      transition={{
        duration: 0.5,
      }}
      className="grid min-h-dvh grid-cols-1 bg-[url(/destination/background-destination-mobile.jpg)] bg-cover bg-center bg-no-repeat md:bg-[url(/destination/background-destination-tablet.jpg)] lg:bg-[url(/destination/background-destination-desktop.jpg)]"
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
        <div className="mt-8 flex flex-col items-center gap-6 md:mt-[60px] md:gap-14 lg:flex-row lg:items-end lg:justify-between xl:pl-16">
          <div>
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="size-[170px] md:size-[300px] lg:size-[445px]"
              src={`/destination/${currentDestination.images.webp}`}
              alt={currentDestination.name}
              key={currentDestination.name}
            />
          </div>
          <div>
            <div className="flex justify-center gap-6 md:gap-9 lg:justify-start">
              {destinations.map((destination, index) => (
                <motion.button
                  key={destination.name}
                  className={twMerge(
                    "relative py-2 font-barlow-condensed font-normal uppercase tracking-[2.36px] text-secondary duration-300 hover:text-white",
                    currentDestination.name === destination.name
                      ? "text-white"
                      : "",
                  )}
                  onClick={() => changeDestination(index)}
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-100%" }}
                  transition={{
                    duration: 0.3,
                    delay: 0.5 + index * 0.1,
                    ease: "easeIn",
                  }}
                >
                  {destination.name}
                  {currentDestination.name === destination.name && (
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
            <div className="mt-5 max-w-[330px] text-center md:max-w-[580px] lg:max-w-[450px] lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="heading-2"
                key={`destinationTitle-${currentDestination.name}`}
              >
                {currentDestination.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="body-text leading-[1.75] text-secondary"
                key={`destinationDescription-${currentDestination.name}`}
              >
                {currentDestination.description}
              </motion.p>
              <motion.hr
                initial={{ scaleX: 0 }}
                animate={{ scaleX: "100%" }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
                className="my-8 border-[#383B4B] md:mt-12 lg:mt-14"
                key={`line-${currentDestination.name}`}
              />
              <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-24 lg:justify-start lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  key={`destinationStats-${currentDestination.name}`}
                >
                  <p className="subheading-2 text-secondary">Avg. Distance</p>
                  <h4 className="heading-4">{currentDestination.distance}</h4>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                  key={`destinationTravel-${currentDestination.name}`}
                >
                  <p className="subheading-2 text-secondary">
                    Est. Travel Time
                  </p>
                  <h4 className="heading-4">{currentDestination.travel}</h4>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Destination;
