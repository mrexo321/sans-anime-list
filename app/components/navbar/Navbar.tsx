import Link from "next/link";
import Container from "../Container";
import NavigationSearchBar from "./partials/NavigationSearchBar";

const Navbar = () => {
  return (
    <div className="w-full bg-indigo-500 z-30">
      <Container>
        <div className="flex md:flex-row flex-col md:items-center justify-between py-2">
          <Link
            className="text-slate-100 font-semibold md:text-2xl text-xl"
            href="/"
          >
            SansAnimeList
          </Link>
          <NavigationSearchBar />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
