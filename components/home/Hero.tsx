'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <header className="hero-modern">
      <div className="container hero-wrapper">
        <div className="row align-items-center g-5">
          {/* LEFT =============================== */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="hero-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Plataforma para Pequeno Varejo
            </motion.span>

            <motion.h1
              className="hero-title-modern"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              MarketIQ: Inteligência
              <br />
              de Dados ao Alcance
              <br />
              do Pequeno Varejo
            </motion.h1>

            <motion.p
              className="hero-sub-modern"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              Transformamos a coleta e análise de dados em uma operação simples,
              eficiente e inteligente — conectando o pequeno varejo às fontes de
              informação.
            </motion.p>

            <motion.div
              className="d-flex flex-wrap gap-3 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <motion.a
                href="/dash"
                className="hero-btn-solid"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Acessar sistema
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT =============================== */}
          <motion.div
            className="col-lg-6 d-flex justify-content-lg-end"
            style={{ y: parallaxY }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <Image
                src="/img/illustrations/hero.png"
                alt="Hero"
                width={620}
                height={620}
                priority
                className="hero-img-modern"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
