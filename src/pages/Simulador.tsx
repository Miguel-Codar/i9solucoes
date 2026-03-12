import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { CheckCircle2, ArrowLeft, ArrowRight, Building2, TrendingUp, Users, Briefcase } from 'lucide-react';

type CompanyType = 'MEI' | 'Simples Nacional' | 'Lucro Presumido' | 'Lucro Real' | 'Ainda não tenho empresa';
type Revenue = 'Até R$ 10 mil' | 'R$ 10 a 30 mil' | 'R$ 30 a 80 mil' | 'R$ 80 a 200 mil' | 'Acima de R$ 200 mil';
type Employees = '0' | '1 a 3' | '4 a 10' | '11 a 30' | '31+';
type Service = 'Abertura/Regularização' | 'Contabilidade mensal' | 'Fiscal/Tributário' | 'Folha de pagamento' | 'BPO Financeiro' | 'Certidões e obrigações' | 'Consultoria estratégica';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    z: 0,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    z: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0
  })
};

export const Simulador: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const [companyType, setCompanyType] = useState<CompanyType | null>(null);
  const [revenue, setRevenue] = useState<Revenue | null>(null);
  const [employees, setEmployees] = useState<Employees | null>(null);
  const [services, setServices] = useState<Service[]>([]);

  const handleNext = () => {
    setDirection(1);
    setStep(s => Math.min(s + 1, 4));
  };
  
  const handlePrev = () => {
    setDirection(-1);
    setStep(s => Math.max(s - 1, 1));
  };

  const calculateEstimate = () => {
    let base = 0;
    switch (companyType) {
      case 'MEI': base = 199; break;
      case 'Simples Nacional': base = 399; break;
      case 'Lucro Presumido': base = 699; break;
      case 'Lucro Real': base = 999; break;
      case 'Ainda não tenho empresa': base = 299; break;
    }

    let revMultiplier = 0;
    switch (revenue) {
      case 'Até R$ 10 mil': revMultiplier = 0; break;
      case 'R$ 10 a 30 mil': revMultiplier = 120; break;
      case 'R$ 30 a 80 mil': revMultiplier = 250; break;
      case 'R$ 80 a 200 mil': revMultiplier = 450; break;
      case 'Acima de R$ 200 mil': revMultiplier = 700; break;
    }

    let empMultiplier = 0;
    switch (employees) {
      case '0': empMultiplier = 0; break;
      case '1 a 3': empMultiplier = 80; break;
      case '4 a 10': empMultiplier = 180; break;
      case '11 a 30': empMultiplier = 350; break;
      case '31+': empMultiplier = 600; break;
    }

    let servMultiplier = 0;
    services.forEach(s => {
      if (s === 'BPO Financeiro') servMultiplier += 220;
      else servMultiplier += 70;
    });

    const totalMin = base + revMultiplier + empMultiplier + servMultiplier;
    const totalMax = Math.round(totalMin * 1.25);

    return { min: totalMin, max: totalMax };
  };

  const handleFinish = () => {
    setShowResult(true);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    navigate('/obrigado');
  };

  const resetSimulator = () => {
    setStep(1);
    setDirection(-1);
    setCompanyType(null);
    setRevenue(null);
    setEmployees(null);
    setServices([]);
    setShowResult(false);
  };

  const toggleService = (service: Service) => {
    setServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div 
            key="step1"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Building2 size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark tracking-tight">Qual é o tipo da sua empresa?</h2>
            </div>
            <div className="grid gap-4">
              {(['MEI', 'Simples Nacional', 'Lucro Presumido', 'Lucro Real', 'Ainda não tenho empresa'] as CompanyType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => { setCompanyType(type); setTimeout(handleNext, 300); }}
                  className={`p-6 text-left rounded-2xl border transition-all duration-200 flex items-center justify-between group hover:scale-[1.01] ${
                    companyType === type 
                      ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' 
                      : 'border-gray-200 bg-white hover:border-primary/50 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  <span className={`text-lg font-medium ${companyType === type ? 'text-primary' : 'text-dark'}`}>
                    {type}
                  </span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    companyType === type ? 'border-primary bg-primary' : 'border-gray-300 group-hover:border-primary/50'
                  }`}>
                    {companyType === type && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            key="step2"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                <TrendingUp size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark tracking-tight">Qual é o seu faturamento mensal médio?</h2>
            </div>
            <div className="grid gap-4">
              {(['Até R$ 10 mil', 'R$ 10 a 30 mil', 'R$ 30 a 80 mil', 'R$ 80 a 200 mil', 'Acima de R$ 200 mil'] as Revenue[]).map((rev) => (
                <button
                  key={rev}
                  onClick={() => { setRevenue(rev); setTimeout(handleNext, 300); }}
                  className={`p-6 text-left rounded-2xl border transition-all duration-200 flex items-center justify-between group hover:scale-[1.01] ${
                    revenue === rev 
                      ? 'border-secondary bg-secondary/5 shadow-md shadow-secondary/10' 
                      : 'border-gray-200 bg-white hover:border-secondary/50 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  <span className={`text-lg font-medium ${revenue === rev ? 'text-secondary' : 'text-dark'}`}>
                    {rev}
                  </span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    revenue === rev ? 'border-secondary bg-secondary' : 'border-gray-300 group-hover:border-secondary/50'
                  }`}>
                    {revenue === rev && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            key="step3"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                <Users size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark tracking-tight">Quantos funcionários sua empresa possui?</h2>
            </div>
            <div className="grid gap-4">
              {(['0', '1 a 3', '4 a 10', '11 a 30', '31+'] as Employees[]).map((emp) => (
                <button
                  key={emp}
                  onClick={() => { setEmployees(emp); setTimeout(handleNext, 300); }}
                  className={`p-6 text-left rounded-2xl border transition-all duration-200 flex items-center justify-between group hover:scale-[1.01] ${
                    employees === emp 
                      ? 'border-green-600 bg-green-50 shadow-md shadow-green-600/10' 
                      : 'border-gray-200 bg-white hover:border-green-600/50 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  <span className={`text-lg font-medium ${employees === emp ? 'text-green-600' : 'text-dark'}`}>
                    {emp}
                  </span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    employees === emp ? 'border-green-600 bg-green-600' : 'border-gray-300 group-hover:border-green-600/50'
                  }`}>
                    {employees === emp && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div 
            key="step4"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Briefcase size={28} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-dark tracking-tight mb-2">Quais serviços você precisa?</h2>
                <p className="text-gray-500">Selecione quantas opções quiser.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {(['Abertura/Regularização', 'Contabilidade mensal', 'Fiscal/Tributário', 'Folha de pagamento', 'BPO Financeiro', 'Certidões e obrigações', 'Consultoria estratégica'] as Service[]).map((service) => (
                <button
                  key={service}
                  onClick={() => toggleService(service)}
                  className={`p-5 text-left rounded-2xl border transition-all duration-200 flex items-start gap-4 group hover:scale-[1.01] ${
                    services.includes(service)
                      ? 'border-blue-600 bg-blue-50 shadow-md shadow-blue-600/10' 
                      : 'border-gray-200 bg-white hover:border-blue-600/50 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    services.includes(service) ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 group-hover:border-blue-600/50'
                  }`}>
                    {services.includes(service) && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}><CheckCircle2 size={16} /></motion.div>}
                  </div>
                  <span className={`font-medium ${services.includes(service) ? 'text-blue-600' : 'text-dark'}`}>
                    {service}
                  </span>
                </button>
              ))}
            </div>
            <div className="pt-10 flex justify-end">
              <Button onClick={handleFinish} size="lg" disabled={services.length === 0} className="shadow-lg hover:-translate-y-1 transition-transform">
                Ver estimativa <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </motion.div>
        );
    }
  };

  if (showResult) {
    const estimate = calculateEstimate();
    return (
      <div className="min-h-[calc(100vh-80px)] bg-light py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[3rem] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100"
          >
            <div className="flex flex-col items-center text-center mb-12">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-6"
              >
                <CheckCircle2 size={40} />
              </motion.div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4 tracking-tight">Simulação concluída!</h1>
              <p className="text-lg text-gray-600">Com base nas suas respostas, preparamos uma estimativa personalizada.</p>
            </div>

            <div className="bg-light rounded-3xl p-6 md:p-8 mb-10 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Resumo do seu cenário</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Tipo de empresa</span>
                  <span className="font-semibold text-dark text-right">{companyType}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Faturamento</span>
                  <span className="font-semibold text-dark text-right">{revenue}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Funcionários</span>
                  <span className="font-semibold text-dark text-right">{employees}</span>
                </div>
                <div className="flex justify-between items-start py-3">
                  <span className="text-gray-600 mt-1">Serviços selecionados</span>
                  <div className="flex flex-col items-end gap-2">
                    {services.map(s => (
                      <span key={s} className="font-medium text-dark text-sm bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button onClick={() => setShowModal(true)} size="lg" className="sm:w-auto shadow-lg hover:-translate-y-1 transition-transform">
                Receber proposta personalizada
              </Button>
              <Button onClick={resetSimulator} variant="outline" size="lg" className="sm:w-auto hover:bg-light">
                Simular novamente
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Lead Capture Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-white rounded-[3rem] p-8 md:p-10 w-full max-w-lg shadow-2xl relative"
              >
                <button 
                  onClick={() => setShowModal(false)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-dark transition-colors"
                  aria-label="Fechar"
                >
                  <ArrowLeft className="rotate-45" size={24} />
                </button>
                
                <h3 className="text-2xl font-display font-bold text-dark mb-2">Quase lá!</h3>
                <p className="text-gray-600 mb-8">Preencha seus dados para receber a proposta detalhada por e-mail e WhatsApp.</p>
                
                <form onSubmit={handleLeadSubmit} className="flex flex-col gap-5">
                  <Input label="Nome completo" placeholder="Seu nome" required />
                  <Input type="email" label="E-mail profissional" placeholder="seu@email.com" required />
                  <Input type="tel" label="Telefone / WhatsApp" placeholder="(00) 00000-0000" required />
                  <Input label="Nome da empresa" placeholder="Sua empresa" defaultValue={companyType === 'Ainda não tenho empresa' ? '' : undefined} required={companyType !== 'Ainda não tenho empresa'} />
                  <Button type="submit" size="lg" className="mt-4 shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform" fullWidth>
                    Enviar e receber proposta
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-light py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100"
        >
          {/* Progress Bar */}
          <div className="mb-14">
            <div className="flex justify-between text-sm font-medium text-gray-500 mb-4">
              <span>Etapa {step} de 4</span>
              <span>{step * 25}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${step * 25}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="min-h-[400px] relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              {renderStepContent()}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
            <Button 
              onClick={handlePrev} 
              variant="ghost" 
              disabled={step === 1}
              className={step === 1 ? 'invisible' : ''}
            >
              <ArrowLeft size={18} className="mr-2" /> Voltar
            </Button>
            
            {step < 4 && (
              <Button 
                onClick={handleNext}
                disabled={
                  (step === 1 && !companyType) ||
                  (step === 2 && !revenue) ||
                  (step === 3 && !employees)
                }
                className="shadow-md hover:-translate-y-0.5 transition-transform"
              >
                Próximo <ArrowRight size={18} className="ml-2" />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
