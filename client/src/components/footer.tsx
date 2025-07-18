import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { personalInfo } from '@/lib/constants';

const Footer = () => {
  const { scrollToSection } = useSmoothScroll();

  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-slate-800/80 border-t border-slate-700/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm">
            © 2024 {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
