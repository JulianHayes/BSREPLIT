import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// Leet speak decoder utility
const leetMap: Record<string, string> = {
  '4': 'A', '8': 'B', '3': 'E', '1': 'I', '0': 'O', '5': 'S', '7': 'T', '6': 'G', '9': 'G'
};

const toLeet = (text: string): string => {
  return text.replace(/[ABEGIOTSG]/g, (char) => {
    const leetChar = Object.entries(leetMap).find(([leet, normal]) => normal === char)?.[0];
    return leetChar || char;
  });
};

const DecodeText = ({ finalText, delay = 0 }: { finalText: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState(toLeet(finalText));
  const [isDecoding, setIsDecoding] = useState(false);

  useEffect(() => {
    const startDecoding = () => {
      setIsDecoding(true);
      const leetText = toLeet(finalText);
      const steps = 6;
      const stepDelay = 120;
      
      for (let i = 0; i <= steps; i++) {
        setTimeout(() => {
          if (i === steps) {
            setDisplayText(finalText);
            setIsDecoding(false);
          } else {
            // Gradually decode characters
            const decoded = finalText.split('').map((char, index) => {
              const shouldDecode = Math.random() > (1 - (i / steps)) * 0.8;
              return shouldDecode ? char : leetText[index] || char;
            }).join('');
            setDisplayText(decoded);
          }
        }, delay + (i * stepDelay));
      }
    };

    const timer = setTimeout(startDecoding, delay);
    return () => clearTimeout(timer);
  }, [finalText, delay]);

  return (
    <span className={`${isDecoding ? 'animate-pulse' : ''}`}>
      {displayText}
    </span>
  );
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-b border-brand-text/10 brand-bg/95 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-mono text-xl font-bold">
            <DecodeText finalText="BRAND" delay={0} />
            <span className="brand-accent">:</span>
            <DecodeText finalText="SCHEMA" delay={200} />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-mono text-sm">
            <button 
              onClick={() => scrollToSection('agents')}
              className="hover:text-brand-accent transition-colors"
            >
              AGENTS
            </button>
            <button 
              onClick={() => scrollToSection('manifesto')}
              className="hover:text-brand-accent transition-colors"
            >
              MANIFESTO
            </button>
            <button 
              onClick={() => scrollToSection('toolkit')}
              className="hover:text-brand-accent transition-colors"
            >
              TOOLKIT
            </button>
          </div>

          {/* Mobile Navigation */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-brand-text/10 py-4">
            <div className="flex flex-col space-y-2 font-mono text-sm">
              <button 
                onClick={() => scrollToSection('agents')}
                className="text-left py-2 hover:text-brand-accent transition-colors"
              >
                AGENTS
              </button>
              <button 
                onClick={() => scrollToSection('manifesto')}
                className="text-left py-2 hover:text-brand-accent transition-colors"
              >
                MANIFESTO
              </button>
              <button 
                onClick={() => scrollToSection('toolkit')}
                className="text-left py-2 hover:text-brand-accent transition-colors"
              >
                TOOLKIT
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
