import { useState } from "react";

const EMAIL = "sandipanbiswas053@gmail.com";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const subject = `Portfolio contact from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setForm(initialForm);
  }

  return (
    <section>
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="contact-submit">
          Send
        </button>
      </form>
      <div className="links">
        <a href={`mailto:${EMAIL}`}>Email</a>
        <a href="https://github.com/sandipanxd" target="_blank" rel="noopener">
          GitHub
        </a>
      </div>
    </section>
  );
}
