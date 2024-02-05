import { motion } from "framer-motion";
import { useState } from "react";
import { getTechnologies } from "../utils/getData";
import TechnologyTabs from "./TechnologyTabs";

const TechnologyContent = () => {
  const technologies = getTechnologies();
  const [technologyIndex, setTechnologyIndex] = useState(0);
  const technology = technologies[technologyIndex];

  return (
    technologies[technologyIndex]?.name && (
      <div className="mt-8 flex flex-col-reverse gap-[34px] pb-10 md:mt-[60px] md:gap-14 md:pb-14 lg:mt-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-center gap-[26px] px-6 md:gap-[44px] lg:flex-row lg:px-0 lg:pl-10 xl:gap-20 xl:pl-0">
          <TechnologyTabs
            technologyIndex={technologyIndex}
            changeTechnology={(index: number) => setTechnologyIndex(index)}
            totalTechnologies={technologies.length}
          />
          <div className="w-full max-w-[325px] text-center md:max-w-[440px] lg:max-w-none lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="subheading-3 mb-1 text-secondary md:mb-2"
              key={`terminology-${technologyIndex}`}
            >
              The Terminology...
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="heading-3 mb-3 leading-tight md:mb-2"
              key={technology.name}
            >
              {technology.name}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="body-text text-secondary lg:max-w-[445px] lg:leading-[1.7]"
              key={`description-${technologyIndex}`}
            >
              {technology.description}
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          key={`image-${technologyIndex}`}
        >
          <img
            className="w-full lg:hidden"
            src={`/technology/${technology.images.landscape}`}
          />
          <img
            className="hidden w-full lg:block"
            src={`/technology/${technology.images.portrait}`}
          />
        </motion.div>
      </div>
    )
  );
};

export default TechnologyContent;
