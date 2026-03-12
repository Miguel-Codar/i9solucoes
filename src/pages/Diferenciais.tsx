import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../site.config';
import { 
  HeartHandshake, ShieldCheck, Zap, 
  LineChart, CheckCircle2, Quote 
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

export const Diferenciais: React.FC = () => {
  const differentials = [
    {
      icon: HeartHandshake,
      title: "Atendimento Dedicado",
      desc: "Você não é apenas um número. Nossa equipe conhece o seu negócio pelo nome e entende suas dores reais.",
      color: "text-primary bg-primary/10"
    },
    {
      icon: CheckCircle2,
      title: "Transparência Total",
      desc: "Sem surpresas no fim do mês. Processos claros, comunicação direta e acesso fácil aos seus dados.",
      color: "text-secondary bg-secondary/10"
    },
    {
      icon: LineChart,
      title: "Visão Estratégica",
      desc: "Ajudamos você a ler os números da sua empresa para tomar decisões mais seguras e lucrativas.",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Zap,
      title: "Agilidade",
      desc: "Respostas rápidas e resolução eficiente de problemas. O seu tempo vale ouro e nós respeitamos isso.",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: ShieldCheck,
      title: "Segurança Fiscal",
      desc: "Auditoria contínua e compliance rigoroso para garantir que sua empresa opere 100% dentro da lei.",
      color: "text-purple-600 bg-purple-50"
    }
  ];

  const testimonials = [
    {
      quote: "Boa tarde, sinceramente depois da Inove fiquei muito mais tranquila em relação a receita federal, arrumou o que precisa. Hoje não me preocupo mais como antes, porque sei da responsabilidade e cuidado deles com o cliente. 🙏",
      author: "Ana Carla Falconery",
      role: "Cliente há 6 anos"
    },
    {
      quote: "Profissional capacitado, sempre orientando e conduzindo seus clientes de forma eficiente, buscando sempre o melhor.",
      author: "Sandro Almeida",
      role: "Local Guide"
    },
    {
      quote: "Ótima estrutura e atendimento e um excelente profissional.",
      author: "Erico Barreto Lins",
      role: "Local Guide"
    }
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Header */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-dark text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] bg-primary/20 rounded-full blur-[100px] transform rotate-45" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] bg-secondary/10 rounded-full blur-[100px] transform -rotate-45" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
              Por que escolher a <span className="text-secondary">i9?</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Nossa missão é descomplicar a contabilidade e entregar resultados que impactam diretamente o seu bolso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Differentials List */}
      <section className="py-24 lg:py-32 bg-light relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {differentials.map((diff, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-white rounded-[2rem] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full group"
              >
                <div className={`w-16 h-16 rounded-2xl ${diff.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <diff.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">{diff.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">{diff.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-light/50 rounded-l-[5rem] -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark mb-6">
              O que dizem nossos clientes
            </h2>
            <p className="text-lg text-gray-600">
              Histórias reais de empresas que cresceram com o nosso suporte.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((test, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-white rounded-[2rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <Quote size={48} className="text-primary/10 absolute top-8 left-8 group-hover:text-primary/20 transition-colors" />
                <div className="relative z-10 pt-4">
                  <p className="text-gray-700 italic mb-8 leading-relaxed">"{test.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-light border border-gray-200 flex items-center justify-center text-primary font-bold shadow-sm">
                      {test.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-dark">{test.author}</p>
                      <p className="text-sm text-gray-500">{test.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary text-white text-center relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Faça parte desse grupo de empresas de sucesso
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Agende uma conversa sem compromisso e descubra como podemos ajudar o seu negócio a decolar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href={siteConfig.whatsappLink} variant="secondary" size="lg" className="shadow-xl hover:-translate-y-1 transition-transform">
                Falar com um especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
