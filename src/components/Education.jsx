import React from "react";
import { motion } from "framer-motion";

const qualifications = [
  {
    title: "Secondary School Certificate (SSC)",
    institute: "Govt WB Union Model Institution, Wazirpur",
    session: "Group: Humanities | Passed: 2020",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institute: "Guthia Ideal Degree College, Guthia",
    session: "Group: Humanities | Passed: 2022",
  },
  {
    title: "Bachelor of Arts (B.A.) in History",
    institute: "Govt. Syed Hatem Ali College, Barishal (Under National University)",
    session: "2nd Year (Ongoing) — Session: 2022–2023",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#1B1E22] text-[#C4CFDE] py-16 px-4 md:px-12"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Educational Qualification
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FF014F] z-0" />

        {/* Top Arrow Head */}
        <div className="absolute left-1/2 -top-6 transform -translate-x-1/2">
          <div
            className="w-0 h-0 border-l-[10px] border-l-transparent
            border-r-[10px] border-r-transparent border-b-[14px] border-b-[#FF014F]"
          ></div>
        </div>

        {/* Bottom Arrow Head */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-6">
          <div
            className="w-0 h-0 border-l-[10px] border-l-transparent
            border-r-[10px] border-r-transparent border-t-[14px] border-t-[#FF014F]"
          ></div>
        </div>

        <div className="space-y-16 relative z-10">
          {qualifications.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`relative w-full flex ${
                  isLeft ? "justify-start pr-10" : "justify-end pl-10"
                }`}
              >
                {/* Numbered Dot */}
                <span className="absolute top-4 left-1/2 transform -translate-x-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-[#FF014F] text-white text-sm font-bold z-10 shadow-lg border-2 border-white">
                  {index + 1}
                </span>

                {/* Card */}
                <div className="bg-[#212428] p-6 w-full md:w-[45%] rounded-lg shadow-[10px_10px_20px_#0f1012,_-5px_-5px_40px_#292e34]">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">{item.institute}</p>
                  <p className="text-sm text-gray-400">{item.session}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
