import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Sandun</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Design minded fullstack developer <br />
            <span className="text-[24px]">
              Wanna see more? Just check my{' '}
              <a className="text-[#915eff] cursor-pointer ">resume</a>.
            </span>
          </p>
        </div>
      </div>

      <div className="absolute top-[350px] sm:top-[350px] h-[200px] sm:h-[375px] w-full">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-6 bottom-28 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[28px] h-[48px] md:w-[35px] md:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start sm:p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-[8px] h-[8px] md:w-3 md:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
