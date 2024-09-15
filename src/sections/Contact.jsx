import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_xojgwc9",
        "template_blxm885",
        {
          from_name: form.name,
          to_name: "Pranay",
          to_email: "pranaybhatkar81@gmail.com",
          message: form.message,
        },
        "uoYxTsSvE65IXpMfB"
      );

      alert("Your message has been sent!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col px-4 md:px-8 lg:px-16">
        {/* Hide the image on small and medium screens */}
        <img
          src="/assets/terminal.png"
          alt="terminal-background"
          className="hidden lg:block absolute inset-0 min-h-screen object-cover"
        />

        {/* Form container with responsive borders and backdrop blur */}
        <div className="contact-container max-w-lg w-full bg-opacity-70 p-6 sm:p-8 rounded-lg z-10 
        sm:border-2 md:border-4 lg:border-0 xl:border-0 border-indigo-500 
        backdrop-blur-sm lg:backdrop-blur-none xl:backdrop-blur-none">
          <h3 className="headtext text-white text-2xl sm:text-3xl">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3 text-justify">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label text-white">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="John Doe"
                disabled={loading}
              />
            </label>
            <label className="space-y-3">
              <span className="field-label text-white">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="johndoe@gmail.com"
                disabled={loading}
              />
            </label>
            <label className="space-y-3">
              <span className="field-label text-white">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Hi, I am interested in ..."
                disabled={loading}
              />
            </label>

            <button
              className="field-btn w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 flex items-center justify-center"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="ml-2 h-5"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
