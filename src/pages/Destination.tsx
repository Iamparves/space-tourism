import NavbarSpace from "../components/NavbarSpace";
import { getDestinations } from "../utils/getData";

const Destination = () => {
  const destinations = getDestinations();

  return (
    <main className="grid min-h-dvh grid-cols-1 bg-[url(/destination/background-destination-mobile.jpg)] bg-cover bg-center bg-no-repeat md:bg-[url(/destination/background-destination-tablet.jpg)] lg:bg-[url(/destination/background-destination-desktop.jpg)]">
      <NavbarSpace />
    </main>
  );
};

export default Destination;
