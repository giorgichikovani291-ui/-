import mercury from "./assets/1.svg";
import mercuryStructure from "./assets/1_1.svg";
import mercuryGeology from "./assets/1_2.svg";

import venus from "./assets/2.svg";
import venusStructure from "./assets/2_1.svg";
import venusGeology from "./assets/2_2.svg";

import earth from "./assets/3.svg";
import earthStructure from "./assets/3_1.svg";
import earthGeology from "./assets/3_2.svg";

import mars from "./assets/4.svg";
import marsStructure from "./assets/4_1.svg";
import marsGeology from "./assets/4_2.svg";

import jupiter from "./assets/5.svg";
import jupiterStructure from "./assets/5_1.svg";
import jupiterGeology from "./assets/5_2.svg";

import saturn from "./assets/6.svg";
import saturnStructure from "./assets/6_1.svg";
import saturnGeology from "./assets/6_2.svg";

import uranus from "./assets/7.svg";
import uranusStructure from "./assets/7_1.svg";
import uranusGeology from "./assets/7_2.svg";

import neptune from "./assets/8.svg";
import neptuneStructure from "./assets/8_1.svg";
import neptuneGeology from "./assets/8_2.svg";

export const planetImages: Record<
  string,
  { planet: string; structure: string; geology: string }
> = {
  Mercury: { planet: mercury, structure: mercuryStructure, geology: mercuryGeology },
  Venus: { planet: venus, structure: venusStructure, geology: venusGeology },
  Earth: { planet: earth, structure: earthStructure, geology: earthGeology },
  Mars: { planet: mars, structure: marsStructure, geology: marsGeology },
  Jupiter: { planet: jupiter, structure: jupiterStructure, geology: jupiterGeology },
  Saturn: { planet: saturn, structure: saturnStructure, geology: saturnGeology },
  Uranus: { planet: uranus, structure: uranusStructure, geology: uranusGeology },
  Neptune: { planet: neptune, structure: neptuneStructure, geology: neptuneGeology },
};
