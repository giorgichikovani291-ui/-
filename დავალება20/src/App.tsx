import { useState } from "react";
import Bill from "./Components/Bill";
import Tips from "./Components/Tips";
import Custom from "./Components/Custom";
import People from "./Components/People";
import "./App.css";

export default function App() {
  // ყველა state აქ, App.tsx-ში ვინახავთ
  const [bill, setBill] = useState("");
  const [selectedTip, setSelectedTip] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");

  // სტრინგებს ვარდნიბთ რიცხვებში დათვლისთვის
  const billNumber = Number(bill) || 0;
  const peopleNumber = Number(people) || 0;

  // თუ custom ველშია რაღაც ჩაწერილი, ის აქვს პრიორიტეტი
  const tipPercent = customTip ? Number(customTip) : selectedTip;

  // შეცდომა მაშინ, როცა ადამიანი წერს 0-ს
  const peopleError = people !== "" && peopleNumber === 0;

  let tipAmount = 0;
  let total = 0;

  if (billNumber > 0 && peopleNumber > 0) {
    tipAmount = (billNumber * (tipPercent / 100)) / peopleNumber;
    total = billNumber / peopleNumber + tipAmount;
  }

  function handleReset() {
    setBill("");
    setSelectedTip(0);
    setCustomTip("");
    setPeople("");
  }

  const isResetDisabled = !bill && !selectedTip && !customTip && !people;

  return (
    <div className="app">
      <h1 className="logo">
        SPLI
        <br />
        TTER
      </h1>

      <div className="card">
        {/* მარცხენა თეთრი მხარე - ინფუთები */}
        <div className="card-left">
          <Bill bill={bill} setBill={setBill} />

          <div className="input-group">
            <label>Select Tip %</label>
            <div className="tips-grid">
              <Tips selectedTip={selectedTip} setSelectedTip={setSelectedTip} />
              <Custom
                customTip={customTip}
                setCustomTip={setCustomTip}
                setSelectedTip={setSelectedTip}
              />
            </div>
          </div>

          <People
            people={people}
            setPeople={setPeople}
            peopleError={peopleError}
          />
        </div>

        {/* მარჯვენა მუქი მხარე - შედეგები */}
        <div className="card-right">
          <div className="results">
            <div className="result-row">
              <div className="result-label">
                <p>Tip Amount</p>
                <span>/ person</span>
              </div>
              <p className="result-value">
                <span className="currency">$</span>
                {tipAmount.toFixed(2)}
              </p>
            </div>

            <div className="result-row">
              <div className="result-label">
                <p>Total</p>
                <span>/ person</span>
              </div>
              <p className="result-value">
                <span className="currency">$</span>
                {total.toFixed(2)}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="reset-btn"
            onClick={handleReset}
            disabled={isResetDisabled}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
