import { Categories } from "../components/Categories";
import { MainBanner } from "../components/MainBanner";

export const Home = () => {
  return (
    <div className="mt-24 sm:mt-28">
      <MainBanner />
      <Categories />
    </div>
  );
};
