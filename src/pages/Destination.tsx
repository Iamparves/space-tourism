import { motion } from "framer-motion";
import { useState } from "react";
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
    </motion.main>
  );
};

export default Destination;
