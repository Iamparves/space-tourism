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
            <p className="subheading-3 mb-1 text-secondary md:mb-2">
              The Terminology...
            </p>
            <h3 className="heading-3 mb-3 leading-tight md:mb-2">
              {technology.name}
            </h3>
            <p className="body-text text-secondary lg:max-w-[445px] lg:leading-[1.7]">
              {technology.description}
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-full lg:hidden"
            src={`/technology/${technology.images.landscape}`}
          />
          <img
            className="hidden lg:block"
            src={`/technology/${technology.images.portrait}`}
          />
        </div>
      </div>
    )
  );
};

export default TechnologyContent;
