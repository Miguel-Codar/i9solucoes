import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../site.config';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export const Obrigado: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-light flex items-center justify-center py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center text-green-600 mx-auto mb-8"
          >
            <CheckCircle2 size={48} />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-display font-bold text-dark mb-6 tracking-tight"
          >
            Recebemos sua solicitação ✅
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed"
          >
            Nosso time vai analisar suas informações e entrará em contato com você em breve.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-light rounded-3xl p-8 border border-gray-100 mb-10"
          >
            <h3 className="text-lg font-bold text-dark mb-4">Quer agilizar o atendimento?</h3>
            <p className="text-gray-600 mb-6">
              Você pode nos chamar diretamente no WhatsApp agora mesmo.
            </p>
            <Button 
              href={siteConfig.whatsappLink} 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 hover:shadow-green-500/30 text-white shadow-lg hover:-translate-y-1 transition-transform"
              fullWidth
            >
              <MessageCircle size={20} className="mr-2" />
              Falar agora no WhatsApp
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button to="/" variant="ghost" className="hover:bg-light">
              Voltar para a página inicial
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
