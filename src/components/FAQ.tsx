"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Quem deve participar?",
    answer:
      "Donos de negócios, CEOs, diretores e gestores que buscam aprimorar liderança e gestão. Se você quer transformar sua empresa e construir times de alta performance, este evento é para você.",
  },
  {
    question: "A Imersão é presencial?",
    answer:
      "Sim, 100% presencial em Vitória/ES. O formato presencial é intencional: a imersão e o networking de alta qualidade só acontecem com você presente. A experiência é completa e All Inclusive.",
  },
  {
    question: "O que está incluído no ingresso?",
    answer:
      "Acesso completo aos dois dias de imersão, café da manhã, almoço, happy hour, mentorias pós-evento e acesso à comunidade exclusiva para aplicação dos aprendizados após o evento.",
  },
  {
    question: "Como funciona a aprovação da vaga?",
    answer:
      "As vagas são limitadas e sujeitas a um breve processo de aprovação para garantir a qualidade do grupo. Nossa equipe entrará em contato após a inscrição para confirmar sua participação.",
  },
  {
    question: "Qual o diferencial de participar pela Enjoy?",
    answer:
      "Ao garantir sua vaga através da Enjoy, você tem acesso prioritário a turma limitada, networking qualificado com a rede Enjoy e suporte pós-imersão com mentorias e comunidade exclusiva.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/8 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span
          className={`font-semibold text-base transition-colors duration-200 ${
            isOpen ? "text-accent" : "text-white group-hover:text-accent"
          }`}
        >
          {question}
        </span>
        <div className="flex-shrink-0 w-7 h-7 border border-white/15 flex items-center justify-center mt-0.5 transition-colors duration-200 group-hover:border-accent/50">
          {isOpen ? (
            <Minus size={14} className="text-accent" />
          ) : (
            <Plus size={14} className="text-white/60 group-hover:text-accent" />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 mb-6" : "max-h-0"
        }`}
      >
        <p className="text-white/55 text-sm leading-relaxed pr-10">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Tire suas dúvidas
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Perguntas
            <br />
            <span className="gold-text">Frequentes.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="bg-primary-card border border-white/8 px-6 sm:px-8">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center">
          <p className="text-white/45 text-sm mb-4">
            Ainda tem dúvidas? Fale diretamente com a equipe Enjoy.
          </p>
          <a
            href="#inscricao"
            className="inline-flex items-center text-accent font-semibold text-sm hover:text-accent-light transition-colors border-b border-accent/40 hover:border-accent-light pb-0.5"
          >
            Entrar em contato →
          </a>
        </div>
      </div>
    </section>
  );
}
