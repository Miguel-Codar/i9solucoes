import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { siteConfig } from '../site.config';
import { 
  TrendingUp, ShieldCheck, PieChart, Calculator, 
  Users, FileCheck, CheckCircle2, ArrowRight, 
  Building2, ArrowRightLeft, Briefcase, MessageCircle
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.1 }
};

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/obrigado');
  };

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Contabilidade Digital Especializada
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark leading-[1.1] mb-6 tracking-tight">
                Sua empresa precisa de <br className="hidden lg:block" />
                <span className="text-primary relative inline-block">
                  clareza financeira
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span> <br className="hidden lg:block" />
                para crescer com segurança
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
                Transformamos dados contábeis em decisões estratégicas. Tenha o suporte de uma contabilidade que entende o seu negócio e trabalha pelo seu crescimento.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
                <Button to="/simulador" size="lg" fullWidth className="sm:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all">
                  Simular meu contrato
                </Button>
                <Button href={siteConfig.whatsappLink} variant="outline" size="lg" fullWidth className="sm:w-auto hover:bg-gray-50">
                  <MessageCircle size={20} className="mr-2" />
                  Falar com especialista
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-secondary" />
                  <span>Atendimento consultivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-secondary" />
                  <span>Foco em segurança fiscal</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Abstract Organic Shape Background */}
              <svg className="absolute inset-0 w-full h-full text-primary/10 transform scale-125 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,95.4,-3.1C94,11.8,85.2,26.1,75.1,38.5C65,50.9,53.6,61.4,40.5,69.3C27.4,77.2,12.7,82.5,-2.1,86.1C-16.9,89.7,-31.8,91.6,-44.6,85.8C-57.4,80,-68.1,66.5,-76.3,51.8C-84.5,37.1,-90.2,21.2,-91.1,5.1C-92,-11,-88.1,-27.3,-79.8,-41.2C-71.5,-55.1,-58.8,-66.6,-44.6,-73.7C-30.4,-80.8,-14.7,-83.5,0.8,-84.9C16.3,-86.3,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Equipe trabalhando" 
                  className="rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full border-4 border-white"
                />
                
                {/* Floating Card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-[240px]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Economia</p>
                      <p className="text-xl font-display font-bold text-dark">+24%</p>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ delay: 1, duration: 1 }}
                      className="h-full bg-green-500 rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Services Section (Replaces Needs Cards) */}
      <section className="py-24 lg:py-32 bg-light relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark mb-6">
              Soluções sob medida para o seu momento
            </h2>
            <p className="text-lg text-gray-600">
              Não importa o tamanho do seu desafio, temos a expertise necessária para guiar sua empresa ao próximo nível.
            </p>
          </motion.div>
          
          <div className="space-y-24">
            {/* Service 1 - Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Building2 size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-dark mb-4">Abertura de Empresa</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Descomplicamos o processo de abertura da sua empresa. Cuidamos de toda a burocracia, escolha do melhor regime tributário e registro nos órgãos competentes para você começar com segurança e economia.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 size={20} className="text-secondary" /> Análise de viabilidade
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 size={20} className="text-secondary" /> Definição de CNAEs
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 size={20} className="text-secondary" /> Planejamento societário
                  </li>
                </ul>
                <Button to="/contato" variant="outline" className="group">
                  Saber mais <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2 relative"
              >
                <div className="absolute inset-0 bg-secondary/20 rounded-[2.5rem] rotate-3 transform scale-105 -z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Abertura de empresa" 
                  className="rounded-[2.5rem] shadow-xl object-cover h-[400px] w-full"
                />
              </motion.div>
            </div>

            {/* Service 2 - Image Left */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] -rotate-3 transform scale-105 -z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Gestão Contábil" 
                  className="rounded-[2.5rem] shadow-xl object-cover h-[400px] w-full"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="pl-0 lg:pl-12"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <PieChart size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-dark mb-4">Gestão Contábil e Fiscal</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Muito além de calcular impostos. Entregamos relatórios gerenciais claros que traduzem a saúde financeira do seu negócio, permitindo tomadas de decisão baseadas em dados reais.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 size={20} className="text-primary" /> Planejamento tributário contínuo
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 size={20} className="text-primary" /> Balancetes mensais
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 size={20} className="text-primary" /> Conformidade legal garantida
                  </li>
                </ul>
                <Button to="/contato" variant="outline" className="group">
                  Saber mais <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid (Animated) */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark mb-6">
              Como a contabilidade impacta o seu negócio
            </h2>
            <p className="text-lg text-gray-600">
              Muito além de guias e impostos. Entregamos valor real para a sua operação.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: TrendingUp, title: "Crescimento sustentável", desc: "Dados precisos para você investir no lugar certo e na hora certa." },
              { icon: ShieldCheck, title: "Segurança fiscal", desc: "Tranquilidade para focar no negócio sem medo de autuações." },
              { icon: Calculator, title: "Redução de custos", desc: "Estratégias legais para otimizar sua carga tributária." },
              { icon: Users, title: "Gestão de pessoas", desc: "Folha de pagamento em dia e suporte completo em rotinas de RH." },
              { icon: Briefcase, title: "BPO Financeiro", desc: "Terceirização do seu financeiro para você focar no core business." },
              { icon: FileCheck, title: "Compliance", desc: "Sua empresa sempre em dia com as obrigações legais e certidões." }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-light flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Simulador Teaser - Redesigned */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] bg-primary/20 rounded-full blur-[100px] transform rotate-45" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] bg-secondary/10 rounded-full blur-[100px] transform -rotate-45" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[3rem] p-8 md:p-16 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm w-fit">
                  <Calculator size={16} /> Simulador Online
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
                  Descubra o plano ideal para o seu negócio
                </h2>
                <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                  Responda 4 perguntas rápidas e receba uma estimativa transparente dos nossos serviços. Sem compromisso e em menos de 1 minuto.
                </p>
                <div className="mt-6">
                  <Button to="/simulador" size="lg" className="bg-secondary hover:bg-secondary/90 text-dark font-bold shadow-lg shadow-secondary/20 hover:-translate-y-1 transition-all">
                    Iniciar simulação gratuita <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl text-dark transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Building2 size={24} />
                      </div>
                      <div>
                        <p className="font-display font-bold text-lg">Sua Empresa</p>
                        <p className="text-sm text-gray-500">Simples Nacional</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="h-4 bg-gray-100 rounded-full w-3/4" />
                    <div className="h-4 bg-gray-100 rounded-full w-1/2" />
                    <div className="h-4 bg-gray-100 rounded-full w-5/6" />
                  </div>
                  
                  <div className="bg-light rounded-2xl p-6 text-center border border-gray-100">
                    <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Estimativa Mensal</p>
                    <p className="text-3xl font-display font-bold text-primary">R$ 799 <span className="text-lg text-gray-400 font-sans font-medium mx-1">a</span> R$ 999</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative"
          >
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark mb-6 leading-tight">
                  Pronto para ter clareza no seu negócio?
                </h2>
                <p className="text-gray-600 text-lg mb-10">
                  Preencha o formulário e receba um diagnóstico inicial gratuito do nosso time de especialistas.
                </p>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-dark font-medium">Resposta em até 2 horas</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-dark font-medium">Análise do seu enquadramento</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-dark font-medium">Recomendações objetivas</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-light rounded-[2rem] p-8 md:p-10 border border-gray-100">
                <form onSubmit={handleLeadSubmit} className="flex flex-col gap-5">
                  <Input placeholder="Nome completo" required />
                  <Input type="email" placeholder="E-mail profissional" required />
                  <Input type="tel" placeholder="Telefone / WhatsApp" required />
                  <Input placeholder="Nome da empresa" required />
                  <Button type="submit" size="lg" className="mt-4 shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all" fullWidth>
                    Quero meu diagnóstico
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
