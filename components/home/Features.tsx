'use client';

import { motion } from 'framer-motion';
import { FaBolt, FaBrain, FaDatabase } from 'react-icons/fa';

const features = [
  {
    icon: <FaBolt />,
    title: 'Mais produtividade',
    desc: 'Automatize tarefas manuais e libere sua equipe para atividades estratégicas.',
  },
  {
    icon: <FaDatabase />,
    title: 'Dados sem atrito',
    desc: 'Digitalize informações direto do campo, evitando retrabalhos e inconsistências.',
  },
  {
    icon: <FaBrain />,
    title: 'Decisões inteligentes',
    desc: 'Acesse dados em tempo real e tome decisões com mais agilidade e precisão.',
  },
];

export default function Features() {
  return (
    <section className="section-pad features">
      <div className="container">
        <motion.p
          className="kicker text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Recursos de Qualidade
        </motion.p>

        <motion.h2
          className="text-center mb-4 fw-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Por que somos o melhor?
        </motion.h2>

        <div className="row g-4 mt-2">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="col-md-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: i * 0.15,
                ease: 'easeOut',
              }}
            >
              <motion.div
                className="feature-card"
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 45px rgba(0,0,0,.1)',
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <div className="feature-icon">{f.icon}</div>
                <h5 className="fw-bold mb-1">{f.title}</h5>
                <p className="mb-0">{f.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
