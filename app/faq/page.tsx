'use client';

import LandingFooter from '@/components/home/LandingFooter';
import LandingNavbar from '@/components/home/LandingNavbar';
import { useEffect } from 'react';

export default function FAQPage() {
  useEffect(() => {
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = (trigger as HTMLElement).parentElement;
      if (!item) return;

      const isActive = item.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-trigger')?.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.classList.add('active');
      }
    });
  });

  return () => {
    triggers.forEach(trigger => {
      trigger.replaceWith(trigger.cloneNode(true));
    });
  };
}, []);

    const searchInput = document.getElementById('searchInput');
    const categorySections = document.querySelectorAll('.category-section');
    const noResults = document.getElementById('noResults');

    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase();
      let hasResults = false;

      categorySections.forEach(section => {
        const items = section.querySelectorAll('.accordion-item');
        let sectionHasResults = false;

        items.forEach(item => {
          const text = item.getAttribute('data-question');
          const matches = text.includes(searchTerm);

          if (matches) {
            item.style.display = '';
            sectionHasResults = true;
            hasResults = true;
          } else {
            item.style.display = 'none';
          }
        });

        section.style.display = sectionHasResults ? '' : 'none';
      });

      if (hasResults || searchTerm === '') {
        noResults.classList.add('hidden');
      } else {
        noResults.classList.remove('hidden');
      }
    });
  }, []);

  return (
    <>
      <LandingNavbar />

      <div className="faq-page">
        <section className="hero">
          <div className="hero-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>

          <h1>Perguntas Frequentes</h1>
          <p>
            Encontre respostas rápidas sobre nossos planos, funcionalidades e
            serviços
          </p>

          <div className="search-container">
            <svg
              className="search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>

            <input
              type="text"
              id="searchInput"
              className="search-input"
              placeholder="Buscar uma pergunta..."
            />
          </div>
        </section>

        <div className="container mt-4" id="faqContainer">
          <Category
            title="Planos para Varejistas"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                <path d="M9 22v-4h6v4"></path>
              </svg>
            }
          >
            <AccordionItem
              question="Qual a diferença entre os planos Essencial, Controle e Emissão?"
              search="diferença entre planos essencial controle emissão gestão financeira clube de pontos"
            >
              O plano Essencial é gratuito e oferece acesso básico ao Clube de
              Pontos...
            </AccordionItem>

            <AccordionItem
              question="O que é o Clube de Pontos e como funciona?"
              search="clube de pontos fidelização recompensas clientes"
            >
              O Clube de Pontos é uma funcionalidade de fidelização...
            </AccordionItem>

            <AccordionItem
              question="Posso mudar de plano depois?"
              search="mudar plano upgrade downgrade"
            >
              Sim! Você pode fazer upgrade ou downgrade...
            </AccordionItem>

            <AccordionItem
              question="O que é o Coletor incluído nos planos pagos?"
              search="coletor mobile inventário estoque smartphone tablet"
            >
              O Coletor é uma ferramenta mobile...
            </AccordionItem>

            <AccordionItem
              question="Como funciona o acesso para meu contador?"
              search="contador acesso permissões contábil"
            >
              Nos planos Controle e Emissão...
            </AccordionItem>
          </Category>

          <div id="noResults" className="no-results hidden">
            <p>Nenhuma pergunta encontrada. Tente outro termo de busca.</p>
          </div>
        </div>

        <section className="cta-section">
          <h2 className="cta-title">Ainda tem dúvidas?</h2>
          <p className="cta-text">Nossa equipe está pronta para ajudar você</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Falar com Suporte</button>
            <button className="btn btn-outline">Agendar Demonstração</button>
          </div>
        </section>
      </div>

      <LandingFooter />
    </>
  );
}

function Category({ title, icon, children }) {
  return (
    <div className="category-section">
      <div className="category-header">
        <div className="category-icon">{icon}</div>
        <h2 className="category-title">{title}</h2>
      </div>

      <div className="accordion-card">{children}</div>
    </div>
  );
}

function AccordionItem({ question, search, children }) {
  return (
    <div className="accordion-item" data-question={search}>
      <button className="accordion-trigger">{question}</button>
      <div className="accordion-content">
        <div className="accordion-content-inner">{children}</div>
      </div>
    </div>
  );
}
