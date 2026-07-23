export interface PasswordOptions {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export interface PasswordDisplayProps {
  password: string;
  copied: boolean;
  onCopy: () => void;
}

export interface LengthSliderProps {
  length: number;
  onChange: (length: number) => void;
}

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export interface OptionsListProps {
  options: PasswordOptions;
  onToggle: (key: keyof PasswordOptions) => void;
}

export interface StrengthMeterProps {
  level: number;
}

export interface GenerateButtonProps {
  onClick: () => void;
}
