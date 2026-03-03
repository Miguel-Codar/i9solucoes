import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { siteConfig } from '../site.config';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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

export const Contato: React.FC = () => {
  const navigate = useNavigate();

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/obrigado');
  };

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
              Fale <span className="text-secondary">Conosco</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Estamos prontos para entender as necessidades da sua empresa e oferecer a melhor solução contábil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32 bg-light relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="flex flex-col gap-12"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark mb-6">
                  Informações de Contato
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nossa equipe está à disposição para tirar suas dúvidas e agendar uma reunião.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Telefone</h3>
                    <p className="text-gray-600">{siteConfig.phone}</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">E-mail</h3>
                    <p className="text-gray-600">{siteConfig.email}</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Endereço</h3>
                    <p className="text-gray-600">{siteConfig.address}</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Horário</h3>
                    <p className="text-gray-600">{siteConfig.hours}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[3rem] p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-dark mb-6">Envie uma mensagem</h3>
                <form onSubmit={handleLeadSubmit} className="flex flex-col gap-5">
                  <Input label="Nome completo" placeholder="Seu nome" required />
                  <Input type="email" label="E-mail profissional" placeholder="seu@email.com" required />
                  <Input type="tel" label="Telefone / WhatsApp" placeholder="(00) 00000-0000" required />
                  <Input label="Nome da empresa" placeholder="Sua empresa" required />
                  <div className="w-full flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Mensagem</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 min-h-[120px]"
                      placeholder="Como podemos ajudar?"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="mt-4 shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all" fullWidth>
                    Enviar mensagem
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
