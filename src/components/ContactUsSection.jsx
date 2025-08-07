import { useState, useRef } from "react";
// This line is changed to import from a CDN to resolve the build error
import emailjs from "@emailjs/browser";

export default function ContactUsSection() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    comments: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Replace with your actual credentials from your EmailJS account
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("success");
          // Optionally, clear the form
          setForm({
            name: "",
            email: "",
            phone: "",
            company: "",
            role: "",
            comments: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-[#121212] text-white py-24 px-6 overflow-hidden font-['Helvetica']"
    >
      {/* Rotating dotted circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] border border-dotted border-white rounded-full animate-spin-slow opacity-70" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] border border-dotted border-white rounded-full animate-spin-reverse-slower opacity-70" />

      {/* Contact Form */}
      <div className="relative z-10 max-w-3xl mx-auto bg-gradient-to-b from-[#000000] to-[#8e4ab53a] p-8 rounded-lg border border-white border-opacity-20 shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">
          Join the future of freight with FR8Relay.
        </h3>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-white py-2 outline-none placeholder-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-white py-2 outline-none placeholder-white"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-white py-2 outline-none placeholder-white"
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name (optional)"
            value={form.company}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white py-2 outline-none placeholder-white"
          />

          {/* Radio Buttons */}
          <div>
            <label className="block mb-2">Select an option</label>
            {[
              "I'm a truck driver",
              "I'm a carrier",
              "I'm a broker",
              "Other",
            ].map((option) => (
              <div key={option} className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  name="role"
                  value={option}
                  checked={form.role === option}
                  onChange={handleChange}
                  required
                  className="accent-white"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>

          <textarea
            name="comments"
            placeholder="Comments (Optional)"
            value={form.comments}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white py-2 outline-none placeholder-white"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full mt-6 bg-white text-black py-2 rounded hover:bg-gray-200 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Sent Successfully!"
              : status === "error"
              ? "Submission Failed"
              : "Submit"}
          </button>
          {status === "error" && (
            <p className="text-red-500 text-sm mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
