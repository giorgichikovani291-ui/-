# Weatherly

React + TypeScript + Vite + Tailwind CSS 4.

## გაშვება

```bash
npm install
npm run dev
```

## აწყობა (build)

```bash
npm run build
```

## სტრუქტურა

- `src/App.tsx` — root, ინახავს არჩეულ ქალაქს
- `src/Components/` — CurrentPanel (მარცხენა პანელი), Sidebar, SearchBar, WeatherDetails, ForecastList/Item, Icons, Logo
- `src/data/weatherData.json` — მოწოდებული weather მონაცემები (London / Tbilisi / Paris)
- `src/types.ts` — ყველა ინტერფეისი
- `src/assets/fonts` — Manrope (self-hosted woff2, @font-face)

ძებნის ველში ქალაქის სახელის აკრეფა აჩვენებს დამთხვევებს (London, Tbilisi, Paris) — არჩევისას მთელი პანელი გადაერთვება იმ ქალაქის მონაცემებზე.

ფონები აწყობილია თითოეული `weatherConditions`-ის `color`-ის მიხედვით (გრადიენტი), ნაცვლად რეალური ფოტოებისა — საავტორო უფლებების გამო არ ჩავსვი მზა სურათები. თუ გინდა ზუსტად ფოტოებით, დაამატე `src/assets/images/` საქაღალდე შესაბამისი jpg ფაილებით და `CurrentPanel.tsx`-ში `backgroundImage`-ს დაუმატე `url(...)`.
