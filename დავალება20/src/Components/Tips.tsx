import type { TipsProps, TipOption } from "../types";

// წინასწარ განსაზღვრული ტიპის ვარიანტები
const tipOptions: TipOption[] = [
  { label: "5%", value: 5 },
  { label: "10%", value: 10 },
  { label: "15%", value: 15 },
  { label: "25%", value: 25 },
  { label: "50%", value: 50 },
];

export default function Tips({ selectedTip, setSelectedTip }: TipsProps) {
  return (
    <>
      {tipOptions.map((tip) => (
        <button
          key={tip.value}
          type="button"
          className={selectedTip === tip.value ? "tip-btn active" : "tip-btn"}
          onClick={() => setSelectedTip(tip.value)}
        >
          {tip.label}
        </button>
      ))}
    </>
  );
}
