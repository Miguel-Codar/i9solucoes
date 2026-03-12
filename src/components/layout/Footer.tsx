import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../site.config';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="i9 Soluções Contábeis" className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
              {siteConfig.slogan}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-lg text-white mb-2">Navegação</h4>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
              <li><Link to="/simulador" className="hover:text-primary transition-colors">Simulador</Link></li>
              <li><Link to="/servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link to="/diferenciais" className="hover:text-primary transition-colors">Diferenciais</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="font-display font-semibold text-lg text-white mb-2">Contato</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <p className="font-display italic text-gray-400">"{siteConfig.slogan}"</p>
        </div>
      </div>
    </footer>
  );
};
