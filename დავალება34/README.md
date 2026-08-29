# Chiko — Portfolio

პორთფოლიო საიტი აგებულია Next.js-ზე (App Router), TypeScript-სა და Tailwind CSS 4-ზე, მოცემული დიზაინ სისტემისა და მაკეტის მიხედვით (ფერები, Space Grotesk ფონტი, ღილაკები, პროექტების ბადე, საკონტაქტო ფორმა — desktop/tablet/mobile).

## გაშვება ლოკალურად

```bash
npm install
npm run dev
```

გახსენით `http://localhost:3000`.

პროდაქშენ ბილდისთვის:

```bash
npm run build
npm start
```

## სტრუქტურა

```
app/
  layout.tsx      — ფონტი (Space Grotesk) და გლობალური სტილები
  page.tsx        — გვერდის აწყობა სექციებისგან
  globals.css     — Tailwind + დიზაინ სისტემის ფერები/ტიპოგრაფია (@theme)
components/
  Header.tsx      — ლოგო + სოციალური ბმულები
  Hero.tsx        — "Nice to meet you" სექცია + ფოტო
  Skills.tsx      — უნარების ბადე
  Projects.tsx    — პროექტების ბადე (hover-ზე "View project" / "View code")
  Contact.tsx     — საკონტაქტო ფორმა ვალიდაციით (client component)
  Footer.tsx      — ქვედა კოლონტიტული
  icons.tsx       — ყველა SVG აიქონა (გარე ბიბლიოთეკის გარეშე)
types.ts          — საერთო TypeScript ინტერფეისები
```

## რისი მორგება შეგიძლიათ

- **სახელი/ლოგო** — `components/Header.tsx` და `components/Footer.tsx`-ში "chiko"
- **ბიო ტექსტი და უნარები** — `components/Hero.tsx` და `components/Skills.tsx`-ში (`skills` მასივი)
- **ფოტო** — ამჟამად placeholder კვადრატია `Hero.tsx`-ში; შეგიძლიათ ჩაანაცვლოთ საკუთარი ფოტოთი `next/image`-ის გამოყენებით (ფაილი მოათავსეთ `public/`-ში)
- **პროექტები** — `components/Projects.tsx`-ში `projects` მასივი (სათაური, ტეგები, ბმულები, ფერები thumbnail-ისთვის)
- **სოციალური ბმულები** — `Header.tsx`/`Footer.tsx`-ში `socials` მასივის `href`-ები

## Git repository-ში ატვირთვა

```bash
git init
git add .
git commit -m "Initial commit: Next.js portfolio"
git branch -M main
git remote add origin <თქვენი-repo-ის-URL>
git push -u origin main
```

`node_modules/` და `.next/` უკვე გამორიცხულია `.gitignore`-ით.
