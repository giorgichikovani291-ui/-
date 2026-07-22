export interface GameCardData {
  id: string;
  title: string;
  image: string;
  aspect: string;
}

export interface BoletimCardData {
  id: string;
  title: string;
  date: string;
  image: string;
  aspect: string;
}

export interface GameCardProps {
  game: GameCardData;
  rounded?: string;
}

export interface OriginalPageProps {
  onGetLauncher: () => void;
}

export interface RedesignPageProps {
  onBackToOriginal: () => void;
}

export interface OriginalNavProps {
  onGetLauncher: () => void;
}

export interface RedesignNavProps {
  onBackToOriginal: () => void;
}

export interface RedesignFooterProps {
  onBackToOriginal: () => void;
}
