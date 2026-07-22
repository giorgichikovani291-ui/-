import type { OriginalPageProps } from "../types";
import OriginalNav from "./OriginalNav";
import OriginalHero from "./OriginalHero";
import Boletim from "./Boletim";
import OriginalFeaturedGames from "./OriginalFeaturedGames";
import OriginalFooter from "./OriginalFooter";

export default function OriginalPage({ onGetLauncher }: OriginalPageProps) {
  return (
    <div>
      <OriginalNav onGetLauncher={onGetLauncher} />
      <OriginalHero />
      <Boletim />
      <OriginalFeaturedGames />
      <OriginalFooter />
    </div>
  );
}
