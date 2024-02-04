import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavbarSpace from "../components/NavbarSpace";

const Home = () => {
  const MotionLink = motion(Link);

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
        ease: "easeIn",
      }}
      className="grid min-h-dvh grid-cols-1 bg-[url(/home/background-home-mobile.jpg)] bg-cover bg-center bg-no-repeat md:bg-[url(/home/background-home-tablet.jpg)] lg:bg-[url(/home/background-home-desktop.jpg)]"
    >
      <NavbarSpace />
      <div className="mx-auto flex h-full w-full max-w-[1110px] flex-col items-center justify-between gap-20 px-6 py-8 md:gap-32 md:pb-20 md:pt-24 lg:flex-row xl:px-0">
        <motion.div className="max-w-sm text-center md:max-w-md lg:text-left">
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="heading-5 text-secondary"
          >
            So, you want to travel to
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="heading-1"
          >
            Space
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="body-text leading-[1.75] text-secondary"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </motion.p>
        </motion.div>
        <div>
          <MotionLink
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.5,
              transition: {
                duration: 0.5,
              },
            }}
            transition={{ duration: 0.1, delay: 0.5 }}
            to="/destination"
            className="flex size-[150px] items-center justify-center rounded-full bg-white text-xl uppercase tracking-[1.25px] text-primary duration-300 md:size-[242px] md:text-[32px] md:tracking-[2px] lg:size-[274px] lg:hover:shadow-[0_0_0_40px_#ffffff19] xl:hover:shadow-[0_0_0_88px_#ffffff19]"
          >
            Explore
          </MotionLink>
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
