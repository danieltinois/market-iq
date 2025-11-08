'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Clientes() {
  return (
    <section id="clientes" className="section-pad clientes-sec">
      <div className="container text-center">
        {/* Title */}
        <motion.h2
          className="fw-bold clientes-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Empresas confiam em nós
          <br />
          para gerenciar seus negócios
        </motion.h2>

        {/* Sub */}
        <motion.p
          className="clientes-sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
        >
          Acreditamos que todo pequeno varejo merece ter acesso a softwares
          fáceis e acessíveis, que ajudam na navegação mais simples.
        </motion.p>

        {/* VIDEO WRAPPER */}
        <motion.div
          className="clientes-video-wrapper"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="video-thumb-wrapper">
            <Image
              src="/img/thumb/video.png"
              alt="Vídeo"
              width={960}
              height={540}
              className="video-img"
            />

            {/* PLAY BUTTON */}
            <motion.div
              className="video-play"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.25 }}
            >
              <div className="video-play-inner">
                <i className="fa-solid fa-play"></i>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#"
          className="clientes-link"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Explorar detalhes →
        </motion.a>
      </div>
    </section>
  );
}
