import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../site.config';
import { 
  Building2, Calculator, PieChart, Users, 
  Wallet, FileCheck, Lightbulb, ArrowRight,
  CheckCircle2
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

export const Servicos: React.FC = () => {
  const mainServices = [
    {
      icon: Building2,
      title: "Abertura e Regularização",
      desc: "Cuidamos de toda a burocracia para você abrir sua empresa com segurança, escolhendo o melhor regime tributário desde o primeiro dia.",
      features: ["Análise de viabilidade", "Definição de CNAEs", "Planejamento societário"],
      color: "bg-primary/10 text-primary",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: PieChart,
      title: "Gestão Fiscal e Tributária",
      desc: "Apuração de impostos, entrega de obrigações acessórias e planejamento tributário contínuo para reduzir sua carga fiscal legalmente.",
      features: ["Planejamento tributário", "Apuração de impostos", "Obrigações acessórias"],
      color: "bg-secondary/10 text-secondary",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const otherServices = [
    {
      icon: Calculator,
      title: "Contabilidade Mensal",
      desc: "Fechamento contábil preciso, balancetes e demonstrações financeiras que refletem a real situação do seu negócio.",
      colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
      icon: Users,
      title: "Folha de Pagamento (RH)",
      desc: "Processamento completo da folha, admissões, rescisões, férias e gestão de benefícios, garantindo conformidade trabalhista.",
      colSpan: "md:col-span-1"
    },
    {
      icon: Wallet,
      title: "BPO Financeiro",
      desc: "Terceirização do seu financeiro: contas a pagar, a receber, conciliação bancária e emissão de notas fiscais. Foco total no seu core business.",
      colSpan: "md:col-span-1 lg:col-span-2"
    },
    {
      icon: FileCheck,
      title: "Certidões e Obrigações",
      desc: "Monitoramento constante da regularidade da sua empresa perante os órgãos públicos, garantindo a emissão de certidões negativas.",
      colSpan: "md:col-span-1"
    },
    {
      icon: Lightbulb,
      title: "Consultoria Estratégica",
      desc: "Análise de viabilidade, valuation, reestruturação societária e apoio na tomada de decisões complexas com base em dados.",
      colSpan: "md:col-span-2"
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
              Nossos <span className="text-secondary">Serviços</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Soluções completas e integradas para simplificar a gestão e impulsionar o crescimento da sua empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services (Alternating Layout) */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {mainServices.map((service, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2 lg:pl-12'}`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <CheckCircle2 size={20} className={index % 2 === 0 ? "text-primary" : "text-secondary"} /> 
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button to="/simulador" variant={index % 2 === 0 ? "default" : "outline"} className="group shadow-lg hover:-translate-y-1 transition-all">
                    Simular este serviço <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`order-1 relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-secondary/20 rotate-3' : 'bg-primary/10 -rotate-3'} rounded-[3rem] transform scale-105 -z-10`} />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-[3rem] shadow-2xl object-cover h-[450px] w-full border-4 border-white"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid for Other Services */}
      <section className="py-24 lg:py-32 bg-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark mb-6">
              Mais soluções para o seu dia a dia
            </h2>
            <p className="text-lg text-gray-600">
              Um ecossistema completo de serviços contábeis e financeiros.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherServices.map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className={`bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full group ${service.colSpan}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-light flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <Button to="/simulador" variant="ghost" className="px-0 hover:bg-transparent text-primary group-hover:text-primary-dark">
                    Simular este serviço <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-dark rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden"
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Não sabe exatamente do que precisa?
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                Fale com um de nossos especialistas. Faremos um diagnóstico gratuito do seu cenário atual e indicaremos as melhores soluções.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href={siteConfig.whatsappLink} size="lg" className="bg-secondary hover:bg-secondary/90 text-dark font-bold shadow-lg shadow-secondary/20 hover:-translate-y-1 transition-all">
                  Falar no WhatsApp
                </Button>
                <Button to="/simulador" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  Simular contrato
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
