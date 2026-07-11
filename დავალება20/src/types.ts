// ყველა კომპონენტის props-ის ტიპები ერთ ადგილას

export interface BillProps {
  bill: string;
  setBill: (value: string) => void;
}

export interface TipsProps {
  selectedTip: number;
  setSelectedTip: (value: number) => void;
}

export interface CustomProps {
  customTip: string;
  setCustomTip: (value: string) => void;
  setSelectedTip: (value: number) => void;
}

export interface PeopleProps {
  people: string;
  setPeople: (value: string) => void;
  peopleError: boolean;
}

export interface TipOption {
  label: string;
  value: number;
}
