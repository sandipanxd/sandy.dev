import { Router } from "express";
import Submission from "../models/Submission.js";
import requireAdmin from "../middleware/requireAdmin.js";
import contactLimiter from "../middleware/contactLimiter.js";

const router = Router();
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", contactLimiter, async (req, res, next) => {
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

    await Submission.create({ name, email, message });

    res.status(201).json({ ok: true });
  } catch (err) {
    next(err);
  }
});

router.get("/", requireAdmin, async (req, res, next) => {
  try {
    const submissions = await Submission.find().sort({ receivedAt: -1 });
    res.json(submissions);
  } catch (err) {
    next(err);
  }
});

export default router;
