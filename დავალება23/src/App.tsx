import { useState } from "react";
import type { PasswordOptions } from "./types";
import PasswordDisplay from "./components/PasswordDisplay";
import LengthSlider from "./components/LengthSlider";
import OptionsList from "./components/OptionsList";
import StrengthMeter from "./components/StrengthMeter";
import GenerateButton from "./components/GenerateButton";

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+[]{}";

export default function App() {
  const [length, setLength] = useState(10);
  const [options, setOptions] = useState<PasswordOptions>({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  function toggleOption(key: keyof PasswordOptions) {
    setOptions({ ...options, [key]: !options[key] });
    setCopied(false);
  }

  function generatePassword() {
    let charset = "";
    if (options.uppercase) charset += UPPERCASE;
    if (options.lowercase) charset += LOWERCASE;
    if (options.numbers) charset += NUMBERS;
    if (options.symbols) charset += SYMBOLS;

    if (charset === "" || length === 0) {
      setPassword("");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      result += charset[Math.floor(Math.random() * charset.length)];
    }

    setPassword(result);
    setCopied(false);
  }

  function copyPassword() {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
  }

  function getStrengthLevel() {
    if (length === 0) return -1;

    const checkedCount = Object.values(options).filter(Boolean).length;

    let score = 0;
    if (length >= 8) score++;
    if (length >= 12) score++;
    if (checkedCount >= 3) score++;
    if (checkedCount === 4) score++;

    return Math.min(score, 3);
  }

  return (
    <div className="min-h-screen bg-bg font-mono flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <h1 className="text-center text-muted mb-6 tracking-widest">Password Generator</h1>

        <PasswordDisplay password={password} copied={copied} onCopy={copyPassword} />

        <div className="bg-panel mt-4 p-6 flex flex-col gap-6">
          <LengthSlider
            length={length}
            onChange={(value) => {
              setLength(value);
              setCopied(false);
            }}
          />

          <OptionsList options={options} onToggle={toggleOption} />

          <StrengthMeter level={getStrengthLevel()} />

          <GenerateButton onClick={generatePassword} />
        </div>
      </div>
    </div>
  );
}
