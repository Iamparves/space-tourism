import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Crew } from "../utils/types";

interface CrewMemberProps {
  crew: Crew;
  children?: ReactNode;
}

const CrewMember: React.FC<CrewMemberProps> = ({ crew, children }) => {
  return (
    <div className="mx-auto w-full max-w-[1136px] px-6 md:px-10 lg:mt-10 xl:px-0">
      <motion.h5
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="heading-5 flex justify-center gap-4 md:justify-start"
        key={`crew-${crew.name}`}
      >
        <span className="font-bold opacity-25">01</span>
        Meet Your Crew
      </motion.h5>
      <div className="mx-auto mt-8 flex max-w-[330px] flex-col-reverse gap-8 md:mt-[60px] md:max-w-[460px] md:flex-col md:gap-10 lg:-mt-10 lg:max-w-none lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-col md:gap-10 lg:items-start lg:gap-20 xl:gap-[120px]">
          <div className="text-center lg:text-left">
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="heading-4 mb-1 opacity-50"
              key={`role-${crew.name}`}
            >
              {crew.role}
            </motion.h4>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="heading-3 mb-3"
              key={crew.name}
            >
              {crew.name}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="body-text leading-[1.7] text-secondary lg:max-w-[45ch]"
              key={`bio-${crew.name}`}
            >
              {crew.bio}
            </motion.p>
          </div>
          {children}
        </div>
        <div className="overflow-hidden border-b border-[#3b3b3b]">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            src={`/crew/${crew.images.webp}`}
            alt={crew.name}
            className="mx-auto max-w-[180px] md:max-w-[420px] xl:max-w-[520px]"
            key={`image-${crew.name}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CrewMember;
