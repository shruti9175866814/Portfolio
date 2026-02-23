import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section
      id="Footer"
      className="min-h-screen bg-gradient-to-b from-[#0a0f2c] via-[#0b133a] to-[#020617]
      flex items-center justify-center px-6 md:px-20 text-white"
    >
      <div
        className="w-full max-w-4xl bg-white/5 backdrop-blur-md
        rounded-2xl shadow-xl p-8 md:p-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Left */}
          <div className="space-y-5">
            <p className="opacity-80">
              Feel free to talk to me about anything that sisters you. 
              If you need a helping hand, please don't hesitate to contact me..👋
            </p>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#465697]" size={20} />
              <span>shruti9175866814@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#465697]" size={20} />
              <span>+91 9XXXXXXXXX</span>
            </div>

            <div className="flex gap-5 mt-6">
            <a href="https://www.linkedin.com/in/shruti-jadhav25"
            className="hover:scale-110 transition">
              <FaLinkedin size={28} className="text-blue-500" />
            </a>

            <a href="https://www.instagram.com/jadhav_shruti7770"
            className="hover:scale-110 transition">
              <FaInstagram
                size={28}
                className="text-pink-500 hover:text-pink-400"
                
              />
            </a>

            <a href="https://github.com/shruti9175866814"
            className="hover:scale-110 transition">
              <FaGithub size={28} />
            </a>

          </div>
          <p className="text-left text-xs opacity-60 mt-3">
    Copyright © {new Date().getFullYear()} Shruti Jadhav
  </p>
          </div>

          {/* Right - Form */}
          <form
  className="flex flex-col gap-4 md:w-1/2"
  onSubmit={(e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappMessage =
      `Hello Shruti 👋%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Message: ${message}`;

    window.open(
      "https://wa.me/919175866814?text=" + whatsappMessage,
      "_blank"
    );
  }}
>
          <h2>Say Hi To Me</h2>
            <input
  type="text"
  name="name"
  placeholder="Your Name"
  className="bg-white/10 rounded-lg px-4 py-2 outline-none"
  required
/>
            <input
  type="email"
  name="email"
  placeholder="Your Email"
  className="bg-white/10 rounded-lg px-4 py-2 outline-none"
  required
/>
            <textarea
  name="message"
  placeholder="Your Message"
  rows="4"
  className="bg-white/10 rounded-lg px-4 py-2 outline-none"
  required
/>

            <button
              type="submit"
              className="mt-2 bg-[#465697] py-2 rounded-3xl
              font-semibold hover:opacity-90 hover:scale-105
              transition duration-300"
            >
              Send Message
            </button>

            
          </form>

        </div>
      </div>
      
      
    </section>
  );
};

export default Footer;