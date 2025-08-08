import Categories from "./categories/page";
// make an index.ts file and export this component from it
// import { HeroDetails } from "./components/HeroSection/HeroDetails";
// => import { HeroDetails } from "./components/HeroSection";
import { HeroDetails } from "./components/HeroSection/HeroDetails";
export default function Home() {
  return (
    <>
      <HeroDetails />
      <Categories />
    </>
  );
}
