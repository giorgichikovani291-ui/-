import type { GameCardData, BoletimCardData } from "./types";

import gtaV from "./assets/images/game-gta5.svg";
import gtaOnline from "./assets/images/game-gta-online.svg";
import rdr2 from "./assets/images/game-rdr2.svg";
import rdrOnline from "./assets/images/game-rdr-online.svg";

import newsGta6Trailer from "./assets/images/news-gta6-trailer.svg";
import newsTrailerCountdown from "./assets/images/news-trailer-countdown.svg";
import newsGtaOnlineUpdate from "./assets/images/news-gta-online-update.svg";
import newsProjectOverthrow from "./assets/images/news-project-overthrow.svg";
import newsRockstarShop from "./assets/images/news-rockstar-shop.svg";
import newsDiamondCasino from "./assets/images/news-diamond-casino.svg";

export const games: GameCardData[] = [
  { id: "1", title: "GTA V", image: gtaV, aspect: "260/316" },
  { id: "2", title: "GTA Online", image: gtaOnline, aspect: "3/4" },
  { id: "3", title: "Red Dead Redemption 2", image: rdr2, aspect: "260/316" },
  { id: "4", title: "Red Dead Online", image: rdrOnline, aspect: "260/316" },
];

export const newsItems: BoletimCardData[] = [
  {
    id: "1",
    title: "Grand Theft Auto VI - Veja o 1º trailer agora",
    date: "5 de dezembro de 2023",
    image: newsGta6Trailer,
    aspect: "860/488",
  },
  {
    id: "2",
    title: "1º trailer terça-feira, 5 de dezembro, 9h ET.",
    date: "30 de novembro de 2023",
    image: newsTrailerCountdown,
    aspect: "260/224",
  },
  {
    id: "3",
    title: "Nova atualização de GTA Online chegando em dezembro",
    date: "28 de novembro de 2023",
    image: newsGtaOnlineUpdate,
    aspect: "260/224",
  },
  {
    id: "4",
    title: "2x GTA$ e RP nas missões do Projeto Subversão",
    date: "21 de novembro de 2023",
    image: newsProjectOverthrow,
    aspect: "16/10",
  },
  {
    id: "5",
    title: "Novos produtos da Rockstar Games já disponíveis",
    date: "20 de novembro de 2023",
    image: newsRockstarShop,
    aspect: "16/10",
  },
  {
    id: "6",
    title: "Futuro com bônus em missões de história do Cassino, no Golpe do Cassino Diamond e mais",
    date: "15 de novembro de 2023",
    image: newsDiamondCasino,
    aspect: "16/10",
  },
];
