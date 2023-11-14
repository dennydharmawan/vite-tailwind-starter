import { motion } from 'framer-motion';
import React from 'react';

export default function BlobButton(props: { children: React.ReactNode }) {
  return (
    <motion.button
      initial="hidden"
      whileHover="show"
      className="from-azul-500 to-azul-700 relative z-10 rounded-sm bg-gradient-to-tr px-8 py-3 font-semibold text-white shadow-md transition-transform duration-75 active:scale-[.95]"
    >
      {props.children}
      <div className="absolute left-0 top-0 -z-20 h-full w-full overflow-hidden">
        <motion.div
          className="absolute -left-[16%] top-0 -z-10 flex h-full w-full"
          style={{
            filter: "url('#goo')"
          }}
        >
          {[0, 1, 2, 3].map((number, idx) => (
            <motion.div
              variants={{
                hidden: {
                  y: '175%',
                  scale: 1.6,
                  left: `${idx * (128 / 4)}%`
                },
                show: { y: 0 }
              }}
              transition={{ delay: idx * 0.06, ease: 'easeOut' }}
              key={idx}
              className="bg-azul-700 absolute inline-block h-full w-1/4 translate-y-full scale-150 rounded-full"
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </motion.button>
  );
}
