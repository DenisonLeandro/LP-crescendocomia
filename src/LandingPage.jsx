import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Zap,
  ArrowRight,
  ChevronDown,
  Star,
  Menu,
  X,
  Building2,
  TrendingUp,
  Check,
  MessageSquare,
  PenTool,
  ExternalLink,
  Lock,
  Users,
  BarChart3,
  Clock,
  Calendar,
  RefreshCw,
  MoreVertical,
  Send,
  Image,
  CheckCheck,
  MessageCircle,
  Settings,
  Rocket,
  Brain,
  LayoutDashboard,
  Smartphone,
  Headphones,
  Globe,
  Shield,
  Instagram,
  Linkedin,
  Mail,
  ChevronUp
} from 'lucide-react';
import { CountUpNumber, AccordionItem, useScrollAnimation } from './shared/Animations.jsx';

const STEPS_DATA = [
  {
    id: 1,
    icon: 'MessageCircle',
    title: 'Fale com um consultor',
    description: 'Entre em contato e nos conte sobre seu negócio. Em minutos você entende qual plataforma é ideal para você.'
  },
  {
    id: 2,
    icon: 'Settings',
    title: 'Nossa equipe configura tudo',
    description: 'Sem precisar instalar nada ou entender de tecnologia. Nossa equipe cuida de toda a configuração inicial por você.'
  },
  {
    id: 3,
    icon: 'Rocket',
    title: 'Seu negócio no piloto automático',
    description: 'Pronto. Sua IA já está atendendo clientes e criando conteúdo enquanto você foca no que importa: crescer.'
  }
];

const FEATURES_DATA = [
  {
    id: 'brain',
    icon: 'Brain',
    title: 'IA que Aprende com Você',
    description: 'Quanto mais você usa, mais inteligente ela fica. As sugestões de resposta e os posts criados ficam cada vez mais alinhados com o seu tom de voz e segmento.'
  },
  {
    id: 'dashboard',
    icon: 'LayoutDashboard',
    title: 'Controle Total em Um Painel',
    description: 'Acompanhe atendimentos em andamento, posts publicados e métricas importantes em tempo real. Tudo centralizado, sem precisar abrir vários aplicativos.'
  },
  {
    id: 'smartphone',
    icon: 'Smartphone',
    title: 'Acesse de Qualquer Lugar',
    description: 'Plataformas totalmente responsivas. Gerencie seu atendimento e seu conteúdo direto do celular, onde você estiver.'
  },
  {
    id: 'clock',
    icon: 'Clock',
    title: 'Economia de Horas por Semana',
    description: 'O que levava horas de trabalho manual, agora leva minutos com a IA. Mais tempo para você focar no que realmente faz seu negócio crescer.'
  },
  {
    id: 'headphones',
    icon: 'Headphones',
    title: 'Suporte Humanizado de Verdade',
    description: 'Nada de robô te atendendo quando você mais precisa. Nosso time está disponível para resolver qualquer dúvida com rapidez e atenção.'
  },
  {
    id: 'globe',
    icon: 'Globe',
    title: 'Feito para o Empresário Brasileiro',
    description: 'Interface em português, suporte em português, linguagem simples. Criamos nossas plataformas entendendo a realidade do mercado brasileiro.'
  }
];

const TESTIMONIALS_DATA = [
  {
    id: 1,
    letter: 'C',
    text: 'Antes eu passava horas respondendo no WhatsApp. Hoje a IA sugere as respostas e minha equipe só aprova. Triplicamos o número de atendimentos.',
    author: 'Carlos M.',
    role: 'Proprietário de Clínica Estética'
  },
  {
    id: 2,
    letter: 'F',
    text: 'O Mega Post criou o conteúdo do meu Instagram por 30 dias seguidos sem eu precisar pensar em nada. Meu engajamento dobrou.',
    author: 'Fernanda L.',
    role: 'Advogada e Empreendedora'
  },
  {
    id: 3,
    letter: 'R',
    text: 'Achei que ia ser difícil de usar, mas em dois dias já estava tudo funcionando. O suporte deles é diferente , falam como gente de verdade.',
    author: 'Ricardo T.',
    role: 'Dono de Barbearia'
  }
];

const FAQ_DATA = [
  {
    id: 0,
    question: 'Preciso entender de tecnologia para usar as plataformas?',
    answer: 'Não. Nossas plataformas foram criadas para serem simples e intuitivas. Se você sabe usar o WhatsApp no dia a dia, você já sabe usar nossa plataforma de atendimento. Nossa equipe também configura tudo para você no início , sem complicação.'
  },
  {
    id: 1,
    question: 'A IA responde sozinha pelos meus clientes no WhatsApp?',
    answer: 'A IA sugere respostas inteligentes com base no histórico e no contexto da conversa, mas quem envia é sempre um atendente humano. Você tem controle total. Nada é enviado automaticamente sem aprovação da sua equipe.'
  },
  {
    id: 2,
    question: 'A plataforma funciona para qualquer tipo de negócio?',
    answer: 'Sim. Temos clientes de segmentos completamente diferentes , barbearias, clínicas de estética, escritórios de advocacia, imobiliárias, academias, e-commerces, restaurantes e muito mais. Se o seu negócio usa WhatsApp para atender clientes ou precisa de presença nas redes sociais, nossas plataformas funcionam para você.'
  },
  {
    id: 3,
    question: 'Como funciona o acesso às plataformas?',
    answer: 'Após a contratação, nossa equipe realiza a configuração inicial e libera o acesso personalizado para o seu negócio. O processo leva até 48 horas e você não precisa fazer nada técnico. Entre em contato com um consultor para conhecer os planos disponíveis.'
  },
  {
    id: 4,
    question: 'Posso usar as duas plataformas ao mesmo tempo?',
    answer: 'Sim, e é exatamente assim que nossos clientes conseguem os melhores resultados. Enquanto o IA WhatsApp cuida do atendimento e relacionamento com clientes, o Mega Automação de Post mantém sua presença digital ativa. As duas plataformas se complementam perfeitamente.'
  },
  {
    id: 5,
    question: 'Existe suporte se eu tiver dúvidas após contratar?',
    answer: 'Sim. Nosso suporte é humanizado , você fala com pessoas reais, não com robôs. Nossa equipe está disponível para resolver qualquer dúvida, ensinar funcionalidades ou ajustar configurações sempre que precisar. Atendimento de verdade, sem enrolação.'
  }
];



export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollRef = useScrollAnimation();

  // Monitor page scroll to update Navbar appearance & show back-to-top button
  useEffect(() => {
    let tick = false;

    const handleScroll = () => {
      if (!tick) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 50);         // navbar blur
          setShowBackToTop(scrollY > 400);   // botão voltar ao topo
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

  // Bloquear scroll com menu mobile ativo
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
          
          {/* Left - Logo */}
          <a href="#" className="flex items-center group">
            <img src="/logo.svg" alt="Logo" className="w-16 h-16 object-contain" />
          </a>

          {/* Center - Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="nav-link link-hover-underline">Sobre</a>
            <a href="#plataformas" className="nav-link link-hover-underline">Plataformas</a>
            <a href="#como-funciona" className="nav-link link-hover-underline">Como Funciona</a>
            <a href="#faq" className="nav-link link-hover-underline">FAQ</a>
          </div>

          {/* Right - Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="#"
              className="btn inline-flex items-center justify-center bg-blue-primary text-white px-6 py-2.5 rounded-lg font-medium cursor-pointer transition-all duration-250 hover:bg-blue-dark hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(37,99,235,0.35)] active:translate-y-0"
            >
              Fale com um Consultor
            </a>
          </div>

          {/* Mobile Hamburger menu */}
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
        {/* Close Button */}
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-5 right-6 p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Vertical Links stack */}
        <div className="flex flex-col items-center gap-7">
          <a href="#sobre" onClick={handleLinkClick} className="mobile-nav-link ml-1">Sobre</a>
          <a href="#plataformas" onClick={handleLinkClick} className="mobile-nav-link ml-2">Plataformas</a>
          <a href="#como-funciona" onClick={handleLinkClick} className="mobile-nav-link ml-3">Como Funciona</a>
          <a href="#faq" onClick={handleLinkClick} className="mobile-nav-link ml-4">FAQ</a>
          
          <a 
            href="#"
            onClick={handleLinkClick}
            className="mobile-cta-btn btn inline-flex items-center justify-center bg-blue-primary text-white px-8 py-3.5 rounded-lg w-full max-w-[320px] font-semibold hover:bg-blue-dark transition-colors mt-4 text-center shadow-lg shadow-blue-primary/20"
          >
            Fale com um Consultor
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full hero-section-height flex items-center pt-[72px] pb-12 overflow-hidden bg-black z-10 section-dark">
        
        {/* Background Layers */}
        <div className="hero-mesh">
          <div className="mesh-gradient mesh-gradient-1"></div>
          <div className="mesh-gradient mesh-gradient-2"></div>
          <div className="mesh-gradient mesh-gradient-3"></div>
        </div>

        {/* Embedded Video Hero Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          style={{ mixBlendMode: 'screen', zIndex: 0 }}
        >
          <source src="/video-hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-grain"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 to-[#0A0A0A]/60 pointer-events-none z-1"></div>

        {/* Hero Content Grid */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copywriting */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <div className="animate-hero anim-badge inline-flex items-center gap-1.5 bg-blue-primary/10 border border-blue-primary/20 px-4 py-1.5 rounded-full mb-6">
              <Zap className="w-3.5 h-3.5 text-blue-primary" />
              <span className="hero-badge text-blue-primary uppercase tracking-wider">
                Plataformas com Inteligência Artificial
              </span>
            </div>

            {/* Headline H1 */}
            <h1 className="animate-hero anim-headline hero-headline mb-5 max-w-[620px]">
              Seu Negócio no Piloto Automático com <span className="highlight-text-gradient">Inteligência Artificial</span>
            </h1>

            {/* Sub-headline */}
            <p className="animate-hero anim-sub hero-sub mb-8 max-w-[520px]">
              Automatize seu atendimento no WhatsApp e suas postagens nas redes sociais. Mais clientes, menos trabalho manual.
            </p>

            {/* Buttons Group */}
            <div className="animate-hero anim-buttons flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
              <a 
                href="#"
                className="btn inline-flex items-center justify-center gap-2 bg-blue-primary text-white px-7 py-3.5 rounded-lg w-full sm:w-auto font-medium transition-all duration-300 hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] active:translate-y-0 active:shadow-md"
              >
                Fale com um Consultor
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#plataformas"
                className="btn inline-flex items-center justify-center gap-2 bg-transparent border border-white/25 text-white px-7 py-3.5 rounded-lg w-full sm:w-auto font-medium transition-all duration-200 hover:bg-white/8 hover:border-white/50"
              >
                Conheça as Plataformas
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Social Proof Mini */}
            <div className="animate-hero anim-proof flex flex-col sm:flex-row items-center gap-3 mt-10">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-black bg-[#374151] flex items-center justify-center text-[10px] font-bold text-gray-300">A</div>
                <div className="w-8 h-8 rounded-full border-2 border-black bg-[#6B7280] flex items-center justify-center text-[10px] font-bold text-gray-200">M</div>
                <div className="w-8 h-8 rounded-full border-2 border-black bg-[#9CA3AF] flex items-center justify-center text-[10px] font-bold text-gray-800">F</div>
                <div className="w-8 h-8 rounded-full border-2 border-black bg-[#D1D5DB] flex items-center justify-center text-[10px] font-bold text-gray-800">J</div>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-1.5 gap-x-2.5 font-inter text-sm text-white/60">
                <span>Mais de 500 empresários já usam</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 hidden sm:inline-block"></span>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
                  <span className="font-semibold text-white">4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Smartphone Mockup */}
          <div className="animate-hero anim-mockup hidden lg:col-span-5 lg:flex justify-end pr-4">
            <div className="mockup-3d-float w-[340px] p-5 rounded-[24px] bg-white/[0.04] border border-white/[0.07] backdrop-blur-md shadow-[0_25px_60px_rgba(0,0,0,0.55),0_0_40px_rgba(37,99,235,0.06)]">
              {/* Smartphone Chat Simulator Header */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4 font-inter">
                <div className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white text-xs font-semibold">
                  C
                </div>
                <div>
                  <h4 className="font-sora font-semibold text-xs text-white">Cliente</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                    <span className="text-[10px] text-gray-400 font-medium">online</span>
                  </div>
                </div>
              </div>

              {/* Chat simulated bubbles stack */}
              <div className="space-y-3.5 min-h-[290px] font-inter text-xs">
                
                {/* Bubble 1 (Received) */}
                <div className="chat-bubble-entry bubble-delay-1 flex flex-col items-start">
                  <div className="bg-[#1A1A1A] border border-white/10 text-white/90 py-2.5 px-3.5 rounded-2xl rounded-tl-none max-w-[85%] leading-relaxed">
                    <p>Olá, quanto custa o serviço?</p>
                  </div>
                </div>

                {/* Bubble 2 (Sent) */}
                <div className="chat-bubble-entry bubble-delay-2 flex flex-col items-end">
                  <div className="bg-blue-primary text-white py-2.5 px-3.5 rounded-2xl rounded-tr-none max-w-[85%] leading-relaxed shadow-md shadow-blue-primary/10">
                    <p>Olá! Temos planos a partir de valores ideais para o seu negócio.</p>
                  </div>
                </div>

                {/* Bubble 3 (Special IA Suggestion Card) */}
                <div className="chat-bubble-entry bubble-delay-3 flex flex-col items-start">
                  <div className="w-full bg-gradient-to-br from-blue-primary/15 to-blue-primary/5 border border-blue-primary/20 p-3.5 rounded-2xl rounded-tl-none shadow-lg">
                    {/* Suggestion header */}
                    <div className="flex items-center gap-1.5 text-blue-primary mb-2 font-inter font-semibold text-[10px] tracking-wider uppercase">
                      <Sparkles className="w-3.5 h-3.5 fill-[#2563EB]/10" />
                      Sugestão IA
                    </div>
                    {/* Suggestion body copy */}
                    <p className="text-gray-300 leading-relaxed font-medium">
                      Com base no perfil do cliente, sugiro oferecer o Plano Premium com 20% de desconto.
                    </p>
                    {/* Interactive mini controls */}
                    <div className="mt-3 flex gap-2">
                      <button className="bg-blue-primary text-white py-1.5 px-3 rounded-md font-semibold text-[10px] hover:bg-blue-dark transition-colors focus:outline-none">
                        Usar resposta
                      </button>
                      <button className="bg-transparent border border-white/10 text-gray-400 py-1.5 px-3 rounded-md font-medium text-[10px] hover:bg-white/5 hover:text-white transition-colors focus:outline-none">
                        Editar
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section 
        id="sobre" 
        className="w-full bg-[#F5F5F0] border-t border-black/5" 
        style={{ scrollMarginTop: '80px', padding: '120px 0' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
          
          {/* Coluna Esquerda - Visual Placeholder (topo no mobile) */}
          <div className="order-1 md:order-1 flex justify-center w-full">
            <div 
              ref={scrollRef} 
              className="scroll-animate transition-fade-slide-left relative w-full aspect-[4/5] max-w-[400px]"
              style={{ transitionDuration: '0.7s', transitionDelay: '0s' }}
            >
              {/* Card principal */}
              <div 
                className="w-full h-full rounded-[24px] overflow-hidden flex flex-col items-center justify-center gap-4"
                style={{ 
                  background: 'linear-gradient(145deg, #EBF4FF 0%, #DBEAFE 60%, #EDE9FE 100%)',
                  boxShadow: '0 20px 60px rgba(37, 99, 235, 0.12), 0 4px 16px rgba(0,0,0,0.06)'
                }}
              >
                <Building2 className="w-12 h-12 text-blue-primary opacity-40" />
                <span className="font-inter text-[0.85rem] font-normal text-[#6B7280] opacity-60">
                  Foto da equipe em breve
                </span>
              </div>

              {/* Floating element 1 (bottom right card) */}
              <div 
                ref={scrollRef}
                className="scroll-animate transition-fade-scale absolute bottom-[-10px] sm:bottom-[-20px] right-0 sm:right-[-20px] bg-white rounded-[16px] p-4 pr-5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-blue-primary/[0.08] float-sutil-anim flex items-center gap-3"
                style={{ transitionDuration: '0.5s', transitionDelay: '0.2s', zIndex: 10 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981] flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <div className="font-sora font-bold text-base text-[#1A1A1A] leading-tight">+500 companies</div>
                  <div className="font-inter text-xs text-[#6B7280] leading-none mt-1">atendidas</div>
                </div>
              </div>

              {/* Floating element 2 - Badge (top left) */}
              <div 
                className="absolute top-[-12px] left-[24px] bg-blue-primary text-white rounded-full px-4 py-1.5 font-inter text-[0.78rem] font-semibold shadow-[0_4px_12px_rgba(37,99,235,0.3)]"
                style={{ zIndex: 10 }}
              >
                Desde 2024
              </div>
            </div>
          </div>

          {/* Coluna Direita - Texto */}
          <div className="order-2 md:order-2 flex flex-col items-start w-full">
            {/* Eyebrow / Tag */}
            <div 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up flex items-center gap-3"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.1s' }}
            >
              <div className="w-8 h-[2px] bg-blue-primary rounded-[2px]"></div>
              <span className="font-inter text-[0.75rem] font-semibold tracking-[0.12em] text-blue-primary uppercase">
                SOBRE NÓS
              </span>
            </div>

            {/* Headline H2 */}
            <h2 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-sora font-bold text-[#1A1A1A] leading-[1.15] tracking-[-0.02em] mt-4 max-w-[520px]"
              style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', transitionDuration: '0.6s', transitionDelay: '0.2s' }}
            >
              Transformamos negócios com o poder da Inteligência Artificial
            </h2>

            {/* Parágrafo 1 */}
            <p 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-inter text-base font-normal text-[#6B7280] leading-[1.7] mt-5 max-w-[480px]"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.3s' }}
            >
              A Crescendo com IA nasceu para simplificar a rotina de empresários que querem crescer sem complicação. Nossas plataformas usam inteligência artificial de verdade para automatizar o que mais consome tempo no seu dia.
            </p>

            {/* Parágrafo 2 */}
            <p 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-inter text-base font-semibold text-[#1A1A1A] leading-[1.7] mt-3 max-w-[480px]"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.35s' }}
            >
              Menos trabalho manual. Mais clientes atendidos. Mais conteúdo publicado. Sem precisar entender de tecnologia.
            </p>

            {/* Lista de Benefícios */}
            <div className="flex flex-col gap-4 mt-8 w-full">
              {/* Item 1 */}
              <div 
                ref={scrollRef}
                className="scroll-animate transition-fade-slide-right flex items-start gap-3.5"
                style={{ transitionDuration: '0.5s', transitionDelay: '0.4s' }}
              >
                <div className="w-6 h-6 rounded-full bg-blue-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-blue-primary" style={{ strokeWidth: 3 }} />
                </div>
                <div>
                  <h4 className="font-inter text-[0.95rem] font-bold text-[#1A1A1A]">Tecnologia acessível para qualquer segmento</h4>
                  <p className="font-inter text-[0.875rem] font-normal text-[#6B7280] leading-[1.5] mt-0.5">Não importa o tamanho ou área do seu negócio. Se você tem clientes, temos solução.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div 
                ref={scrollRef}
                className="scroll-animate transition-fade-slide-right flex items-start gap-3.5"
                style={{ transitionDuration: '0.5s', transitionDelay: '0.5s' }}
              >
                <div className="w-6 h-6 rounded-full bg-blue-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-blue-primary" style={{ strokeWidth: 3 }} />
                </div>
                <div>
                  <h4 className="font-inter text-[0.95rem] font-bold text-[#1A1A1A]">Plataformas intuitivas e fáceis de usar</h4>
                  <p className="font-inter text-[0.875rem] font-normal text-[#6B7280] leading-[1.5] mt-0.5">Interface simples, sem complicação. Se você usa WhatsApp, você usa nossas ferramentas.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div 
                ref={scrollRef}
                className="scroll-animate transition-fade-slide-right flex items-start gap-3.5"
                style={{ transitionDuration: '0.5s', transitionDelay: '0.6s' }}
              >
                <div className="w-6 h-6 rounded-full bg-blue-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-blue-primary" style={{ strokeWidth: 3 }} />
                </div>
                <div>
                  <h4 className="font-inter text-[0.95rem] font-bold text-[#1A1A1A]">Suporte humanizado e consultoria personalizada</h4>
                  <p className="font-inter text-[0.875rem] font-normal text-[#6B7280] leading-[1.5] mt-0.5">Nada de chatbot. Nosso time de verdade está disponível para te ajudar sempre.</p>
                </div>
              </div>
            </div>

            {/* CTA inline */}
            <div 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up flex items-center gap-5 mt-10 flex-wrap"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.7s' }}
            >
              <a 
                href="#"
                className="btn inline-flex items-center justify-center bg-blue-primary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] active:translate-y-0"
              >
                Fale com um Consultor
              </a>
              <a 
                href="#plataformas"
                className="font-inter text-[0.9rem] font-semibold text-blue-primary transition-colors hover:text-blue-dark hover:underline"
              >
                Ver nossas plataformas &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO PLATAFORMAS */}
      <section 
        id="plataformas" 
        className="w-full bg-[#FAF9F6] border-t border-black/5"
        style={{ scrollMarginTop: '80px', padding: '120px 0' }}
      >
        
        {/* Container Interno */}
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* CABEÇALHO DA SEÇÃO */}
          <div className="text-center mb-[80px] max-md:mb-[48px] flex flex-col items-center">
            {/* Eyebrow */}
            <div 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up flex items-center gap-4"
              style={{ transitionDuration: '0.5s', transitionDelay: '0s' }}
            >
              <div className="w-10 h-[2px] bg-blue-primary rounded-[2px]"></div>
              <span className="font-inter text-[0.75rem] font-semibold tracking-[0.12em] text-blue-primary uppercase">
                NOSSAS PLATAFORMAS
              </span>
              <div className="w-10 h-[2px] bg-blue-primary rounded-[2px]"></div>
            </div>

            {/* H2 Sora */}
            <h2 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-sora font-bold text-[#1A1A1A] leading-[1.15] tracking-[-0.02em] mt-3.5 max-w-[620px] mx-auto"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', transitionDuration: '0.6s', transitionDelay: '0.1s' }}
            >
              Conheça as ferramentas que vão revolucionar seu negócio
            </h2>

            {/* Subtexto */}
            <p 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-inter text-base font-normal text-[#6B7280] leading-[1.6] mt-3.5 max-w-[500px] mx-auto"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.2s' }}
            >
              Cada plataforma foi criada para resolver uma dor real do empresário. Escolha a sua ou use as duas juntas.
            </p>
          </div>

          {/* PLATAFORMA 1 , IA WHATSAPP */}
          <div 
            ref={scrollRef}
            className="scroll-animate transition-fade-slide-up platform-card p-5 sm:p-8 md:p-[64px] max-md:p-5 overflow-hidden relative mb-[48px]"
            style={{ transitionDuration: '0.7s', transitionDelay: '0s' }}
          >
            {/* Círculo decorativo absoluto */}
            <div 
              className="absolute top-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)', zIndex: 0 }}
            ></div>

            {/* Grid Interno */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
              
              {/* Coluna Esquerda: Texto */}
              <div className="flex flex-col items-start w-full">
                {/* Header do produto */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div 
                    className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(37,99,235,0.06))',
                      border: '1px solid rgba(37,99,235,0.15)'
                    }}
                  >
                    <MessageSquare className="w-6 h-6 text-blue-primary" />
                  </div>
                  <span className="bg-blue-light text-blue-primary rounded-full px-3 py-1 font-inter text-[0.78rem] font-semibold">
                    IA WhatsApp
                  </span>
                </div>

                {/* H3 */}
                <h3 className="font-sora font-bold text-[#1A1A1A] leading-[1.2] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)' }}>
                  Atendimento Inteligente no WhatsApp
                </h3>

                {/* Descrição */}
                <p className="font-inter text-[0.95rem] text-[#6B7280] leading-[1.7] mb-8">
                  Sua equipe atende pelo WhatsApp com sugestões de resposta geradas por IA em tempo real. Controle de atendimento, múltiplos atendentes e histórico organizado , tudo em um só lugar.
                </p>

                {/* Features 2x2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="flex items-start gap-2.5">
                    <Zap className="w-4.5 h-4.5 text-blue-primary flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-[0.875rem] font-semibold text-[#374151]">Respostas sugeridas por IA em tempo real</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Users className="w-4.5 h-4.5 text-blue-primary flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-[0.875rem] font-semibold text-[#374151]">Múltiplos atendentes simultâneos</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BarChart3 className="w-4.5 h-4.5 text-blue-primary flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-[0.875rem] font-semibold text-[#374151]">Painel de métricas e controle</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4.5 h-4.5 text-blue-primary flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-[0.875rem] font-semibold text-[#374151]">Automação 24h por dia</span>
                  </div>
                </div>

                {/* Divisor */}
                <div className="w-full h-[1px] my-8" style={{ background: 'linear-gradient(to right, var(--color-gray-300), transparent)' }}></div>

                {/* Rodapé CTA */}
                <div className="flex items-center justify-between w-full flex-wrap gap-4">
                  <a
                    href="/ia-whatsapp.html"
                    className="btn inline-flex items-center gap-2 bg-blue-primary text-white px-7 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] active:translate-y-0"
                  >
                    Quero Acesso à Plataforma
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <div className="flex items-center gap-1.5 font-inter text-[0.8rem] text-[#9CA3AF]">
                    <Lock className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    <span>Acesso exclusivo para clientes</span>
                  </div>
                </div>
              </div>

              {/* Coluna Direita: Mockup (WhatsApp) */}
              <div 
                ref={scrollRef}
                className="scroll-animate transition-fade-slide-right flex justify-center w-full lg:order-2 max-lg:order-first"
                style={{ transitionDuration: '0.7s', transitionDelay: '0.2s' }}
              >
                {/* Smartphone mockup */}
                <div 
                  className="whatsapp-float w-full max-w-[360px] bg-[#1F2937] rounded-[20px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.05)]"
                >
                  {/* Header */}
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
                    <MoreVertical className="w-[18px] h-[18px] text-white/40 cursor-pointer" />
                  </div>

                  {/* Mensagens */}
                  <div className="p-4 flex flex-col gap-3 min-h-[220px] font-inter">
                    
                    {/* Cliente */}
                    <div className="self-start bg-[#374151] text-white/90 rounded-[16px] rounded-tl-none p-3 max-w-[80%] text-[0.83rem] leading-normal shadow-sm">
                      <p>Olá! Quero saber mais sobre os planos disponíveis.</p>
                      <div className="text-[0.68rem] text-white/35 text-right mt-1">14:32</div>
                    </div>

                    {/* Atendente */}
                    <div className="self-end bg-blue-primary text-white rounded-[16px] rounded-tr-none p-3 max-w-[80%] text-[0.83rem] leading-normal shadow-sm">
                      <p>Olá, João! Que bom falar com você 😊</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[0.68rem] text-white/60">14:33</span>
                        <CheckCheck className="w-3 h-3 text-[#93C5FD]" />
                      </div>
                    </div>

                    {/* Sugestão da IA */}
                    <div className="w-full bg-gradient-to-br from-blue-primary/18 to-blue-primary/8 border border-blue-primary/30 p-3.5 rounded-[14px] mt-1.5 shadow-md">
                      <div className="flex items-center gap-1.5 text-[#60A5FA] mb-2 font-inter font-bold text-[0.7rem] tracking-wider uppercase">
                        <Sparkles className="w-3 h-3 sparkle-glow" />
                        Sugestão da IA
                      </div>
                      <p className="text-white/85 text-[0.81rem] leading-relaxed">
                        Temos 3 planos disponíveis. Com base no perfil do João, recomendo o Plano Pro. Posso enviar os detalhes?
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3 font-semibold">
                        <button className="bg-blue-primary text-white text-[0.72rem] px-3 py-1.5 rounded-lg hover:bg-blue-dark transition-colors focus:outline-none">
                          Usar resposta
                        </button>
                        <button className="bg-transparent border border-white/20 text-white/70 text-[0.72rem] px-3 py-1.5 rounded-lg hover:bg-white/5 hover:text-white transition-colors focus:outline-none">
                          Editar
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Input Footer */}
                  <div className="bg-[#111827] p-3 px-4 flex items-center gap-3 border-t border-white/5 font-inter">
                    <div className="flex-1 bg-[#1F2937] rounded-full px-4 py-2 text-[0.8rem] text-white/55">
                      Digite uma mensagem...
                    </div>
                    <Send className="w-[18px] h-[18px] text-blue-primary cursor-pointer" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* SEPARADOR ENTRE PLATAFORMAS */}
          <div className="my-[48px] flex items-center gap-5">
            <div className="flex-1 h-[1px] bg-[#D1D5DB] opacity-50"></div>
            <span className="font-inter text-[0.85rem] font-medium text-[#9CA3AF] whitespace-nowrap">
              e também
            </span>
            <div className="flex-1 h-[1px] bg-[#D1D5DB] opacity-50"></div>
          </div>

          {/* PLATAFORMA 2 , MEGA AUTOMAÇÃO DE POST */}
          <div 
            ref={scrollRef}
            className="scroll-animate transition-fade-slide-up platform-card p-5 sm:p-8 md:p-[64px] max-md:p-5 overflow-hidden relative"
            style={{ transitionDuration: '0.7s', transitionDelay: '0s' }}
          >
            {/* Círculo decorativo absoluto oposto */}
            <div 
              className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)', zIndex: 0 }}
            ></div>

            {/* Grid Interno (Invertido no desktop) */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
              
              {/* Coluna Esquerda: Mockup Dashboard (topo no mobile) */}
              <div 
                ref={scrollRef}
                className="scroll-animate transition-fade-slide-left flex justify-center w-full lg:order-1 max-lg:order-first"
                style={{ transitionDuration: '0.7s', transitionDelay: '0.2s' }}
              >
                {/* Dashboard mockup */}
                <div 
                  className="dashboard-float w-full max-w-[380px] bg-white rounded-[20px] border border-[#D1D5DB] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.03)]"
                >
                  {/* Header */}
                  <div className="bg-[#1A1A1A] p-3.5 px-4 flex items-center justify-between font-inter border-b border-black/5">
                    <div className="flex items-center gap-2 text-white">
                      <PenTool className="w-4 h-4 text-blue-primary" />
                      <span className="font-sora font-semibold text-[0.85rem]">Mega Post IA</span>
                    </div>
                    <div className="bg-[#022c22] border border-[#166534] text-[#4ADE80] rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] dot-pulse"></span>
                      <span>IA Ativa</span>
                    </div>
                  </div>

                  {/* Posts agendados */}
                  <div className="p-4 bg-white flex flex-col font-inter">
                    <div className="text-[0.72rem] font-semibold text-[#9CA3AF] tracking-[0.08em] uppercase mb-3">
                      Posts desta semana
                    </div>

                    {/* Card 1: Publicado */}
                    <div className="bg-[#F3F4F6] rounded-xl p-3 flex gap-3 items-start mb-2.5">
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                        <Image className="w-[18px] h-[18px] text-white opacity-70" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[0.8rem] text-[#1A1A1A] truncate">Dica do dia para negócios</div>
                        <div className="text-[0.72rem] text-[#9CA3AF] mt-1">Seg, 14h00 • Instagram</div>
                        <div className="inline-block bg-[#DCFCE7] text-[#16A34A] rounded-full px-2 py-0.5 text-[0.68rem] font-semibold mt-2">
                          Publicado
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Agendado */}
                    <div className="bg-[#F3F4F6] rounded-xl p-3 flex gap-3 items-start mb-2.5">
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#F97316] to-[#EF4444] flex items-center justify-center flex-shrink-0">
                        <Image className="w-[18px] h-[18px] text-white opacity-70" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[0.8rem] text-[#1A1A1A] flex items-center gap-1">
                          Como a IA te ajuda
                          <Sparkles className="w-2.5 h-2.5 text-blue-primary" />
                        </div>
                        <div className="text-[0.72rem] text-[#9CA3AF] mt-1">Qua, 10h30 • Instagram + LinkedIn</div>
                        <div className="inline-block bg-[#EFF6FF] text-blue-primary rounded-full px-2 py-0.5 text-[0.68rem] font-semibold mt-2">
                          Agendado
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Criando */}
                    <div className="bg-[#F3F4F6] rounded-xl p-3 flex gap-3 items-start">
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center flex-shrink-0 shimmer-bg">
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-[0.8rem] text-[#9CA3AF]">Gerando conteúdo...</div>
                        <div className="inline-block bg-[#F3E8FF] text-[#7C3AED] rounded-full px-2 py-0.5 text-[0.68rem] font-semibold mt-2 flex items-center gap-1.5 w-max">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] dot-pulse"></span>
                          <span>Criando com IA</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Footer Dashboard */}
                  <div className="bg-[#F3F4F6] p-3 px-4 flex items-center justify-between border-t border-[#E5E7EB] font-inter">
                    <div className="font-medium text-[0.78rem] text-[#6B7280]">7 posts esta semana</div>
                    <button className="bg-blue-primary text-white rounded-lg px-3 py-1.5 text-[0.75rem] font-medium hover:bg-blue-dark transition-colors focus:outline-none">
                      + Criar post
                    </button>
                  </div>
                </div>
              </div>

              {/* Coluna Direita: Texto (Plataforma 2) */}
              <div className="flex flex-col items-start w-full lg:order-2 max-lg:order-2">
                {/* Header do produto */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div 
                    className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(37,99,235,0.06))',
                      border: '1px solid rgba(37,99,235,0.15)'
                    }}
                  >
                    <PenTool className="w-6 h-6 text-blue-primary" />
                  </div>
                  <span className="bg-blue-light text-blue-primary rounded-full px-3 py-1 font-inter text-[0.78rem] font-semibold">
                    Mega Automação de Post
                  </span>
                </div>

                {/* H3 */}
                <h3 className="font-sora font-bold text-[#1A1A1A] leading-[1.2] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)' }}>
                  Conteúdo para Redes Sociais no Automático
                </h3>

                {/* Descrição */}
                <p className="font-inter text-[0.95rem] text-[#6B7280] leading-[1.7] mb-8">
                  A IA cria os textos, escolhe os melhores horários e publica automaticamente nas suas redes sociais. Você foca no que importa enquanto seu perfil cresce sozinho.
                </p>

                {/* Features 2x2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-[18px] h-[18px] text-blue-primary flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-[0.875rem] font-semibold text-[#374151]">IA cria textos e legendas automaticamente</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-[18px] h-[18px] text-blue-primary flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-[0.875rem] font-semibold text-[#374151]">Agendamento inteligente por horário</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <TrendingUp className="w-[18px] h-[18px] text-blue-primary flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-[0.875rem] font-semibold text-[#374151]">Posts otimizados para engajamento</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <RefreshCw className="w-[18px] h-[18px] text-blue-primary flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-[0.875rem] font-semibold text-[#374151]">Conteúdo constante sem esforço</span>
                  </div>
                </div>

                {/* Divisor */}
                <div className="w-full h-[1px] my-8" style={{ background: 'linear-gradient(to right, var(--color-gray-300), transparent)' }}></div>

                {/* Rodapé CTA */}
                <div className="flex items-center justify-between w-full flex-wrap gap-4">
                  <a
                    href="/mega-automacao.html"
                    className="btn inline-flex items-center gap-2 bg-blue-primary text-white px-7 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] active:translate-y-0"
                  >
                    Quero Acesso à Plataforma
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <div className="flex items-center gap-1.5 font-inter text-[0.8rem] text-[#9CA3AF]">
                    <Lock className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    <span>Acesso exclusivo para clientes</span>
                  </div>
                </div>
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

        {/* Gradientes atmosféricos de fundo */}
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
          
          {/* CABEÇALHO DA SEÇÃO */}
          <div className="text-center mb-[80px] max-md:mb-[56px] flex flex-col items-center">
            {/* Eyebrow */}
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

            {/* H2 */}
            <h2 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-sora font-bold text-white leading-[1.15] tracking-[-0.02em] mt-3.5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', transitionDuration: '0.6s', transitionDelay: '0.1s' }}
            >
              Comece em 3 passos simples
            </h2>

            {/* Subtexto */}
            <p 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-inter text-base font-normal text-white/55 leading-[1.6] mt-3.5 max-w-[480px] mx-auto"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.2s' }}
            >
              Sem burocracia. Sem complicação técnica. Do primeiro contato ao negócio no automático em menos de 48 horas.
            </p>
          </div>

          {/* PASSOS CONTAINER */}
          <div className="steps-container grid grid-cols-1 md:grid-cols-3 gap-0">

            {/* Conectores Desktop */}

            <div className="hidden md:block step-connector-1"></div>

            <div className="hidden md:block step-connector-2"></div>

          

            {STEPS_DATA.map((step, index) => {

              const IconComponent = { MessageCircle, Settings, Rocket }[step.icon];

              return (

                <React.Fragment key={step.id}>

                  {index > 0 && (

                    <div className="md:hidden w-full py-4 flex justify-center">

                      <div className="w-[2px] h-10 border-l-2 border-dashed border-blue-primary/25"></div>

                    </div>

                  )}

                  <div 

                    ref={scrollRef}

                    className="scroll-animate transition-fade-slide-up step-card-group flex flex-col items-center text-center px-8 relative"

                    style={{ transitionDuration: '0.6s', transitionDelay: `${0.1 + index * 0.15}s` }}

                  >

                    <div className="relative mb-7">

                      <div className="step-icon-container w-[80px] h-[80px] rounded-full bg-blue-primary/10 border border-blue-primary/20 flex items-center justify-center relative z-10 transition-all duration-300">

                        <IconComponent className="w-8 h-8 text-blue-primary" />

                      </div>

                      <div 

                        className="absolute top-[-4px] right-[-4px] w-6 h-6 rounded-full bg-blue-primary text-white font-sora text-[0.72rem] font-bold flex items-center justify-center border-2 border-[#0A0A0A] z-20"

                      >

                        {step.id}

                      </div>

                    </div>

                    <h4 className="font-sora font-semibold text-[1.15rem] text-white mb-3">

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

          {/* CTA ABAIXO DOS PASSOS */}
          <div className="text-center mt-[72px]">
            <a 
              ref={scrollRef}
              href="#"
              className="scroll-animate transition-fade-scale btn inline-flex items-center gap-2.5 bg-blue-primary text-white px-9 py-3.5 rounded-lg font-medium transition-all duration-300 hover:bg-blue-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,99,235,0.4)] active:translate-y-0"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.5s' }}
            >
              Quero começar agora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* SEÇÃO DIFERENCIAIS */}
      <section 
        id="funcionalidades" 
        className="w-full bg-[#F5F5F0] border-t border-black/5" 
        style={{ scrollMarginTop: '80px', padding: '120px 0' }}
      >

        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* CABEÇALHO DA SEÇÃO */}
          <div className="text-center mb-[64px] flex flex-col items-center">
            {/* Eyebrow */}
            <div 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up flex items-center gap-4"
              style={{ transitionDuration: '0.5s', transitionDelay: '0s' }}
            >
              <div className="w-10 h-[2px] bg-blue-primary rounded-[2px]"></div>
              <span className="font-inter text-[0.75rem] font-semibold tracking-[0.12em] text-blue-primary uppercase">
                DIFERENCIAIS
              </span>
              <div className="w-10 h-[2px] bg-blue-primary rounded-[2px]"></div>
            </div>

            {/* H2 */}
            <h2 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-sora font-bold text-[#1A1A1A] leading-[1.15] tracking-[-0.02em] mt-3.5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', transitionDuration: '0.6s', transitionDelay: '0.1s' }}
            >
              O que só a Crescendo com IA tem
            </h2>

            {/* Subtexto */}
            <p 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-inter text-base font-normal text-[#6B7280] leading-[1.6] mt-3.5 max-w-[500px] mx-auto"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.2s' }}
            >
              Funcionalidades pensadas para o dia a dia real do empresário brasileiro. Não é promessa , é entrega.
            </p>
          </div>

          {/* GRID DE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {FEATURES_DATA.map((feature, index) => {

              const IconComponent = { Brain, LayoutDashboard, Smartphone, Clock, Headphones, Globe }[feature.icon];

              return (

                <div 

                  key={feature.id}

                  ref={scrollRef}

                  className="scroll-animate transition-fade-slide-up feature-card p-8 px-7"

                  style={{ transitionDuration: '0.5s', transitionDelay: `${0.05 + index * 0.05}s` }}

                >

                  <div className="feature-card-icon-wrapper">

                    <IconComponent className="w-[22px] h-[22px] text-blue-primary" />

                  </div>

                  <h4 className="font-sora font-semibold text-[1rem] tracking-tight text-[#1A1A1A] mb-2.5">

                    {feature.title}

                  </h4>

                  <p className="font-inter text-[0.875rem] text-[#6B7280] leading-[1.65]">

                    {feature.description}

                  </p>

                </div>

              );

            })}
          </div>

          {/* BANNER DE DESTAQUE */}
          <div 
            ref={scrollRef}
            className="scroll-animate transition-fade-scale mt-12 rounded-[20px] p-10 md:p-12 max-md:p-7 relative overflow-hidden flex items-center justify-between gap-8 flex-wrap"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-blue) 0%, var(--color-blue-dark) 100%)',
              transitionDuration: '0.6s', 
              transitionDelay: '0.1s' 
            }}
          >
            {/* Círculo decorativo absoluto */}
            <div 
              className="absolute right-[-40px] top-[-40px] w-[200px] h-[200px] rounded-full pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            ></div>

            {/* Lado esquerdo */}
            <div className="flex flex-col items-start relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-white opacity-90" />
                <span className="font-inter text-[0.75rem] font-semibold text-white/70 uppercase tracking-[0.1em]">
                  Diferencial exclusivo
                </span>
              </div>
              <h3 className="font-sora font-bold text-white leading-snug" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>
                IA com contexto real do seu negócio
              </h3>
              <p className="font-inter text-[0.9rem] text-white/75 leading-[1.6] mt-2 max-w-[520px]">
                Nossa IA não é genérica. Ela aprende o seu segmento, o seu tom de voz e o perfil dos seus clientes para entregar sugestões que realmente fazem sentido.
              </p>
            </div>

            {/* Lado direito */}
            <div className="relative z-10 max-md:w-full">
              <a 
                href="#"
                className="btn inline-flex items-center justify-center bg-white text-blue-primary px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-300 hover:bg-blue-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] active:translate-y-0 max-md:w-full"
              >
                Fale com um Consultor
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO NÚMEROS / PROVA SOCIAL */}
      <section 
        id="numeros" 
        className="w-full bg-blue-primary relative overflow-hidden" 
        style={{ scrollMarginTop: '80px', padding: '100px 0' }}
      >

        {/* Elementos decorativos absolutos */}
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
          
          {/* CABEÇALHO DA SEÇÃO */}
          <div className="text-center mb-[64px] max-md:mb-[40px] flex flex-col items-center">
            {/* Eyebrow */}
            <div 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up flex items-center gap-3"
              style={{ transitionDuration: '0.5s', transitionDelay: '0s' }}
            >
              <div className="w-8 h-[1px] bg-white/30"></div>
              <span className="font-inter text-[0.75rem] font-semibold tracking-[0.12em] text-white/65 uppercase">
                NOSSOS NÚMEROS
              </span>
              <div className="w-8 h-[1px] bg-white/30"></div>
            </div>

            {/* H2 */}
            <h2 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-up font-sora font-bold text-white leading-[1.15] tracking-[-0.02em] mt-3"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', transitionDuration: '0.6s', transitionDelay: '0.1s' }}
            >
              Resultados que falam por si
            </h2>
          </div>

          {/* GRID DE NÚMEROS */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] rounded-2xl overflow-hidden bg-white/12"
          >
            {/* Bloco 1 */}
            <div 
              ref={scrollRef}
              className="scroll-animate transition-fade-scale bg-transparent py-10 px-3 max-md:py-8 max-md:px-2 text-center transition-colors duration-300 hover:bg-white/5"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.1s' }}
            >
              <div className="font-sora font-bold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
                <CountUpNumber target={500} prefix="+" />
              </div>
              <p className="font-inter text-[0.9rem] text-white/72 mt-2.5 max-md:text-[0.85rem]">
                Empresas atendidas
              </p>
            </div>

            {/* Bloco 2 */}
            <div 
              ref={scrollRef}
              className="scroll-animate transition-fade-scale bg-transparent py-10 px-3 max-md:py-8 max-md:px-2 text-center transition-colors duration-300 hover:bg-white/5"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.2s' }}
            >
              <div className="font-sora font-bold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
                <CountUpNumber target={50000} prefix="+" format={true} />
              </div>
              <p className="font-inter text-[0.9rem] text-white/72 mt-2.5 max-md:text-[0.85rem]">
                Mensagens automatizadas por mês
              </p>
            </div>

            {/* Bloco 3 */}
            <div 
              ref={scrollRef}
              className="scroll-animate transition-fade-scale bg-transparent py-10 px-3 max-md:py-8 max-md:px-2 text-center transition-colors duration-300 hover:bg-white/5"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.3s' }}
            >
              <div className="font-sora font-bold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
                <CountUpNumber target={10000} prefix="+" format={true} />
              </div>
              <p className="font-inter text-[0.9rem] text-white/72 mt-2.5 max-md:text-[0.85rem]">
                Posts criados pela IA
              </p>
            </div>

            {/* Bloco 4 */}
            <div 
              ref={scrollRef}
              className="scroll-animate transition-fade-scale bg-transparent py-10 px-3 max-md:py-8 max-md:px-2 text-center transition-colors duration-300 hover:bg-white/5"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.4s' }}
            >
              <div className="font-sora font-bold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
                <CountUpNumber target={98} suffix="%" />
              </div>
              <p className="font-inter text-[0.9rem] text-white/72 mt-2.5 max-md:text-[0.85rem]">
                Satisfação dos clientes
              </p>
            </div>
          </div>

          {/* FAIXA DE DEPOIMENTOS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">

            {TESTIMONIALS_DATA.map((item, index) => (

              <div 

                key={item.id}

                ref={scrollRef}

                className="scroll-animate transition-fade-slide-up bg-white/10 border border-white/15 rounded-2xl p-7 px-6 backdrop-blur-md relative hover:bg-white/15 hover:border-white/25 hover:-translate-y-[3px] transition-all duration-300 overflow-hidden"

                style={{ transitionDuration: '0.6s', transitionDelay: `${0.15 + index * 0.1}s` }}

              >

                {/* Aspas decorativas absolutas */}

                <span className="absolute top-2 left-3 font-serif text-[4.5rem] leading-none text-white/10 select-none pointer-events-none">"</span>

                

                {/* Estrelas */}

                <div className="flex gap-1 mb-4 relative z-10">

                  {[...Array(5)].map((_, i) => (

                    <Star key={i} className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />

                  ))}

                </div>

          

                {/* Texto */}

                <p className="font-inter text-[0.9rem] text-white/85 leading-[1.65] mb-5 relative z-10">

                  {item.text}

                </p>

          

                {/* Autor */}

                <div className="flex items-center gap-3 border-t border-white/10 pt-4 relative z-10">

                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 text-white font-sora font-bold text-sm flex items-center justify-center flex-shrink-0">

                    {item.letter}

                  </div>

                  <div>

                    <h5 className="font-sora font-semibold text-[0.9rem] text-white leading-none">{item.author}</h5>

                    <p className="font-inter text-[0.78rem] text-white/55 mt-1.5 leading-none">{item.role}</p>

                  </div>

                </div>

              </div>

            ))}</div>

        </div>
      </section>

      {/* SEÇÃO FAQ */}
      <section 
        id="faq" 
        className="w-full bg-[#FAF9F6] border-t border-black/5" 
        style={{ scrollMarginTop: '80px', padding: '120px 0' }}
      >

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-[80px] items-start">
          
          {/* Coluna Esquerda - Sticky Cabeçalho */}
          <div className="md:col-span-5 md:sticky md:top-[100px] flex flex-col items-start">
            {/* Eyebrow */}
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

            {/* H2 */}
            <h2 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-left font-sora font-bold text-[#1A1A1A] leading-[1.2] tracking-[-0.02em] mt-3.5"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', transitionDuration: '0.6s', transitionDelay: '0.1s' }}
            >
              Dúvidas que nossos clientes sempre têm
            </h2>

            {/* Subtexto */}
            <p 
              ref={scrollRef}
              className="scroll-animate transition-fade-slide-left font-inter text-[0.9rem] text-[#6B7280] leading-[1.6] mt-3"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.15s' }}
            >
              Não encontrou o que procura? Fale diretamente com nossa equipe.
            </p>

            {/* CTA Button */}
            <a 
              ref={scrollRef}
              href="#"
              className="scroll-animate transition-fade-scale btn inline-flex items-center gap-2 bg-transparent border border-blue-primary text-blue-primary px-5 py-2.5 rounded-lg font-medium text-[0.875rem] mt-6 transition-all duration-250 hover:bg-blue-primary hover:text-white"
              style={{ transitionDuration: '0.5s', transitionDelay: '0.2s' }}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Falar com consultor
            </a>
          </div>

          {/* Coluna Direita - Accordion */}
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

            ))}</div>

        </div>
      </section>

      {/* SEÇÃO CTA FINAL */}
      <section 
        id="cta-final" 
        className="w-full bg-dark-black relative overflow-hidden section-dark" 
        style={{ scrollMarginTop: '80px', padding: '140px 0' }}
      >

        {/* Camada 1 , Gradiente mesh animado */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div 
            className="absolute left-[-10%] top-[-10%] w-[80%] h-[120%] cta-mesh-animated-1"
            style={{ 
              background: 'radial-gradient(ellipse 700px 500px at center, rgba(37,99,235,0.18), transparent)',
              willChange: 'transform'
            }}
          ></div>
          <div 
            className="absolute right-[-10%] bottom-[-10%] w-[80%] h-[120%] cta-mesh-animated-2"
            style={{ 
              background: 'radial-gradient(ellipse 600px 600px at center, rgba(37,99,235,0.12), transparent)',
              willChange: 'transform'
            }}
          ></div>
        </div>

        {/* Camada 2 , Grid de pontos */}
        <div className="absolute inset-0 cta-dot-grid pointer-events-none z-1"></div>

        {/* Camada 3 , Elementos decorativos geométricos (círculos em rotação contínua) */}
        <div 
          className="absolute left-[-120px] top-1/2 w-[400px] h-[400px] rounded-full border border-blue-primary/12 pointer-events-none z-1 cta-circle-cw"
          style={{ transformOrigin: 'center center' }}
        ></div>
        <div 
          className="absolute right-[-150px] top-1/2 w-[500px] h-[500px] rounded-full border border-blue-primary/8 pointer-events-none z-1 cta-circle-ccw"
          style={{ transformOrigin: 'center center' }}
        ></div>
        <div 
          className="absolute left-[-60px] top-1/2 w-[240px] h-[240px] rounded-full border border-blue-primary/18 pointer-events-none z-1 cta-circle-cw-fast"
          style={{ transformOrigin: 'center center' }}
        ></div>

        {/* Conteúdo */}
        <div className="max-w-[860px] mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          
          {/* Badge superior */}
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

          {/* Headline H2 */}
          <h2 
            ref={scrollRef}
            className="scroll-animate transition-fade-slide-up font-sora font-bold text-white leading-[1.1] tracking-[-0.03em] mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', transitionDuration: '0.7s', transitionDelay: '0.15s' }}
          >
            Pronto para colocar seu negócio no <span className="highlight-text-gradient bg-gradient-to-r from-[#60A5FA] to-blue-primary bg-clip-text text-transparent">piloto automático</span>?
          </h2>

          {/* Subtexto */}
          <p 
            ref={scrollRef}
            className="scroll-animate transition-fade-slide-up font-inter text-[1.05rem] text-white/60 leading-[1.7] max-w-[560px] mb-10"
            style={{ transitionDuration: '0.6s', transitionDelay: '0.3s' }}
          >
            Fale agora com um consultor e descubra como a inteligência artificial pode transformar seus resultados. Sem compromisso.
          </p>

          {/* Grupo de botões */}
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
              href="#plataformas"
              className="btn inline-flex items-center justify-center gap-2.5 bg-transparent border border-white/20 text-white/80 px-9 py-4 rounded-xl font-semibold text-[1rem] tracking-wide transition-all duration-200 hover:bg-white/6 hover:border-white/40 hover:text-white hover:-translate-y-[-2px] w-full sm:w-auto text-center"
            >
              Ver as plataformas
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Nota de garantia */}
          <div 
            ref={scrollRef}
            className="scroll-animate transition-fade-slide-up mt-8 flex flex-row flex-wrap justify-center items-center gap-x-5 gap-y-2 text-[0.82rem] text-white/60 font-inter"
            style={{ transitionDuration: '0.5s', transitionDelay: '0.6s' }}
          >
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-white/40" />
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
      <footer 
        className="w-full bg-[#0F0F0F] border-t border-white/[0.06] pt-[72px]"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* GRID PRINCIPAL */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-14 border-b border-white/[0.04]">
            
            {/* Coluna 1 , Marca */}
            <div className="md:col-span-5 flex flex-col items-start">
              <a href="#" className="flex items-center mb-4">
                <img src="/logo.svg" alt="Logo" className="w-24 h-24 object-contain" />
              </a>
              <p className="font-inter text-[0.875rem] text-white/60 leading-[1.7] max-w-[280px] mb-7">
                Plataformas inteligentes para empresários que querem crescer sem complicação.
              </p>
              
              {/* Redes sociais */}
              <div className="flex gap-2.5">
                <a 
                  href="#" 
                  className="w-[38px] h-[38px] rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center cursor-pointer transition-all duration-250 hover:bg-blue-primary/20 hover:border-blue-primary/30 hover:-translate-y-0.5 group"
                  aria-label="Acessar Instagram"
                >
                  <Instagram className="w-[17px] h-[17px] text-white/60 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-[38px] h-[38px] rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center cursor-pointer transition-all duration-250 hover:bg-blue-primary/20 hover:border-blue-primary/30 hover:-translate-y-0.5 group"
                  aria-label="Acessar LinkedIn"
                >
                  <Linkedin className="w-[17px] h-[17px] text-white/60 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-[38px] h-[38px] rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center cursor-pointer transition-all duration-250 hover:bg-blue-primary/20 hover:border-blue-primary/30 hover:-translate-y-0.5 group"
                  aria-label="Fale pelo WhatsApp"
                >
                  <MessageCircle className="w-[17px] h-[17px] text-white/60 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Coluna 2 , Links rápidos */}
            <div className="md:col-span-2 flex flex-col items-start">
              <h4 className="font-inter text-[0.72rem] font-bold text-white/30 tracking-[0.1em] uppercase mb-5">
                Navegação
              </h4>
              <div className="flex flex-col gap-3 font-inter text-[0.875rem]">
                <a href="#sobre" className="text-white/55 transition-all duration-200 hover:text-white hover:translate-x-0.5">Sobre</a>
                <a href="#plataformas" className="text-white/55 transition-all duration-200 hover:text-white hover:translate-x-0.5">Plataformas</a>
                <a href="#como-funciona" className="text-white/55 transition-all duration-200 hover:text-white hover:translate-x-0.5">Como Funciona</a>
                <a href="#funcionalidades" className="text-white/55 transition-all duration-200 hover:text-white hover:translate-x-0.5">Funcionalidades</a>
                <a href="#faq" className="text-white/55 transition-all duration-200 hover:text-white hover:translate-x-0.5">FAQ</a>
              </div>
            </div>

            {/* Coluna 3 , Plataformas */}
            <div className="md:col-span-2 flex flex-col items-start">
              <h4 className="font-inter text-[0.72rem] font-bold text-white/30 tracking-[0.1em] uppercase mb-5">
                Plataformas
              </h4>
              <div className="flex flex-col gap-3 font-inter text-[0.875rem] w-full">
                <a href="#" className="inline-flex items-center gap-1 text-white/55 transition-all duration-200 hover:text-white hover:translate-x-0.5">
                  IA WhatsApp
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a href="#" className="inline-flex items-center gap-1 text-white/55 transition-all duration-200 hover:text-white hover:translate-x-0.5">
                  Mega Automação
                  <ExternalLink className="w-3 h-3" />
                </a>
                
                <div className="flex items-center gap-1.5 text-[0.75rem] text-white/55 mt-4">
                  <Lock className="w-3 h-3 text-white/20 flex-shrink-0" />
                  <span>Acesso restrito</span>
                </div>
              </div>
            </div>

            {/* Coluna 4 , Contato */}
            <div className="md:col-span-3 flex flex-col items-start">
              <h4 className="font-inter text-[0.72rem] font-bold text-white/30 tracking-[0.1em] uppercase mb-5">
                Contato
              </h4>
              <div className="flex flex-col gap-3.5 font-inter text-[0.875rem]">
                <a href="#" className="flex items-start gap-2.5 text-white/55 hover:text-white transition-colors group">
                  <MessageCircle className="w-[15px] h-[15px] text-white/35 mt-1 flex-shrink-0 group-hover:text-blue-primary transition-colors" />
                  <span>(00) 00000-0000</span>
                </a>
                <a href="#" className="flex items-start gap-2.5 text-white/55 hover:text-white transition-colors group">
                  <Mail className="w-[15px] h-[15px] text-white/35 mt-1 flex-shrink-0 group-hover:text-blue-primary transition-colors" />
                  <span className="break-all">contato@crescendocomia.com.br</span>
                </a>
                <a href="#" className="flex items-start gap-2.5 text-white/55 hover:text-white transition-colors group">
                  <Instagram className="w-[15px] h-[15px] text-white/35 mt-1 flex-shrink-0 group-hover:text-blue-primary transition-colors" />
                  <span>@crescendocomia</span>
                </a>
                <div className="flex items-start gap-2.5 text-white/35 mt-1">
                  <Clock className="w-[15px] h-[15px] text-white/20 mt-1 flex-shrink-0" />
                  <span>Seg,Sex, 9h às 18h</span>
                </div>
              </div>
            </div>

          </div>

          {/* BARRA DE COPYRIGHT */}
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[0.8rem] text-white/55 font-inter">
            <p>© 2026 Crescendo com IA. Todos os direitos reservados.</p>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white/50 transition-colors">Política de Privacidade</a>
              <span className="text-white/10 select-none">•</span>
              <a href="#" className="hover:text-white/50 transition-colors">Termos de Uso</a>
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
