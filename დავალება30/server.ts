import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());

interface Item {
  id: number;
  title: string;
}

let items: Item[] = [
  { id: 1, title: "პირველი ჩანაწერი" },
  { id: 2, title: "მეორე ჩანაწერი" },
  { id: 3, title: "მესამე ჩანაწერი" },
];
let nextId = 4;

app.get("/items", (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  res.json({
    page,
    limit,
    total: items.length,
    totalPages: Math.ceil(items.length / limit),
    data: items.slice(start, end),
  });
});

app.get("/items/:id", (req: Request, res: Response) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "ჩანაწერი ვერ მოიძებნა" });
  res.json(item);
});

app.post("/items", (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "title აუცილებელია" });
  const item: Item = { id: nextId++, title };
  items.push(item);
  res.status(201).json(item);
});

app.put("/items/:id", (req: Request, res: Response) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "ჩანაწერი ვერ მოიძებნა" });
  if (req.body.title) item.title = req.body.title;
  res.json(item);
});

app.delete("/items/:id", (req: Request, res: Response) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ error: "ჩანაწერი ვერ მოიძებნა" });
  items.splice(index, 1);
  res.json({ success: true });
});

app.get("/secret", (req: Request, res: Response) => {
  const headers = JSON.stringify(req.headers).toLowerCase();
  if (!headers.includes("admin")) {
    return res.status(403).json({ error: "წვდომა აკრძალულია" });
  }
  res.json({ secret: "ეს არის დამალული ინფორმაცია — მხოლოდ admin-ისთვის" });
});

app.listen(3000, () =>
  console.log("სერვერი გაშვებულია: http://localhost:3000"),
);
