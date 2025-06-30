import React from "react";
import { motion } from "framer-motion";
import { MdAttachEmail } from "react-icons/md";
import {
  Facebook,
  Github,
  Linkedin,
  MailOpen,
  MapPinHouse,
} from "lucide-react";
import image from "../assets/banner.jpg";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#1B1E22] text-[#C4CFDE] py-16 px-4 md:px-12 min-h-screen"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Let's Get in Touch
      </h2>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
      >
        {/* Left Card */}
        <div className="bg-[#212428] p-6 rounded-lg shadow-[16px_16px_20px_#0f1012,_-10px_-10px_60px_#292e34] flex flex-col justify-between">
          {/* Top Info */}
          <div>
            <img
              src={image}
              alt="Sourav Mitra"
              className="rounded-full mb-4 w-48 border-4 border-[#FF014F] mx-auto"
            />
            <h3 className="text-xl font-bold text-white text-center mb-1">
              SOURAV MITRA
            </h3>
            <p className="text-md text-gray-400 mb-3 text-center">
              Frontend Developer
            </p>
            <p className="mb-5 text-center">
              "I'm open to job opportunities and freelance work — feel free to
              reach out anytime via call, email, or WhatsApp."
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              {/* Left Contact Info */}
              <div className="space-y-3 text-sm text-center sm:text-left w-full sm:w-[50%]">
                <p className="flex items-center justify-center sm:justify-start gap-2">
                  <Phone size={20} /> <strong>Phone:</strong> +8801891883223
                </p>
                <p className="flex items-center justify-center sm:justify-start gap-2">
                  <MdAttachEmail size={20} /> <strong>Email:</strong>{" "}
                  inf.souravmitra@gmail.com
                </p>
                <p className="flex items-center justify-center sm:justify-start gap-2">
                  <MapPinHouse size={20} /> <strong>Address:</strong> Barishal,
                  Dhaka, Bangladesh.
                </p>
              </div>

              {/* Divider */}
              <div className="hidden sm:flex justify-center items-center">
                <div className="w-px h-24 bg-gray-600 mx-2"></div>
              </div>

              {/* Right Availability Message */}
              <div className="text-sm text-center sm:text-left w-full sm:w-[45%]">
                <p>
                  <span className="text-red-500 font-bold">Available 24/7</span>{" "}
                  — For urgent queries, feel free to call or WhatsApp me
                  anytime.
                </p>
                <p className="flex items-center mt-2 justify-center sm:justify-start gap-2">
                  <FaWhatsapp size={20} />
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/8801891883223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline"
                  >
                    Chat Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <form className="bg-[#212428] p-6 rounded-lg shadow-[16px_16px_20px_#0f1012,_-10px_-10px_60px_#292e34] space-y-4">
          <h2 className="text-center text-xl">Fill This Form to Reach Me</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              required
              placeholder="Your Name"
              className="input-field w-full bg-[#191B1E] p-3 rounded-lg"
            />
            <input
              type="text"
              required
              placeholder="Phone Number"
              className="input-field w-full bg-[#191B1E] p-3 rounded-lg"
            />
          </div>
          <input
            type="email"
            required
            placeholder="Email"
            className="input-field w-full bg-[#191B1E] p-3 rounded-lg"
          />
          <input
            type="text"
            required
            placeholder="Subject"
            className="input-field w-full bg-[#191B1E] p-3 rounded-lg"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="input-field w-full bg-[#191B1E] p-3 rounded-lg"
          ></textarea>
          <button className="w-full bg-[#191B1E] text-white py-3 rounded-lg hover:scale-105 transition">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
