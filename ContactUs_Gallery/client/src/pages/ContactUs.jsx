import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () =>
    form.name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && form.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setError("Please fill all fields correctly.");
      return;
    }
    try {
      await axios.post("http://localhost:5000/contact", form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setError("");
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <motion.h2 className="text-3xl font-bold mb-4">Contact Us</motion.h2>
      {submitted ? (
        <p className="text-green-600">Thanks for reaching out!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" />
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="w-full p-2 border rounded h-32" />
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
      )}
      <iframe className="mt-6 w-full h-64" src="https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default ContactUs;
