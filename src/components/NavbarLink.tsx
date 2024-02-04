import { NavLink } from "react-router-dom";

interface NavbarLinkProps {
  index: number;
  name: string;
  path: string;
  closeMenu?: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  index,
  name,
  path,
  closeMenu,
}) => {
  return (
    <NavLink
      className="nav-text group relative flex items-center gap-3 overflow-hidden uppercase text-white md:py-10"
      to={path}
      onClick={closeMenu}
    >
      <span className="font-bold md:hidden lg:block">0{index}</span>
      <span>{name}</span>
      <span className="absolute bottom-0 left-0 hidden h-[3px] w-full -translate-x-full bg-white opacity-50 duration-300 group-hover:translate-x-0 group-[&.active]:translate-x-0 group-[&.active]:opacity-100 md:block"></span>
    </NavLink>
  );
};

export default NavbarLink;
