import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-[999] w-full py-6 md:py-0 lg:py-5 xl:py-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:pl-10 md:pr-0 lg:px-14">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="Space Tourism"
            className="size-10 md:size-12"
          />
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Navbar;
