import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
}

export function ContactPage({ onNavigateHome, onNavigateAbout }: ContactPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white h-screen relative overflow-hidden">
      {/* Header */}
      <motion.header 
        className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 md:py-6 font-light relative bg-white"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <div className="text-sm md:text-lg text-black">elran levy portfolio</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 md:gap-8 lg:gap-10 text-sm md:text-base text-black">
          <button 
            onClick={onNavigateHome}
            className="hover:opacity-70 transition-opacity font-light"
          >
            main
          </button>
          <button 
            onClick={onNavigateAbout}
            className="hover:opacity-70 transition-opacity font-light"
          >
            about
          </button>
          <a href="#contact" className="hover:opacity-70 transition-opacity font-normal underline underline-offset-4">
            contact
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden relative text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white z-40 flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col gap-8 text-[20px] text-center text-black">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateHome();
                }}
                className="hover:opacity-70 transition-opacity font-light"
              >
                main
              </button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateAbout();
                }}
                className="hover:opacity-70 transition-opacity font-light"
              >
                about
              </button>
              <a 
                href="#contact" 
                className="hover:opacity-70 transition-opacity font-light underline underline-offset-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                contact
              </a>
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-12 lg:py-16 gap-6 md:gap-8">
        <motion.div 
          className="flex flex-col gap-4 md:gap-6 max-w-2xl w-full text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-[36px] md:text-4xl lg:text-5xl xl:text-6xl text-text-primary font-extralight leading-tight tracking-[-0.72px]">
            Let's Work Together
          </h1>
          
          <p className="text-text-primary font-extralight leading-relaxed text-[18px] md:text-[24px] tracking-[-0.72px]">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-4 md:gap-6 max-w-md w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-text-primary font-extralight text-sm md:text-base">
              Name
            </label>
            <input 
              type="text" 
              id="name"
              className="border border-gray-300 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-text-primary font-extralight text-sm md:text-base">
              Email
            </label>
            <input 
              type="email" 
              id="email"
              className="border border-gray-300 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-text-primary font-extralight text-sm md:text-base">
              Message
            </label>
            <textarea 
              id="message"
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-brand resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button className="bg-brand text-white px-8 py-3 md:px-10 md:py-4 rounded-lg text-sm md:text-base hover:opacity-90 transition-opacity mt-2">
            Send Message
          </button>
        </motion.div>
      </main>
    </div>
  );
}