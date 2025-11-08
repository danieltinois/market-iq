'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Fábio Santos',
    role: 'Pequeno Comerciário',
    avatar: '/img/avatars/avatar1.jpeg',
    quote:
      'Com o coletor de dados da MarketIQ, nossa equipe parou de perder tempo com papel e planilhas. A produtividade aumentou e os erros praticamente sumiram.',
  },
  {
    name: 'Carlos Menezes',
    role: 'Gerente de Operações',
    avatar: '/img/avatars/avatar2.jpeg',
    quote:
      'A integração foi rápida e clara. Hoje tomamos decisões com mais confiança e velocidade.',
  },
  {
    name: 'Luciano Prado',
    role: 'Rede de Varejo',
    avatar: '/img/avatars/avatar3.jpeg',
    quote:
      'Os dashboards nos deram visibilidade real do que acontece nas lojas. Resultado direto no caixa.',
  },
];

export default function Testimonials() {
  const quote = testimonials[0];

  return (
    <section className="testimonials-premium section-pad">
      <div className="container text-center">
        {/* Kicker */}
        <motion.p
          className="testimonials-kicker"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          COMUNICAÇÃO DOS NOSSOS CLIENTES
        </motion.p>

        {/* Title */}
        <motion.h2
          className="testimonials-title fw-bold"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
        >
          Avaliações de quem já usa a MarketIQ
        </motion.h2>

        {/* Quote */}
        <motion.blockquote
          className="testimonials-quote"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
        >
          “{quote.quote}”
        </motion.blockquote>

        {/* TESTIMONIAL AVATARS */}
        <motion.div
          className="testimonials-avatars"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          viewport={{ once: true }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonials-user"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={t.avatar}
                alt={t.name}
                width={44}
                height={44}
                className="testimonials-avatar"
              />
              <div className="testimonials-meta">
                <div className="fw-semibold">{t.name}</div>
                <div className="text-muted small">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
