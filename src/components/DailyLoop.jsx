import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Code } from 'lucide-react';

const DailyLoop = () => {
  return (
    <section
      className="relative w-full flex justify-center items-center py-14 px-4 overflow-hidden bg-[#1B1E22]"
    >
      <div className="relative bg-[#212428]/80 border-2 border-transparent rounded-2xl shadow-xl p-6 md:p-10 max-w-2xl w-full text-center backdrop-blur-lg transition-transform duration-500 hover:scale-105 group">
        {/* Gradient Border Layer */}
        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#FF014F] via-[#FF6A3D] to-[#FF014F] blur-sm opacity-40 group-hover:opacity-80 transition-all duration-500 z-[-1]"></div>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF014F] flex justify-center items-center gap-2 drop-shadow-md">
          <Code size={26} strokeWidth={2} className="text-white animate-pulse" />
          <Typewriter
            words={['Eat. Sleep. Code. Repeat.']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1800}
          />
          <Code size={26} strokeWidth={2} className="text-white animate-pulse" />
        </h3>
      </div>
    </section>
  );
};

export default DailyLoop;
