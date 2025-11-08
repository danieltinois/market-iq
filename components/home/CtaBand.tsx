'use client';

import { motion } from 'framer-motion';

export default function CtaBand() {
  return (
    <section className="cta-wrapper section-pad">
      <div className="container">
        <motion.div
          className="cta-band-premium"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Left text */}
          <motion.div
            className="cta-text"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h2>Contrate o melhor serviço</h2>
            <h2>do mundo para seu comércio!</h2>
          </motion.div>

          {/* Middle Arrow — SVG desenhado com dash */}
          <motion.div
            className="cta-arrow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <svg
              width="260"
              height="120"
              viewBox="0 0 260 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cta-arrow-svg"
            >
              <motion.path
                d="
      M10 70
      C50 110, 110 115, 150 85
      C210 40, 210 5, 155 5
      C105 5, 105 65, 155 95
      C195 120, 240 95, 250 80
    "
                stroke="#B9C5FF"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.8,
                  ease: 'easeInOut',
                }}
              />

              <motion.path
                d="
      M235 75
      L255 80
      L240 95
    "
                stroke="#B9C5FF"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: 'easeInOut',
                  delay: 0.6,
                }}
              />
            </svg>
          </motion.div>

          {/* Button */}
          <motion.a
            href="#contato"
            className="cta-btn"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{
              type: 'spring',
              stiffness: 240,
              damping: 18,
            }}
          >
            Nossos Serviços
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
