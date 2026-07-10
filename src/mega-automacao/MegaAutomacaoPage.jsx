import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Zap,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Check,
  ExternalLink,
  Lock,
  Users,
  Clock,
  Calendar,
  RefreshCw,
  MessageCircle,
  PenTool,
  Image,
  Video,
  FlaskConical,
  Award,
  FileText,
  Building2,
  Share2,
  ShieldCheck,
  Palette,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Music2,
  Cloud,
  Youtube,
  ChevronUp,
  ArrowLeft
} from 'lucide-react';
import { CountUpNumber, AccordionItem, useScrollAnimation } from '../shared/Animations.jsx';

const STEPS_DATA = [
  {
    id: 1,
    icon: FileText,
    title: 'Cole seu plano de conteúdo',
    description: 'Lista, tabela ou texto livre — qualquer formato. A IA organiza tudo em uma grade editável com datas e temas.'
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'A IA cria todos os posts',
    description: 'Arte e legenda geradas em lote, no estilo e nas cores da sua marca, respeitando o limite de cada rede social.'
  },
  {
    id: 3,
    icon: Check,
    title: 'Aprovação em lote (opcional)',
    description: 'Revise tudo de uma vez antes de ir ao ar, ou deixe o Autopilot publicar sozinho do início ao fim.'
  },
  {
    id: 4,
    icon: Calendar,
    title: 'Publicação no melhor horário',
    description: 'A IA agenda com base no engajamento real da sua conta e publica sozinha, com aviso 7 dias antes do plano acabar.'
  }
];

const FEATURES_DATA = [
  {
    id: 'studio',
    icon: Palette,
    title: 'Studio com Dois Modos de Criação',
    description: 'A IA pinta a arte inteira com o texto embutido, ou usa uma foto real de fundo com texto editável em canvas. Sua logo é sempre sobreposta com nitidez, nunca desenhada pela IA.'
  },
  {
    id: 'video',
    icon: Video,
    title: 'Vídeos com IA',
    description: '5 modelos de geração de vídeo (Kling 2.6 Pro, Veo 3, Sora 2 e mais), a partir de texto ou imagem, com áudio em português.'
  },
  {
    id: 'postlab',
    icon: FlaskConical,
    title: 'Post Lab — Testes A/B',
    description: '10 presets de filtro e legendas alternativas geradas por IA, cada variação com uma nota de performance prevista.'
  },
  {
    id: 'analytics',
    icon: Award,
    title: 'Analytics e Social Score',
    description: 'Uma pontuação de 0 a 100 calculada a partir da sua presença real nas redes, com conquistas desbloqueáveis conforme você cresce.'
  },
  {
    id: 'fontes',
    icon: RefreshCw,
    title: 'Fontes de Conteúdo',
    description: 'Transforme um artigo, vídeo do YouTube, tweet, PDF ou áudio em post pronto — a IA extrai e reescreve para cada rede.'
  },
  {
    id: 'marcas',
    icon: Building2,
    title: 'Perfis de Marca',
    description: 'Cadastre tom de voz, cores, logo e público de cada marca. Toda IA da plataforma usa esse perfil como base.'
  },
  {
    id: 'multirede',
    icon: Share2,
    title: 'Publicação Multi-Rede',
    description: 'Publique o mesmo ciclo de conteúdo em até 9 redes sociais ao mesmo tempo, com o texto adaptado a cada uma.'
  },
  {
    id: 'equipe',
    icon: ShieldCheck,
    title: 'Equipe e Segurança',
    description: 'Vários usuários por empresa com papéis de dono, admin e editor, e dados isolados por conta — cada empresa só vê os próprios.'
  }
];

const NETWORKS_DATA = [
  { id: 'instagram', icon: Instagram, name: 'Instagram' },
  { id: 'facebook', icon: Facebook, name: 'Facebook' },
  { id: 'twitter', icon: Twitter, name: 'Twitter / X' },
  { id: 'linkedin', icon: Linkedin, name: 'LinkedIn' },
  { id: 'tiktok', icon: Music2, name: 'TikTok' },
  { id: 'pinterest', icon: Image, name: 'Pinterest' },
  { id: 'threads', icon: MessageCircle, name: 'Threads' },
  { id: 'bluesky', icon: Cloud, name: 'Bluesky' },
  { id: 'youtube', icon: Youtube, name: 'YouTube' }
];

const FAQ_DATA = [
  {
    id: 0,
    question: 'A IA publica sozinha, sem eu revisar nada?',
    answer: 'Você decide. A aprovação em lote vem ligada por padrão, então você revê tudo antes de ir ao ar. Se preferir, pode desligar essa etapa e deixar o Autopilot publicar do início ao fim sem intervenção.'
  },
  {
    id: 1,
    question: 'Preciso desenhar ou escrever alguma coisa?',
    answer: 'Não. Você só cola o plano de conteúdo (mesmo que seja uma lista simples de temas e datas). A IA cria a arte, escreve a legenda e ajusta tudo ao estilo da sua marca automaticamente.'
  },
  {
    id: 2,
    question: 'Como a plataforma escolhe o melhor horário para postar?',
    answer: 'A IA analisa o histórico real de engajamento da sua conta — dia da semana, horário, tipo de conteúdo — e agenda a publicação no momento com maior chance de alcance. Sem histórico suficiente, usa heurísticas de mercado por plataforma.'
  },
  {
    id: 3,
    question: 'Consigo usar em mais de uma rede social ao mesmo tempo?',
    answer: 'Sim. A Mega Automação publica em até 9 redes simultaneamente — Instagram, Facebook, Twitter/X, LinkedIn, TikTok, Pinterest, Threads, Bluesky e YouTube — adaptando o texto ao limite de caracteres de cada uma.'
  }
];

export default function MegaAutomacaoPage() {
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
            <a href="#redes" className="nav-link link-hover-underline">Redes</a>
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
          <a href="#redes" onClick={handleLinkClick} className="mobile-nav-link ml-4">Redes</a>
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
              <PenTool className="w-3.5 h-3.5 text-blue-primary" />
              <span className="hero-badge text-blue-primary uppercase tracking-wider">
                Mega Automação de Post
              </span>
            </div>

            <h1 className="animate-hero anim-headline hero-headline mb-5 max-w-[640px]">
              Cole seu plano de conteúdo. A <span className="highlight-text-gradient">IA cria, agenda e publica</span> sozinha
            </h1>

            <p className="animate-hero anim-sub hero-sub mb-8 max-w-[540px]">
              O Autopilot gera a arte e a legenda de cada post, escolhe o melhor horário com base no seu engajamento real e publica automaticamente em até 9 redes sociais — sem você precisar abrir o aplicativo.
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
                <Share2 className="w-3.5 h-3.5 text-blue-primary" />
                <span>Publica em 9 redes sociais ao mesmo tempo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dashboard mockup */}
          <div className="animate-hero anim-mockup hidden lg:col-span-5 lg:flex justify-end pr-4">
            <div className="dashboard-float w-full max-w-[380px] bg-white rounded-[20px] border border-[#D1D5DB] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.35),0_0_40px_rgba(37,99,235,0.06)]">
              <div className="bg-[#1A1A1A] p-3.5 px-4 flex items-center justify-between font-inter border-b border-black/5">
                <div className="flex items-center gap-2 text-white">
                  <PenTool className="w-4 h-4 text-blue-primary" />
                  <span className="font-sora font-semibold text-[0.85rem]">Mega Post IA · Autopilot</span>
                </div>
                <div className="bg-[#022c22] border border-[#166534] text-[#4ADE80] rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] dot-pulse"></span>
                  <span>IA Ativa</span>
                </div>
              </div>

              <div className="p-4 bg-white flex flex-col font-inter">
                <div className="text-[0.72rem] font-semibold text-[#9CA3AF] tracking-[0.08em] uppercase mb-3">
                  Ciclo desta semana
                </div>

                <div className="bg-[#F3F4F6] rounded-xl p-3 flex gap-3 items-start mb-2.5">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <Image className="w-[18px] h-[18px] text-white opacity-70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[0.8rem] text-[#1A1A1A] truncate">Dica do dia para negócios</div>
                    <div className="text-[0.72rem] text-[#9CA3AF] mt-1">Seg, 14h00 · Instagram + LinkedIn</div>
                    <div className="inline-block bg-[#DCFCE7] text-[#16A34A] rounded-full px-2 py-0.5 text-[0.68rem] font-semibold mt-2">
                      Publicado
                    </div>
                  </div>
                </div>

                <div className="bg-[#F3F4F6] rounded-xl p-3 flex gap-3 items-start mb-2.5">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#F97316] to-[#EF4444] flex items-center justify-center flex-shrink-0">
                    <Video className="w-[18px] h-[18px] text-white opacity-70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[0.8rem] text-[#1A1A1A] flex items-center gap-1">
                      Como a IA te ajuda
                      <Sparkles className="w-2.5 h-2.5 text-blue-primary" />
                    </div>
                    <div className="text-[0.72rem] text-[#9CA3AF] mt-1">Qua, 10h30 · melhor horário calculado</div>
                    <div className="inline-block bg-[#EFF6FF] text-blue-primary rounded-full px-2 py-0.5 text-[0.68rem] font-semibold mt-2">
                      Agendado
                    </div>
                  </div>
                </div>

                <div className="bg-[#F3F4F6] rounded-xl p-3 flex gap-3 items-start">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center flex-shrink-0 shimmer-bg"></div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[0.8rem] text-[#9CA3AF]">Gerando arte + legenda...</div>
                    <div className="inline-block bg-[#F3E8FF] text-[#7C3AED] rounded-full px-2 py-0.5 text-[0.68rem] font-semibold mt-2 flex items-center gap-1.5 w-max">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] dot-pulse"></span>
                      <span>Autopilot rodando</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F3F4F6] p-3 px-4 flex items-center justify-between border-t border-[#E5E7EB] font-inter">
                <div className="font-medium text-[0.78rem] text-[#6B7280]">9 redes conectadas</div>
                <button className="bg-blue-primary text-white rounded-lg px-3 py-1.5 text-[0.75rem] font-medium hover:bg-blue-dark transition-colors focus:outline-none">
                  + Ver plano
                </button>
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
              O Autopilot em 4 passos
            </h2>

            <p
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-inter text-base font-normal text-white/55 leading-[1.6] mt-3.5 max-w-[520px] mx-auto"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.2s' }}
            >
              Configura uma vez, esquece. Da colagem do plano até a publicação, tudo roda sozinho — mesmo com o navegador fechado.
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
              Tudo que sua presença digital precisa
            </h2>

            <p
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-inter text-base font-normal text-[#6B7280] leading-[1.6] mt-3.5 max-w-[520px] mx-auto"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.2s' }}
            >
              Da criação à publicação, cada etapa foi pensada para você não precisar entender de redes sociais para ter resultado nelas.
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

      {/* SEÇÃO REDES SOCIAIS */}
      <section
        id="redes"
        className="w-full bg-[#FAF9F6] border-t border-black/5"
        style={{ scrollMarginTop: '80px', padding: '100px 0' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-[56px] flex flex-col items-center">
            <div
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up flex items-center gap-4"
              style={{ transitionDuration: '0.5s', transitionDelay: '0s' }}
            >
              <div className="w-10 h-[2px] bg-blue-primary rounded-[2px]"></div>
              <span className="font-inter text-[0.75rem] font-semibold tracking-[0.12em] text-blue-primary uppercase">
                UM HUB, TODAS AS REDES
              </span>
              <div className="w-10 h-[2px] bg-blue-primary rounded-[2px]"></div>
            </div>

            <h2
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-sora font-bold text-[#1A1A1A] leading-[1.15] tracking-[-0.02em] mt-3.5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', transitionDuration: '0.6s', transitionDelay: '0.1s' }}
            >
              Publique em 9 redes sociais ao mesmo tempo
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {NETWORKS_DATA.map((network, index) => {
              const IconComponent = network.icon;
              return (
                <div
                  key={network.id}
                  ref={scrollRef}
                  className="scroll-animate transition-fade-scale platform-card flex flex-col items-center justify-center gap-2 py-6 px-2 text-center"
                  style={{ transitionDuration: '0.5s', transitionDelay: `${0.03 * index}s` }}
                >
                  <IconComponent className="w-6 h-6 text-blue-primary" />
                  <span className="font-inter text-[0.75rem] font-semibold text-[#374151]">
                    {network.name}
                  </span>
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
              Um motor de IA completo por trás de cada post
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] rounded-2xl overflow-hidden bg-white/12">
            <div
              ref={scrollRef}
              className="scroll-animate transition-fade-scale bg-transparent py-10 px-3 max-md:py-8 max-md:px-2 text-center transition-colors duration-300 hover:bg-white/5"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.1s' }}
            >
              <div className="font-sora font-bold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
                <CountUpNumber target={9} />
              </div>
              <p className="font-inter text-[0.9rem] text-white/72 mt-2.5 max-md:text-[0.85rem]">
                Redes sociais integradas
              </p>
            </div>

            <div
              ref={scrollRef}
              className="scroll-animate transition-fade-scale bg-transparent py-10 px-3 max-md:py-8 max-md:px-2 text-center transition-colors duration-300 hover:bg-white/5"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.2s' }}
            >
              <div className="font-sora font-bold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
                <CountUpNumber target={8} />
              </div>
              <p className="font-inter text-[0.9rem] text-white/72 mt-2.5 max-md:text-[0.85rem]">
                Estilos de arte por IA
              </p>
            </div>

            <div
              ref={scrollRef}
              className="scroll-animate transition-fade-scale bg-transparent py-10 px-3 max-md:py-8 max-md:px-2 text-center transition-colors duration-300 hover:bg-white/5"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.3s' }}
            >
              <div className="font-sora font-bold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
                <CountUpNumber target={5} />
              </div>
              <p className="font-inter text-[0.9rem] text-white/72 mt-2.5 max-md:text-[0.85rem]">
                Modelos de vídeo com IA
              </p>
            </div>

            <div
              ref={scrollRef}
              className="scroll-animate transition-fade-scale bg-transparent py-10 px-3 max-md:py-8 max-md:px-2 text-center transition-colors duration-300 hover:bg-white/5"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.4s' }}
            >
              <div className="font-sora font-bold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
                <CountUpNumber target={100} suffix="" />
              </div>
              <p className="font-inter text-[0.9rem] text-white/72 mt-2.5 max-md:text-[0.85rem]">
                Social Score — meça sua presença digital
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
              Dúvidas sobre o Autopilot
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
            Pronto para colocar suas redes sociais no <span className="highlight-text-gradient bg-gradient-to-r from-[#60A5FA] to-blue-primary bg-clip-text text-transparent">piloto automático</span>?
          </h2>

          <p
            ref={scrollRef}
            className="scroll-animate transition-fade-slide-up font-inter text-[1.05rem] text-white/60 leading-[1.7] max-w-[560px] mb-10"
            style={{ transitionDuration: '0.6s', transitionDelay: '0.3s' }}
          >
            Fale agora com um consultor e veja como a Mega Automação de Post pode assumir a criação e publicação do seu conteúdo. Sem compromisso.
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
              <span>Dados isolados por empresa</span>
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
