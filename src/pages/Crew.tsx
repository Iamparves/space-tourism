import { motion } from "framer-motion";
import { useState } from "react";
import CrewDots from "../components/CrewDots";
import CrewMember from "../components/CrewMember";
import NavbarSpace from "../components/NavbarSpace";
import { getCrews } from "../utils/getData";

const Crew = () => {
  const crews = getCrews();
  const [crewIndex, setCrewIndex] = useState(0);

  const changeCrew = (index: number) => setCrewIndex(index);

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
      className="grid min-h-dvh grid-cols-1 content-start bg-[url(/crew/background-crew-mobile.jpg)] bg-cover bg-center bg-no-repeat md:content-end md:bg-[url(/crew/background-crew-tablet.jpg)] lg:bg-[url(/crew/background-crew-desktop.jpg)]"
    >
      <NavbarSpace />
      {crews[crewIndex]?.name && (
        <CrewMember crew={crews[crewIndex]}>
          <CrewDots
            crewIndex={crewIndex}
            totalCrew={crews.length}
            changeCrew={changeCrew}
          />
        </CrewMember>
      )}
    </motion.main>
  );
};

export default Crew;
