import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import Tilt from "react-parallax-tilt";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const media = [
  { type: "image", src: "/photo1.jpg" },
  { type: "video", src: "/What is a synapse copy.mp4" },
  { type: "video", src: "/The science of the possible. (1) copy.mp4" }
];

const BusinessCard = () => {
  const [current, setCurrent] = useState(0);
  const nextPhoto = () => setCurrent((prev) => (prev + 1) % media.length);
  const prevPhoto = () => setCurrent((prev) => (prev - 1 + media.length) % media.length);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-synapse-light via-synapse to-synapse-dark px-4">
      <motion.div
        className="w-full max-w-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={cardVariants}
      >
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
          className="rounded-3xl shadow-2xl"
        >
          <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-3xl p-8 w-full">
            {/* Slideshow */}
            <div className="mb-6">
              <div className="relative w-full h-40 rounded-xl overflow-hidden flex items-center justify-center bg-gray-100">
                {media[current].type === "image" ? (
                  <motion.img
                    key={current}
                    src={media[current].src}
                    alt={`Slideshow ${current + 1}`}
                    className="object-cover w-full h-full"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <motion.video
                    key={current}
                    src={media[current].src}
                    className="object-contain w-full h-full bg-black"
                    autoPlay
                    loop
                    muted
                    controls={false}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-1 shadow transition"
                  aria-label="Previous photo"
                >
                  &#8592;
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-1 shadow transition"
                  aria-label="Next photo"
                >
                  &#8594;
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {media.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-2 h-2 rounded-full ${idx === current ? 'bg-synapse' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-5">
              {/* Company Logo */}
              <div className="flex justify-center mb-4">
                <img
                  src="/synapse-logo.png"
                  alt="Company Logo"
                  className="max-w-[160px] w-full h-auto object-contain"
                  style={{ background: 'transparent' }}
                />
              </div>

              {/* Profile Image */}
              <motion.div
                className="relative"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="/your-image.png"
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover object-center border-4 border-white shadow-md scale-110"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-synapse animate-pulse"></div>
              </motion.div>

              {/* Name and Title */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h1 className="text-2xl font-bold text-gray-800">Erika Goh</h1>
                <p className="text-sm text-gray-600">Software Engineering Student</p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="w-full pt-4 border-t border-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-3 mt-4 text-base text-gray-700">
                  <ContactItem icon={Mail} label="erika@example.com" link="mailto:erika@example.com" />
                  <ContactItem icon={Phone} label="+1 (123) 456-7890" link="tel:+11234567890" />
                  <ContactItem icon={MapPin} label="synapsemedcom.ca" link="https://synapsemedcom.ca" />
                  <ContactItem
                    icon={Linkedin}
                    label="linkedin.com/in/erikagoh"
                    link="https://www.linkedin.com/in/erikagoh"
                  />
                </div>
              </motion.div>
            </div>
            {/* Add Me to Contacts Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Erika Goh\nTITLE:Software Engineering Student\nEMAIL:erika@example.com\nTEL:+1-123-456-7890\nEND:VCARD`;
                  const blob = new Blob([vCardData], { type: 'text/vcard' });
                  const url = URL.createObjectURL(blob);
                  window.open(url, '_blank');
                  setTimeout(() => URL.revokeObjectURL(url), 1000);
                }}
                className="bg-synapse hover:bg-synapse-dark text-white font-semibold py-2 px-6 rounded-full shadow transition"
              >
                Add me to contacts
              </button>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

const ContactItem = ({
  icon: Icon,
  label,
  link,
}: {
  icon: any;
  label: string;
  link?: string;
}) => (
  <motion.div
    className="flex items-center gap-3 group"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <Icon className="w-5 h-5 text-synapse group-hover:text-synapse-dark transition" />
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
        {label}
      </a>
    ) : (
      <span>{label}</span>
    )}
  </motion.div>
);

export default BusinessCard; 
