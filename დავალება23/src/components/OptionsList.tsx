import type { OptionsListProps } from "../types";
import Checkbox from "./Checkbox";

export default function OptionsList({ options, onToggle }: OptionsListProps) {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox
        label="Include Uppercase Letters"
        checked={options.uppercase}
        onChange={() => onToggle("uppercase")}
      />
      <Checkbox
        label="Include Lowercase Letters"
        checked={options.lowercase}
        onChange={() => onToggle("lowercase")}
      />
      <Checkbox
        label="Include Numbers"
        checked={options.numbers}
        onChange={() => onToggle("numbers")}
      />
      <Checkbox
        label="Include Symbols"
        checked={options.symbols}
        onChange={() => onToggle("symbols")}
      />
    </div>
  );
}
