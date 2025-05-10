import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://spectraspark-backend.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent successfully! ✅");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(data.error || "Failed to send message. ❌ Try again.");
      }
    } catch (err) {
      console.error("Error submitting form: ", err);
      toast.error("Something went wrong. ❌ Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page" data-aos="fade-up">
      <h2>Let's Connect</h2>
      <p>Tell us about your project or query. We're always ready to help!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          rows="6"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? (
            <>
              <div className="button-spinner"></div> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
