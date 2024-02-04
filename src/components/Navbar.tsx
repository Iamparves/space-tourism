import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Menu from "./Menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <header
      className={twMerge(
        "fixed left-0 top-0 z-[999] w-full py-6 duration-300 md:py-0",
        !scrolled && "lg:py-5 xl:py-10",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:pl-10 md:pr-0 lg:px-14">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="Space Tourism"
            className="size-10 md:size-12"
          />
        </Link>
        <Menu scrolled={scrolled} />
      </div>
      <div
        className={twMerge(
          "fixed left-0 top-0 z-[-1] h-[88px] w-screen bg-[#ffffff0a] opacity-0 backdrop-blur-[82px] duration-300 md:h-[101px]",
          scrolled && "opacity-100",
        )}
      />
    </header>
  );
};

export default Navbar;
