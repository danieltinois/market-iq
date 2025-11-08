'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Essencia() {
  return (
    <section id="sobre" className="section-pad essencia position-relative">
      {/* glow sutil de fundo */}
      <div
        aria-hidden
        className="position-absolute top-0 start-50 translate-middle-x w-100"
        style={{
          maxWidth: 920,
          height: 220,
          filter: 'blur(60px)',
          background:
            'radial-gradient(40% 60% at 50% 0%, rgba(98,140,247,.25), transparent)',
        }}
      />
      <div className="container position-relative">
        <div className="row g-5 align-items-center">
          <motion.div
            className="col-lg-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h2 className="mb-2 fw-bold" variants={item}>
              Nossa essência: Por que existimos
            </motion.h2>

            <motion.p className="mini mb-3" variants={item}>
              Empoderamos o pequeno varejo, substituindo o improviso com dados
              reais. Integramos tecnologias, simplificamos o complexo e
              colocamos a inteligência a serviço do resultado — todos os dias.
            </motion.p>

            <motion.ul className="list-unstyled mb-3" variants={container}>
              {[
                'Menos fricção e desperdício operacional',
                'Processos claros, auditáveis e repetíveis',
                'Decisões rápidas e sustentadas por evidência',
              ].map((t, i) => (
                <motion.li key={i} className="mb-2 d-flex" variants={item}>
                  <i className="fa-solid fa-check text-success me-2 mt-1" />
                  <span>{t}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="d-flex gap-3" variants={container}>
              <motion.a
                href="#"
                className="link-primary"
                variants={item}
                whileHover={{ x: 2 }}
              >
                Saiba mais →
              </motion.a>
              <motion.a
                href="/monetization"
                className="link-secondary"
                variants={item}
                whileHover={{ x: 2 }}
              >
                Ver planos e preços
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="card-soft">
              <div className="d-flex align-items-center gap-3">
                <Image
                  src="/img/avatars/avatar8.png"
                  className="rounded-3"
                  alt="Ilustração"
                  width={110}
                  height={110}
                  style={{ objectFit: 'cover' }}
                />
                <div>
                  <h5 className="mb-1 fw-bold">Conversamos com quem decide</h5>
                  <p className="mb-0 text-muted">
                    Diagnóstico rápido, cronograma claro e entregas enxutas —
                    sem promessas vazias.
                  </p>
                </div>
              </div>

              <div className="sep my-3" />

              <div className="row g-3">
                <div className="col-6">
                  <motion.div
                    className="p-3 rounded-3 border bg-light"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  >
                    <div className="fw-extrabold fs-4">+32%</div>
                    <div className="small text-muted">produtividade média</div>
                  </motion.div>
                </div>
                <div className="col-6">
                  <motion.div
                    className="p-3 rounded-3 border bg-light"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  >
                    <div className="fw-extrabold fs-4">-41%</div>
                    <div className="small text-muted">erros operacionais</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
