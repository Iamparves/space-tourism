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
      transition={{
        duration: 0.5,
      }}
      className="grid min-h-dvh grid-cols-1 bg-[url(/destination/background-destination-mobile.jpg)] bg-cover bg-center bg-no-repeat md:bg-[url(/destination/background-destination-tablet.jpg)] lg:bg-[url(/destination/background-destination-desktop.jpg)]"
    >
      <NavbarSpace />
      <div className="mx-auto w-full max-w-[1110px] px-6 pb-14 pt-2.5 md:pb-16 md:pt-10 xl:px-0 xl:pt-8">
        <h5 className="heading-5 flex justify-center gap-4 md:justify-start">
          <span className="font-bold opacity-25">01</span>
          Pick your destination
        </h5>
        <div className="mt-8 flex flex-col items-center gap-6 md:mt-[60px] md:gap-14 lg:flex-row lg:items-end lg:justify-between xl:pl-16">
          <div className="">
            <img
              className="size-[170px] md:size-[300px] lg:size-[445px]"
              src={`/destination/${currentDestination.images.webp}`}
              alt={currentDestination.name}
            />
          </div>
          <div>
            <div className="flex justify-center gap-6 md:gap-9 lg:justify-start">
              {destinations.map((destination, index) => (
                <button
                  key={destination.name}
                  className={twMerge(
                    "relative py-2 font-barlow-condensed font-normal uppercase tracking-[2.36px] text-secondary duration-300 hover:text-white",
                    currentDestination.name === destination.name
                      ? "text-white"
                      : "",
                  )}
                  onClick={() => changeDestination(index)}
                >
                  {destination.name}
                  {currentDestination.name === destination.name && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-white"
                      layoutId="destinationUnderline"
                    ></motion.span>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-5 max-w-[330px] text-center md:max-w-[580px] lg:max-w-[450px] lg:text-left">
              <h2 className="heading-2">{currentDestination.name}</h2>
              <p className="body-text leading-[1.75] text-secondary">
                {currentDestination.description}
              </p>
              <hr className="my-8 border-[#383B4B] md:mt-12 lg:mt-14" />
              <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-24 lg:justify-start lg:gap-20">
                <div>
                  <p className="subheading-2 text-secondary">Avg. Distance</p>
                  <h4 className="heading-4">{currentDestination.distance}</h4>
                </div>
                <div>
                  <p className="subheading-2 text-secondary">
                    Est. Travel Time
                  </p>
                  <h4 className="heading-4">{currentDestination.travel}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Destination;
