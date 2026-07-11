import type { BillProps } from "../types";

export default function Bill({ bill, setBill }: BillProps) {
  return (
    <div className="input-group">
      <label htmlFor="bill">Bill</label>
      <div className="input-wrapper">
        <span className="icon">$</span>
        <input
          type="number"
          id="bill"
          placeholder="0"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
    </div>
  );
}
