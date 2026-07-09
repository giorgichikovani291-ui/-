import type { CartIconProps } from "./type";

export function MenuIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
      <rect width="18" height="2" fill="#1D2026" />
      <rect y="6" width="18" height="2" fill="#1D2026" />
      <rect y="12" width="18" height="2" fill="#1D2026" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <line x1="1" y1="1" x2="15" y2="15" stroke="#1D2026" strokeWidth="2" />
      <line x1="15" y1="1" x2="1" y2="15" stroke="#1D2026" strokeWidth="2" />
    </svg>
  );
}

export function CartIcon({ color = "#69707D" }: CartIconProps) {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
      <rect
        x="2"
        y="4"
        width="16"
        height="9"
        rx="2"
        stroke={color}
        strokeWidth="1.6"
      />
      <line x1="2" y1="4" x2="0" y2="1" stroke={color} strokeWidth="1.6" />
      <circle cx="7" cy="16" r="1.5" fill={color} />
      <circle cx="15" cy="16" r="1.5" fill={color} />
    </svg>
  );
}

export function PrevIcon() {
  return (
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
      <polyline
        points="9,1 1,8 9,15"
        stroke="#1D2026"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NextIcon() {
  return (
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
      <polyline
        points="1,1 9,8 1,15"
        stroke="#1D2026"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DeleteIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
      <line x1="1" y1="4" x2="13" y2="4" stroke="#C3CAD9" strokeWidth="1.3" />
      <rect
        x="2"
        y="4"
        width="10"
        height="10"
        rx="1"
        stroke="#C3CAD9"
        strokeWidth="1.3"
      />
      <rect
        x="5"
        y="1"
        width="4"
        height="3"
        stroke="#C3CAD9"
        strokeWidth="1.3"
      />
    </svg>
  );
}
