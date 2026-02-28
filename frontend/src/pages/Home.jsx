import { BestSeller } from "../components/BestSeller";
import { BottomBanner } from "../components/BottomBanner";
import { Categories } from "../components/Categories";
import { MainBanner } from "../components/MainBanner";
import { NewsLetter } from "../components/NewsLetter";

export const Home = () => {
  return (
    <div>
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottomBanner />
      <NewsLetter />
    </div>
  );
};
