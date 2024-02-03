import { Link } from "react-router-dom";
import NavbarSpace from "../components/NavbarSpace";

const Home = () => {
  return (
    <main className="grid min-h-dvh grid-cols-1 bg-[url(/home/background-home-mobile.jpg)] bg-cover bg-center bg-no-repeat md:bg-[url(/home/background-home-tablet.jpg)] lg:bg-[url(/home/background-home-desktop.jpg)]">
      <NavbarSpace />
      <div className="mx-auto flex h-full w-full max-w-[1110px] items-end justify-between pb-28">
        <div className="max-w-md">
          <h5 className="heading-5 text-secondary">
            So, you want to travel to
          </h5>
          <h1 className="heading-1">Space</h1>
          <p className="body-text leading-[1.75] text-secondary">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="">
          <Link
            to="/destination"
            className="heading-4 flex size-[274px] items-center justify-center rounded-full bg-white text-primary duration-300 hover:shadow-[0_0_0_88px_#ffffff19]"
          >
            Explore
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
