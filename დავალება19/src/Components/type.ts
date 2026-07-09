export interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  cartQuantity: number;
}

export interface MenuProps {
  setMenuOpen: (open: boolean) => void;
}

export interface CartProps {
  cartQuantity: number;
  productName: string;
  productPrice: number;
  thumbnail: string;
  onDelete: () => void;
  setCartOpen: (open: boolean) => void;
}

export interface ImagesProps {
  activeImage: number;
  setActiveImage: (index: number) => void;
  setLightboxOpen: (open: boolean) => void;
}

export interface LightboxProps {
  activeImage: number;
  setActiveImage: (index: number) => void;
  setLightboxOpen: (open: boolean) => void;
}

export interface InfoAndPricingProps {
  productName: string;
  productPrice: number;
  quantity: number;
  setQuantity: (q: number) => void;
  onAddToCart: () => void;
}

export interface CartIconProps {
  color?: string;
}
