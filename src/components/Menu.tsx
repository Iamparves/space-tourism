import { useState } from "react";
import { twMerge } from "tailwind-merge";
import NavbarLink from "./NavbarLink";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Destination", path: "/destination" },
  { name: "Crew", path: "/crew" },
  { name: "Technology", path: "/technology" },
];

const Menu = ({ scrolled }: { scrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="md:hidden">
        <img src="/icon-hamburger.svg" alt="Menu Hamburger Icon" />
      </button>
      <div
        className={twMerge(
          "fixed right-0 top-0 h-full w-full max-w-64 translate-x-full transition-transform duration-300 md:static md:w-auto md:max-w-none md:translate-x-0 [&.active]:translate-x-0",
          isOpen ? "active" : "",
        )}
      >
        <div className="relative flex h-full flex-col gap-8 px-7 py-8 pl-8 md:flex-row md:items-center md:gap-9 md:px-12 md:py-0 lg:gap-12 lg:pl-24 lg:pr-0 xl:pl-[124px] xl:pr-[104px]">
          <div className="flex justify-end pb-8 md:hidden">
            <button onClick={() => setIsOpen(false)}>
              <img src="/icon-close.svg" alt="Menu Close Icon" />
            </button>
          </div>
          {menuItems.map((item, index) => (
            <NavbarLink
              key={`navItem-${index}`}
              index={index}
              name={item.name}
              path={item.path}
              closeMenu={() => setIsOpen(false)}
            />
          ))}
          <div
            className={twMerge(
              "absolute left-0 top-0 z-[-1] h-full w-[100vw] bg-[#ffffff0a] backdrop-blur-[82px] duration-300",
              scrolled && "md:opacity-0",
            )}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Menu;
