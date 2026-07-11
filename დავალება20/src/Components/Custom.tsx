import type { CustomProps } from "../types";

export default function Custom({ customTip, setCustomTip, setSelectedTip }: CustomProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomTip(e.target.value);
    // custom ველში რომ ჩაწერს, ღილაკებიდან selected მოხსნას
    setSelectedTip(0);
  }

  return (
    <input
      type="number"
      placeholder="Custom"
      value={customTip}
      onChange={handleChange}
      className="tip-btn custom-input"
    />
  );
}
