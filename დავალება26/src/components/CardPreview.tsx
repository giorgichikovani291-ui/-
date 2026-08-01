import type { CardPreviewProps } from "../types";

export default function CardPreview({ details }: CardPreviewProps) {
  const displayName = details.cardholderName.trim()
    ? details.cardholderName.toUpperCase()
    : "JANE APPLESEED";

  const displayNumber = details.cardNumber
    ? details.cardNumber
    : "0000 0000 0000 0000";
  const displayMonth = details.expMonth || "00";
  const displayYear = details.expYear || "00";
  const displayCvc = details.cvc || "000";

  return (
    <>
      {/* mobile */}
      <div className="relative h-[200px] w-full lg:hidden">
        <div className="absolute right-6 top-0 h-[113px] w-[180px] rounded-lg bg-[linear-gradient(160deg,#f7f7f7_0%,#d9d9d9_100%)] shadow-lg">
          <div className="mt-5 h-6 w-full bg-[#1c1c1c]" />
          <div className="mt-3 flex flex-col items-end gap-1 pr-4">
            <div className="flex h-4 w-3/5 items-center justify-end rounded bg-[#cfcfcf] pr-2 text-[9px] tracking-[0.2em] text-[#4a4a4a]">
              {displayCvc}
            </div>
          </div>
        </div>
        <div className="absolute left-6 top-[70px] h-[113px] w-[180px] rounded-lg bg-[linear-gradient(135deg,#6a3ff5_0%,#d9469f_50%,#ff9466_100%)] p-4 text-white shadow-lg">
          <div className="flex items-center gap-1.5">
            <span className="h-5 w-5 rounded-full bg-white" />
            <span className="h-3 w-3 rounded-full border border-white" />
          </div>
          <p className="mt-3 truncate text-sm tracking-[0.1em]">
            {displayNumber}
          </p>
          <div className="mt-3 flex items-end justify-between text-[8px] uppercase tracking-widest">
            <span className="truncate pr-2">{displayName}</span>
            <span>
              {displayMonth}/{displayYear}
            </span>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden h-full lg:flex lg:items-center">
        <div className="relative h-[500px] w-[590px]">
          <div className="absolute left-[140px] top-[265px] h-[233px] w-[370px] rounded-2xl bg-[linear-gradient(160deg,#f7f7f7_0%,#d9d9d9_100%)] shadow-xl">
            <div className="mt-9 h-9 w-full bg-[#1c1c1c]" />
            <div className="mt-5 flex flex-col items-end gap-1.5 pr-8">
              <div className="flex h-7 w-3/5 items-center justify-end rounded bg-[#cfcfcf] pr-3 text-sm tracking-[0.2em] text-[#4a4a4a]">
                {displayCvc}
              </div>
              <span className="h-1 w-3/5 rounded bg-[#d8d8d8]" />
              <span className="h-1 w-2/5 rounded bg-[#d8d8d8]" />
            </div>
          </div>
          <div className="absolute left-0 top-0 h-[233px] w-[370px] rounded-2xl bg-[linear-gradient(135deg,#6a3ff5_0%,#d9469f_50%,#ff9466_100%)] p-7 text-white shadow-xl">
            <div className="flex items-center gap-2">
              <span className="h-10 w-10 rounded-full bg-white" />
              <span className="h-6 w-6 rounded-full border-2 border-white" />
            </div>
            <p className="mt-8 truncate text-2xl tracking-[0.12em]">
              {displayNumber}
            </p>
            <div className="mt-5 flex items-end justify-between text-sm uppercase tracking-widest">
              <span className="truncate pr-2">{displayName}</span>
              <span>
                {displayMonth}/{displayYear}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
