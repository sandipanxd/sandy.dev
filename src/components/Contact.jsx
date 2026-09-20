import { useState } from "react";

const EMAIL = "sandipanbiswas053@gmail.com";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4001/api";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong");
      }

      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  return (
    <section>
      <h2>Contact</h2>

      {status === "sent" ? (
        <p className="contact-success">Thanks, I'll get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {status === "error" && <p className="form-error">{error}</p>}
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="contact-submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send"}
          </button>
        </form>
      )}

      <div className="links">
        <a href={`mailto:${EMAIL}`}>Email</a>
        <a href="https://github.com/sandipanxd" target="_blank" rel="noopener">
          GitHub
        </a>
      </div>
    </section>
  );
}
