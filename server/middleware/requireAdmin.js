export default function requireAdmin(req, res, next) {
  const token = req.headers["x-admin-token"];

  if (!process.env.ADMIN_TOKEN || token !== process.env.ADMIN_TOKEN) {
    return next({ status: 401, message: "Not authorized" });
  }

  next();
}
