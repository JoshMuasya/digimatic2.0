"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

interface ContactSectionProps {
  title?: string;
  subtext?: string;
  primaryColor?: string;
  accentColor?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Ready to Innovate?",
  subtext = "Send us a message to start your next project.",
  primaryColor = "#6AA4D9",
  accentColor = "#683695",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const bannerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call)
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
    setTimeout(() => setIsSubmitted(false), 3000); // Reset success message after 3s
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="w-full py-16"
      style={{ background: "linear-gradient(90deg, #683695, #6AA4D9)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={bannerVariants}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={bannerVariants}
          className="text-[rgba(163,191,250,0.9)] text-lg mb-8"
        >
          {subtext}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="max-w-lg mx-auto bg-[rgba(104,54,149,0.1)] backdrop-blur-md border border-[rgba(106,164,217,0.3)] rounded-lg p-6"
        >
          {isSubmitted ? (
            <p className="text-white text-lg">Thank you! We’ll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 bg-transparent border border-[rgba(163,191,250,0.5)] rounded-md text-white placeholder-[rgba(163,191,250,0.7)] focus:outline-none focus:border-[#6AA4D9]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 bg-transparent border border-[rgba(163,191,250,0.5)] rounded-md text-white placeholder-[rgba(163,191,250,0.7)] focus:outline-none focus:border-[#6AA4D9]"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-transparent border border-[rgba(163,191,250,0.5)] rounded-md text-white placeholder-[rgba(163,191,250,0.7)] focus:outline-none focus:border-[#6AA4D9]"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${primaryColor}` }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3 text-lg font-semibold text-white rounded-full shadow-lg transition-all"
                style={{ backgroundColor: accentColor, border: `1px solid ${primaryColor}` }}
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;