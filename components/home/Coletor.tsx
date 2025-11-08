'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Coletor() {
  return (
    <section id="coletor" className="section-pad section-blue premium-coletor">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* RIGHT IMAGE */}
          <motion.div
            className="col-lg-6 order-lg-2 d-flex justify-content-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="collector-illust floating"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35 }}
            >
              <Image
                src="/img/illustrations/collector.png"
                alt="Coletor"
                width={520}
                height={520}
                priority
                className="img-fluid object-fit-contain"
              />
            </motion.div>
          </motion.div>

          {/* LEFT TEXT */}
          <motion.div
            className="col-lg-6 order-lg-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="kicker text-white-50 mb-2">ENTENDA</p>

            <h2 className="fw-bold text-white mb-3 display-6">
              O que é um Coletor de Dados?
            </h2>

            <p className="lead text-white-50 mb-4">
              Um Coletor de Dados é um dispositivo portátil, inteligente e
              conectado, projetado para capturar, registrar e transmitir
              informações automaticamente do ambiente físico para sistemas
              digitais.
              <br />
              <br />
              Em vez de anotar tudo no papel ou preencher planilhas, o coletor
              permite que sua equipe:
            </p>

            <motion.div
              className="coletor-panel mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {[
                'Escaneie códigos de barras.',
                'Registre informações em tempo real.',
                'Evite erros manuais.',
                'Acelere tarefas operacionais.',
              ].map((item, i) => (
                <div className="bullet" key={i}>
                  <i className="fa-regular fa-circle-check"></i>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="/register"
              className="btn btn-light px-4 py-2 fw-bold rounded-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Começar agora
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
