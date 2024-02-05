import { motion } from "framer-motion";
import NavbarSpace from "../components/NavbarSpace";
import TechnologyContent from "../components/TechnologyContent";

const Technology = () => {
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
          delay: 1.2,
          duration: 0.2,
        },
      }}
      transition={{
        duration: 0.5,
      }}
      className="grid min-h-dvh grid-cols-1 bg-[url(/technology/background-technology-mobile.jpg)] bg-cover bg-fixed bg-center bg-no-repeat md:bg-[url(/technology/background-technology-tablet.jpg)] lg:bg-[url(/technology/background-technology-desktop.jpg)]"
    >
      <NavbarSpace />
      <div className="mx-auto w-full max-w-[1275px] md:mt-10 lg:mt-8 xl:translate-x-[82px]">
        <motion.h5
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="heading-5 flex justify-center gap-4 md:justify-start md:pl-10 xl:pl-0"
        >
          <span className="font-bold opacity-25">03</span>
          Space Launch 101
        </motion.h5>
        <TechnologyContent />
      </div>
    </motion.main>
  );
};

export default Technology;
