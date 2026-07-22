import type { RedesignPageProps } from "../types";
import RedesignNav from "./RedesignNav";
import RedesignHero from "./RedesignHero";
import RedesignFeaturedGames from "./RedesignFeaturedGames";
import RedesignNews from "./RedesignNews";
import RedesignPromo from "./RedesignPromo";
import RedesignFooter from "./RedesignFooter";

export default function RedesignPage({ onBackToOriginal }: RedesignPageProps) {
  return (
    <div>
      <RedesignNav onBackToOriginal={onBackToOriginal} />
      <RedesignHero />
      <RedesignFeaturedGames />
      <RedesignNews />
      <RedesignPromo />
      <RedesignFooter onBackToOriginal={onBackToOriginal} />
    </div>
  );
}
