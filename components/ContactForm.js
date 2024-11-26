"use client";

import { useState } from "react";
import Button from "../components/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      // setStatus("Error sending message.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="name"
            placeholder=""
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            name="email"
            placeholder=""
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            name="message"
            placeholder=""
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label>Message</label>
        </div>

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
