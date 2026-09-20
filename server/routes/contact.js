import { Router } from "express";
import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";

const router = Router();
const DATA_FILE = new URL("../data/submissions.json", import.meta.url);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function readSubmissions() {
  if (!existsSync(DATA_FILE)) return [];
  const raw = await readFile(DATA_FILE, "utf-8");
  return raw ? JSON.parse(raw) : [];
}

router.post("/", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return next({ status: 400, message: "name, email, and message are required" });
    }

    if (name.length > 100 || email.length > 200 || message.length > 2000) {
      return next({ status: 400, message: "one or more fields is too long" });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return next({ status: 400, message: "that doesn't look like a valid email" });
    }

    const submissions = await readSubmissions();
    submissions.push({
      name,
      email,
      message,
      receivedAt: new Date().toISOString(),
    });

    await writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));

    res.status(201).json({ ok: true });
  } catch (err) {
    next(err);
  }
});

export default router;
