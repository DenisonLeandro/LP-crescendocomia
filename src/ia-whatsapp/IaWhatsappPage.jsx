import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Check,
  ExternalLink,
  Lock,
  Users,
  Clock,
  MessageSquare,
  MessageCircle,
  Mic,
  Smile,
  Tag,
  FileText,
  Wand2,
  QrCode,
  ShieldCheck,
  CheckCheck,
  Send,
  ChevronUp,
  ArrowLeft
} from 'lucide-react';
import { CountUpNumber, AccordionItem, useScrollAnimation } from '../shared/Animations.jsx';

const STEPS_DATA = [
  {
    id: 1,
    icon: MessageCircle,
    title: 'Cliente manda mensagem',
    description: 'A conversa chega na caixa de entrada compartilhada da sua equipe, em tempo real, direto do WhatsApp conectado.'
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'IA lê o histórico e sugere',
    description: 'Com base nas últimas mensagens, a IA gera 3 sugestões de resposta em tons diferentes: formal, amigável e direto.'
  },
  {
    id: 3,
    icon: Check,
    title: 'Atendente escolhe e envia',
    description: 'Sua equipe usa, edita ou ignora a sugestão. Nada é enviado sem um humano clicar em enviar — controle total é seu.'
  },
  {
    id: 4,
    icon: Tag,
    title: 'IA categoriza sozinha',
    description: 'Sentimento, tópico e resumo da conversa são gerados automaticamente, sem trabalho manual da sua equipe.'
  }
];

const FEATURES_DATA = [
  {
    id: 'sugestao',
    icon: Sparkles,
    title: 'Sugestão de Resposta em Tempo Real',
    description: 'A IA analisa as últimas mensagens da conversa e sugere 3 respostas em tons diferentes — formal, amigável e direto.'
  },
  {
    id: 'sentimento',
    icon: Smile,
    title: 'Análise de Sentimento Automática',
    description: 'Cada conversa é classificada como positiva, neutra ou negativa, com histórico de evolução por contato.'
  },
  {
    id: 'resumo',
    icon: FileText,
    title: 'Resumo Automático de Conversa',
    description: 'A IA gera pontos-chave e itens de ação de qualquer atendimento, sem sua equipe precisar reler tudo.'
  },
  {
    id: 'categorizacao',
    icon: Tag,
    title: 'Categorização Automática por Tópico',
    description: 'Cada conversa é classificada entre dezenas de categorias de negócio — vendas, cobrança, agendamento, reclamação e mais.'
  },
  {
    id: 'composer',
    icon: Wand2,
    title: 'Composer com IA',
    description: 'Expanda, reescreva, corrija a gramática ou traduza qualquer mensagem. O modo "meu tom" aprende o seu jeito de escrever.'
  },
  {
    id: 'audio',
    icon: Mic,
    title: 'Transcrição Automática de Áudios',
    description: 'Áudios recebidos no WhatsApp viram texto automaticamente — sua equipe lê em segundos, sem precisar ouvir tudo.'
  },
  {
    id: 'fila',
    icon: Users,
    title: 'Fila e Atribuição de Conversas',
    description: 'Conversas não atribuídas ficam visíveis na fila, com distribuição manual ou automática entre os atendentes.'
  },
  {
    id: 'conexao',
    icon: QrCode,
    title: 'Conexão Simples por QR Code',
    description: 'Conecte um ou mais números de WhatsApp em minutos, sem precisar de aprovação da API oficial da Meta.'
  }
];

const FAQ_DATA = [
  {
    id: 0,
    question: 'A IA responde sozinha pelos meus clientes no WhatsApp?',
    answer: 'Não. A IA sugere respostas com base no histórico e no contexto da conversa, mas quem envia é sempre um atendente humano. Você tem controle total — nada sai sem aprovação da sua equipe.'
  },
  {
    id: 1,
    question: 'Como conecto meu WhatsApp à plataforma?',
    answer: 'Basta escanear um QR code, do mesmo jeito que você conecta o WhatsApp Web. Você pode conectar mais de um número da sua empresa e gerenciar todos na mesma caixa de entrada.'
  },
  {
    id: 2,
    question: 'Dá para ter vários atendentes usando ao mesmo tempo?',
    answer: 'Sim. As conversas ficam em uma fila compartilhada, com atribuição manual ou automática entre os atendentes, e cada um vê seu próprio painel de conversas.'
  },
  {
    id: 3,
    question: 'A IA entende o histórico da conversa antes de sugerir uma resposta?',
    answer: 'Sim. Antes de cada sugestão, a IA analisa as mensagens mais recentes da conversa, identifica o sentimento do cliente e classifica o assunto automaticamente.'
  }
];

export default function IaWhatsappPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollRef = useScrollAnimation();

  useEffect(() => {
    let tick = false;

    const handleScroll = () => {
      if (!tick) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 50);
          setShowBackToTop(scrollY > 400);
          tick = false;
        });
        tick = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleFaqToggle = (index) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-dark-black relative selection:bg-blue-light selection:text-blue-primary font-inter">

      {/* NAVBAR */}
      <nav className={`navbar-main ${scrolled ? 'nav-scrolled shadow-lg' : ''}`}>
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img src="/logo.svg" alt="Logo" className="w-16 h-16 object-contain" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="nav-link link-hover-underline inline-flex items-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5" />
              Voltar ao site
            </a>
            <a href="#como-funciona" className="nav-link link-hover-underline">Como Funciona</a>
            <a href="#funcionalidades" className="nav-link link-hover-underline">Funcionalidades</a>
            <a href="#faq" className="nav-link link-hover-underline">FAQ</a>
          </div>

          <div className="hidden md:block">
            <a
              href="#cta-final"
              className="btn inline-flex items-center justify-center bg-blue-primary text-white px-6 py-2.5 rounded-lg font-medium cursor-pointer transition-all duration-250 hover:bg-blue-dark hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(37,99,235,0.35)] active:translate-y-0"
            >
              Quero Acesso à Plataforma
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-5 right-6 p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center gap-7">
          <a href="/" onClick={handleLinkClick} className="mobile-nav-link ml-1">Voltar ao site</a>
          <a href="#como-funciona" onClick={handleLinkClick} className="mobile-nav-link ml-2">Como Funciona</a>
          <a href="#funcionalidades" onClick={handleLinkClick} className="mobile-nav-link ml-3">Funcionalidades</a>
          <a href="#faq" onClick={handleLinkClick} className="mobile-nav-link ml-4">FAQ</a>

          <a
            href="#cta-final"
            onClick={handleLinkClick}
            className="mobile-cta-btn btn inline-flex items-center justify-center bg-blue-primary text-white px-8 py-3.5 rounded-lg w-full max-w-[320px] font-semibold hover:bg-blue-dark transition-colors mt-4 text-center shadow-lg"
          >
            Quero Acesso à Plataforma
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full hero-section-height flex items-center pt-[72px] pb-12 overflow-hidden bg-black z-10 section-dark">
        <div className="hero-mesh">
          <div className="mesh-gradient mesh-gradient-1"></div>
          <div className="mesh-gradient mesh-gradient-2"></div>
          <div className="mesh-gradient mesh-gradient-3"></div>
        </div>
        <div className="hero-grain"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 to-[#0A0A0A]/60 pointer-events-none z-1"></div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="animate-hero anim-badge inline-flex items-center gap-1.5 bg-blue-primary/10 border border-blue-primary/20 px-4 py-1.5 rounded-full mb-6">
              <MessageSquare className="w-3.5 h-3.5 text-blue-primary" />
              <span className="hero-badge text-blue-primary uppercase tracking-wider">
                IA WhatsApp
              </span>
            </div>

            <h1 className="animate-hero anim-headline hero-headline mb-5 max-w-[640px]">
              A IA sugere. <span className="highlight-text-gradient">Você aprova e envia.</span>
            </h1>

            <p className="animate-hero anim-sub hero-sub mb-8 max-w-[540px]">
              Sua equipe atende pelo WhatsApp com sugestões de resposta geradas por IA em tempo real, sentimento e tópico de cada conversa identificados automaticamente. O controle do envio é sempre humano.
            </p>

            <div className="animate-hero anim-buttons flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
              <a
                href="#cta-final"
                className="btn inline-flex items-center justify-center gap-2 bg-blue-primary text-white px-7 py-3.5 rounded-lg w-full sm:w-auto font-medium transition-all duration-300 hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] active:translate-y-0 active:shadow-md"
              >
                Quero Acesso à Plataforma
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#como-funciona"
                className="btn inline-flex items-center justify-center gap-2 bg-transparent border border-white/25 text-white px-7 py-3.5 rounded-lg w-full sm:w-auto font-medium transition-all duration-200 hover:bg-white/8 hover:border-white/50"
              >
                Ver como funciona
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            <div className="animate-hero anim-proof flex flex-col sm:flex-row items-center gap-3 mt-10">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-1.5 gap-x-2.5 font-inter text-sm text-white/60">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-primary" />
                <span>Nada é enviado sem aprovação de um atendente</span>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp mockup */}
          <div className="animate-hero anim-mockup hidden lg:col-span-5 lg:flex justify-end pr-4">
            <div className="whatsapp-float w-full max-w-[360px] bg-[#1F2937] rounded-[20px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.05)]">
              <div className="bg-[#111827] p-3.5 px-4 flex items-center justify-between border-b border-white/5 font-inter">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#667EEA] to-[#764BA2] flex items-center justify-center text-white text-[0.75rem] font-bold">
                    CL
                  </div>
                  <div>
                    <div className="font-semibold text-[0.85rem] text-white leading-tight">Cliente • João</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#4ADE80] dot-pulse"></span>
                      <span className="text-[0.72rem] text-[#4ADE80] leading-none">online</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-3 min-h-[220px] font-inter">
                <div className="self-start bg-[#374151] text-white/90 rounded-[16px] rounded-tl-none p-3 max-w-[80%] text-[0.83rem] leading-normal shadow-sm">
                  <p>Vocês têm horário disponível amanhã de manhã?</p>
                  <div className="text-[0.68rem] text-white/35 text-right mt-1">14:32</div>
                </div>

                <div className="self-end bg-blue-primary text-white rounded-[16px] rounded-tr-none p-3 max-w-[80%] text-[0.83rem] leading-normal shadow-sm">
                  <p>Olá, João! Temos horário às 9h e às 10h30. Qual prefere?</p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[0.68rem] text-white/60">14:33</span>
                    <CheckCheck className="w-3 h-3 text-[#93C5FD]" />
                  </div>
                </div>

                <div className="w-full bg-gradient-to-br from-blue-primary/18 to-blue-primary/8 border border-blue-primary/30 p-3.5 rounded-[14px] mt-1.5 shadow-md">
                  <div className="flex items-center gap-1.5 text-[#60A5FA] mb-2.5 font-inter font-bold text-[0.7rem] tracking-wider uppercase">
                    <Sparkles className="w-3 h-3 sparkle-glow" />
                    3 sugestões da IA
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <button className="w-full text-left bg-white/5 border border-white/10 text-white/85 text-[0.75rem] px-3 py-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none">
                      "Perfeito, confirmo às 9h. Até amanhã!"
                    </button>
                    <button className="w-full text-left bg-white/5 border border-white/10 text-white/85 text-[0.75rem] px-3 py-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none">
                      "Fechado às 9h! Qualquer coisa me chama 🙂"
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#111827] p-3 px-4 flex items-center gap-3 border-t border-white/5 font-inter">
                <div className="flex-1 bg-[#1F2937] rounded-full px-4 py-2 text-[0.8rem] text-white/55">
                  Digite ou use uma sugestão...
                </div>
                <Send className="w-[18px] h-[18px] text-blue-primary cursor-pointer" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO COMO FUNCIONA */}
      <section
        id="como-funciona"
        className="w-full bg-dark-black relative overflow-hidden section-dark"
        style={{ scrollMarginTop: '80px', padding: '120px 0' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 700px 400px at 10% 50%, rgba(37,99,235,0.07), transparent),
              radial-gradient(ellipse 500px 500px at 90% 50%, rgba(37,99,235,0.05), transparent)
            `,
            zIndex: 0
          }}
        ></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-[80px] max-md:mb-[56px] flex flex-col items-center">
            <div
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up flex items-center gap-4"
              style={{ transitionDuration: '0.5s', transitionDelay: '0s' }}
            >
              <div className="w-10 h-[2px] bg-blue-primary/50 rounded-[2px]"></div>
              <span className="font-inter text-[0.75rem] font-semibold tracking-[0.12em] text-blue-primary uppercase">
                COMO FUNCIONA
              </span>
              <div className="w-10 h-[2px] bg-blue-primary/50 rounded-[2px]"></div>
            </div>

            <h2
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-sora font-bold text-white leading-[1.15] tracking-[-0.02em] mt-3.5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', transitionDuration: '0.6s', transitionDelay: '0.1s' }}
            >
              Do primeiro "oi" à resposta enviada
            </h2>

            <p
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-inter text-base font-normal text-white/55 leading-[1.6] mt-3.5 max-w-[520px] mx-auto"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.2s' }}
            >
              A IA trabalha nos bastidores de cada conversa. Quem decide e envia continua sendo sempre a sua equipe.
            </p>
          </div>

          <div className="steps-container grid grid-cols-1 md:grid-cols-4 gap-0">
            {STEPS_DATA.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <React.Fragment key={step.id}>
                  {index > 0 && (
                    <div className="md:hidden w-full py-4 flex justify-center">
                      <div className="w-[2px] h-10 border-l-2 border-dashed border-blue-primary/25"></div>
                    </div>
                  )}
                  <div
                    ref={scrollRef}
                    className="scroll-animate transition-fade-slide-up step-card-group flex flex-col items-center text-center px-6 relative"
                    style={{ transitionDuration: '0.6s', transitionDelay: `${0.1 + index * 0.15}s` }}
                  >
                    <div className="relative mb-7">
                      <div className="step-icon-container w-[80px] h-[80px] rounded-full bg-blue-primary/10 border border-blue-primary/20 flex items-center justify-center relative z-10 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-blue-primary" />
                      </div>
                      <div className="absolute top-[-4px] right-[-4px] w-6 h-6 rounded-full bg-blue-primary text-white font-sora text-[0.72rem] font-bold flex items-center justify-center border-2 border-[#0A0A0A] z-20">
                        {step.id}
                      </div>
                    </div>
                    <h4 className="font-sora font-semibold text-[1.1rem] text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="font-inter text-[0.9rem] text-white/55 leading-[1.65] max-w-[240px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO FUNCIONALIDADES */}
      <section
        id="funcionalidades"
        className="w-full bg-[#F5F5F0] border-t border-black/5"
        style={{ scrollMarginTop: '80px', padding: '120px 0' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-[64px] flex flex-col items-center">
            <div
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up flex items-center gap-4"
              style={{ transitionDuration: '0.5s', transitionDelay: '0s' }}
            >
              <div className="w-10 h-[2px] bg-blue-primary rounded-[2px]"></div>
              <span className="font-inter text-[0.75rem] font-semibold tracking-[0.12em] text-blue-primary uppercase">
                FUNCIONALIDADES
              </span>
              <div className="w-10 h-[2px] bg-blue-primary rounded-[2px]"></div>
            </div>

            <h2
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-sora font-bold text-[#1A1A1A] leading-[1.15] tracking-[-0.02em] mt-3.5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', transitionDuration: '0.6s', transitionDelay: '0.1s' }}
            >
              Um copiloto de IA para cada conversa
            </h2>

            <p
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-inter text-base font-normal text-[#6B7280] leading-[1.6] mt-3.5 max-w-[520px] mx-auto"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.2s' }}
            >
              A IA cuida do trabalho repetitivo. Sua equipe cuida do relacionamento com o cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES_DATA.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  ref={scrollRef}
                  className="scroll-animate transition-fade-slide-up feature-card p-7 px-6"
                  style={{ transitionDuration: '0.5s', transitionDelay: `${0.05 + index * 0.05}s` }}
                >
                  <div className="feature-card-icon-wrapper">
                    <IconComponent className="w-[22px] h-[22px] text-blue-primary" />
                  </div>
                  <h4 className="font-sora font-semibold text-[0.95rem] tracking-tight text-[#1A1A1A] mb-2.5">
                    {feature.title}
                  </h4>
                  <p className="font-inter text-[0.85rem] text-[#6B7280] leading-[1.6]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO NÚMEROS */}
      <section
        id="numeros"
        className="w-full bg-blue-primary relative overflow-hidden"
        style={{ scrollMarginTop: '80px', padding: '100px 0' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 600px 600px at -10% 50%, rgba(255,255,255,0.06), transparent),
              radial-gradient(ellipse 500px 500px at 110% 50%, rgba(255,255,255,0.04), transparent)
            `,
            zIndex: 0
          }}
        ></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-[56px] flex flex-col items-center">
            <h2
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-sora font-bold text-white leading-[1.15] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', transitionDuration: '0.6s', transitionDelay: '0.1s' }}
            >
              IA copiloto, controle sempre com você
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] rounded-2xl overflow-hidden bg-white/12">
            <div
              ref={scrollRef}
              className="scroll-animate transition-fade-scale bg-transparent py-10 px-3 max-md:py-8 max-md:px-2 text-center transition-colors duration-300 hover:bg-white/5"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.1s' }}
            >
              <div className="font-sora font-bold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
                <CountUpNumber target={3} />
              </div>
              <p className="font-inter text-[0.9rem] text-white/72 mt-2.5 max-md:text-[0.85rem]">
                Sugestões de resposta por mensagem
              </p>
            </div>

            <div
              ref={scrollRef}
              className="scroll-animate transition-fade-scale bg-transparent py-10 px-3 max-md:py-8 max-md:px-2 text-center transition-colors duration-300 hover:bg-white/5"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.2s' }}
            >
              <div className="font-sora font-bold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
                <CountUpNumber target={29} />
              </div>
              <p className="font-inter text-[0.9rem] text-white/72 mt-2.5 max-md:text-[0.85rem]">
                Categorias de tópico identificadas pela IA
              </p>
            </div>

            <div
              ref={scrollRef}
              className="scroll-animate transition-fade-scale bg-transparent py-10 px-3 max-md:py-8 max-md:px-2 text-center transition-colors duration-300 hover:bg-white/5"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.3s' }}
            >
              <div className="font-sora font-bold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
                <CountUpNumber target={100} suffix="%" />
              </div>
              <p className="font-inter text-[0.9rem] text-white/72 mt-2.5 max-md:text-[0.85rem]">
                Das mensagens só saem com aprovação humana
              </p>
            </div>

            <div
              ref={scrollRef}
              className="scroll-animate transition-fade-scale bg-transparent py-10 px-3 max-md:py-8 max-md:px-2 text-center transition-colors duration-300 hover:bg-white/5"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.4s' }}
            >
              <div className="font-sora font-bold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
                <CountUpNumber target={24} suffix="h" />
              </div>
              <p className="font-inter text-[0.9rem] text-white/72 mt-2.5 max-md:text-[0.85rem]">
                Por dia com a IA de prontidão pra sua equipe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FAQ */}
      <section
        id="faq"
        className="w-full bg-[#FAF9F6] border-t border-black/5"
        style={{ scrollMarginTop: '80px', padding: '120px 0' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-[80px] items-start">
          <div className="md:col-span-5 md:sticky md:top-[100px] flex flex-col items-start">
            <div
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-left flex items-center gap-3"
              style={{ transitionDuration: '0.6s', transitionDelay: '0s' }}
            >
              <div className="w-8 h-[2px] bg-blue-primary"></div>
              <span className="font-inter text-[0.75rem] font-semibold tracking-[0.12em] text-blue-primary uppercase">
                FAQ
              </span>
            </div>

            <h2
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-left font-sora font-bold text-[#1A1A1A] leading-[1.2] tracking-[-0.02em] mt-3.5"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', transitionDuration: '0.6s', transitionDelay: '0.1s' }}
            >
              Dúvidas sobre o IA WhatsApp
            </h2>

            <p
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-left font-inter text-[0.9rem] text-[#6B7280] leading-[1.6] mt-3"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.15s' }}
            >
              Não encontrou o que procura? Fale diretamente com nossa equipe.
            </p>

            <a
              ref={scrollRef}
              href="#cta-final"
              className="scroll-animate transition-fade-scale btn inline-flex items-center gap-2 bg-transparent border border-blue-primary text-blue-primary px-5 py-2.5 rounded-lg font-medium text-[0.875rem] mt-6 transition-all duration-250 hover:bg-blue-primary hover:text-white"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.2s' }}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Falar com consultor
            </a>
          </div>

          <div className="md:col-span-7 flex flex-col gap-3 w-full">
            {FAQ_DATA.map((item, index) => (
              <div
                key={item.id}
                ref={scrollRef}
                className="scroll-animate transition-fade-slide-up"
                style={{ transitionDuration: '0.4s', transitionDelay: `${0.05 + index * 0.05}s` }}
              >
                <AccordionItem
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={faqOpenIndex === item.id}
                  onToggle={() => handleFaqToggle(item.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO CTA FINAL */}
      <section
        id="cta-final"
        className="w-full bg-dark-black relative overflow-hidden section-dark"
        style={{ scrollMarginTop: '80px', padding: '140px 0' }}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute left-[-10%] top-[-10%] w-[80%] h-[120%] cta-mesh-animated-1"
            style={{ background: 'radial-gradient(ellipse 700px 500px at center, rgba(37,99,235,0.18), transparent)', willChange: 'transform' }}
          ></div>
          <div
            className="absolute right-[-10%] bottom-[-10%] w-[80%] h-[120%] cta-mesh-animated-2"
            style={{ background: 'radial-gradient(ellipse 600px 600px at center, rgba(37,99,235,0.12), transparent)', willChange: 'transform' }}
          ></div>
        </div>

        <div className="absolute inset-0 cta-dot-grid pointer-events-none z-1"></div>

        <div
          className="absolute left-[-120px] top-1/2 w-[400px] h-[400px] rounded-full border border-blue-primary/12 pointer-events-none z-1 cta-circle-cw"
          style={{ transformOrigin: 'center center' }}
        ></div>
        <div
          className="absolute right-[-150px] top-1/2 w-[500px] h-[500px] rounded-full border border-blue-primary/8 pointer-events-none z-1 cta-circle-ccw"
          style={{ transformOrigin: 'center center' }}
        ></div>

        <div className="max-w-[860px] mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <div
            ref={scrollRef}
            className="scroll-animate transition-fade-scale inline-flex items-center gap-2 bg-blue-primary/12 border border-blue-primary/25 px-4.5 py-1.5 rounded-full mb-7"
            style={{ transitionDuration: '0.5s', transitionDelay: '0s' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span className="font-inter text-[0.8rem] font-semibold text-[#60A5FA]">
              Comece hoje mesmo
            </span>
          </div>

          <h2
            ref={scrollRef}
            className="scroll-animate transition-fade-slide-up font-sora font-bold text-white leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', transitionDuration: '0.7s', transitionDelay: '0.15s' }}
          >
            Pronto para atender melhor <span className="highlight-text-gradient bg-gradient-to-r from-[#60A5FA] to-blue-primary bg-clip-text text-transparent">sem perder o controle</span>?
          </h2>

          <p
            ref={scrollRef}
            className="scroll-animate transition-fade-slide-up font-inter text-[1.05rem] text-white/60 leading-[1.7] max-w-[560px] mb-10"
            style={{ transitionDuration: '0.6s', transitionDelay: '0.3s' }}
          >
            Fale agora com um consultor e veja como o IA WhatsApp pode acelerar o atendimento da sua equipe. Sem compromisso.
          </p>

          <div
            ref={scrollRef}
            className="scroll-animate transition-fade-slide-up flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto items-center"
            style={{ transitionDuration: '0.6s', transitionDelay: '0.45s' }}
          >
            <a
              href="#"
              className="btn btn-shimmer inline-flex items-center justify-center gap-2.5 bg-blue-primary text-white px-9 py-4 rounded-xl font-semibold text-[1rem] tracking-wide transition-all duration-300 hover:bg-blue-dark hover:-translate-y-[3px] hover:shadow-[0_12px_36px_rgba(37,99,235,0.45)] active:translate-y-[-1px] active:shadow-md w-full sm:w-auto text-center"
            >
              <MessageCircle className="w-[18px] h-[18px]" />
              Fale com um Consultor
            </a>
            <a
              href="/"
              className="btn inline-flex items-center justify-center gap-2.5 bg-transparent border border-white/20 text-white/80 px-9 py-4 rounded-xl font-semibold text-[1rem] tracking-wide transition-all duration-200 hover:bg-white/6 hover:border-white/40 hover:text-white w-full sm:w-auto text-center"
            >
              Voltar para o site principal
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div
            ref={scrollRef}
            className="scroll-animate transition-fade-slide-up mt-8 flex flex-row flex-wrap justify-center items-center gap-x-5 gap-y-2 text-[0.82rem] text-white/60 font-inter"
            style={{ transitionDuration: '0.5s', transitionDelay: '0.6s' }}
          >
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-white/40" />
              <span>Sem compromisso</span>
            </div>
            <span className="text-white/20 select-none hidden sm:inline-block">•</span>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-white/40" />
              <span>Atendimento humano</span>
            </div>
            <span className="text-white/20 select-none hidden sm:inline-block">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-white/40" />
              <span>Resposta em até 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FOOTER */}
      <footer className="w-full bg-[#0F0F0F] border-t border-white/[0.06] pt-[56px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.04]">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Logo" className="w-14 h-14 object-contain" />
              <span className="font-sora font-semibold text-white text-[0.95rem]">Crescendo com IA</span>
            </a>
            <div className="flex items-center gap-6 font-inter text-[0.875rem]">
              <a href="/" className="text-white/55 transition-all duration-200 hover:text-white hover:translate-x-0.5">Site principal</a>
              <a href="/#plataformas" className="text-white/55 transition-all duration-200 hover:text-white hover:translate-x-0.5">Todas as plataformas</a>
              <a href="/#faq" className="text-white/55 transition-all duration-200 hover:text-white hover:translate-x-0.5">FAQ geral</a>
            </div>
          </div>

          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[0.8rem] text-white/55 font-inter">
            <p>© 2026 Crescendo com IA. Todos os direitos reservados.</p>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-white/35" />
              <span>Isolamento total de dados por empresa</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-7 right-7 w-11 h-11 rounded-[12px] bg-blue-primary border border-white/10 shadow-[0_4px_16px_rgba(37,99,235,0.4)] flex items-center justify-center cursor-pointer z-[999] transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0 visible hover:bg-blue-dark hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(37,99,235,0.6)] active:translate-y-0 active:shadow-md' : 'opacity-0 translate-y-2 invisible'}`}
        aria-label="Voltar ao topo"
      >
        <ChevronUp className="w-5 h-5 text-white" />
      </button>

    </div>
  );
}
