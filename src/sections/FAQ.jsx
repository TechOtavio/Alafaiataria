import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Quanto tempo demora para confeccionar um terno?",
      answer: "O processo de confecção de um terno sob medida (Bespoke) leva de 4 a 6 semanas, envolvendo de 2 a 3 provas presenciais para garantir o caimento perfeito."
    },
    {
      question: "Vocês trabalham apenas com ternos masculinos?",
      answer: "Nossa especialidade é a alfaiataria masculina tradicional e moderna. Criamos ternos, costumes, camisas, coletes e calças sociais com o mais alto padrão de acabamento."
    },
    {
      question: "Quais tipos de tecidos vocês utilizam?",
      answer: "Trabalhamos com catálogos exclusivos das melhores tecelagens do mundo, incluindo lã fria italiana Super 120s a 180s, cashmere, linho irlandês e algodão egípcio. Apresentamos as opções durante a consulta inicial."
    },
    {
      question: "É necessário agendar horário?",
      answer: "Sim, o atendimento é exclusivamente com hora marcada. Isso garante que o Mestre Alfaiate dedique toda a atenção e tempo necessários para entender seu estilo e tirar suas medidas com precisão."
    },
    {
      question: "Vocês fazem ajustes em ternos de outras marcas?",
      answer: "Sim, realizamos ajustes e reparos em peças externas, desde que o tecido e a construção da peça sejam compatíveis com nosso padrão de trabalho. Avaliamos cada caso na consulta inicial."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        <div className="section-header fade-up">
          <h4 className="section-subtitle">Tire suas dúvidas</h4>
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="section-line"></div>
        </div>

        <div className="faq-container fade-up" style={{ transitionDelay: '0.2s' }}>
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>
              <div
                className="faq-answer-container"
                style={{
                  gridTemplateRows: openIndex === index ? '1fr' : '0fr',
                }}
              >
                <div className="faq-answer-inner">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
