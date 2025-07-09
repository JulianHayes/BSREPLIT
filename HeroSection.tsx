import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
      const steps = 8;
      const stepDelay = 100;
      
      for (let i = 0; i <= steps; i++) {
        setTimeout(() => {
          if (i === steps) {
            setDisplayText(finalText);
            setIsDecoding(false);
          } else {
            // Gradually decode characters
            const decoded = finalText.split('').map((char, index) => {
              const shouldDecode = Math.random() > (1 - (i / steps)) * 0.7;
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

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 tactical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-brand-text text-brand-bg font-mono text-xs font-bold tracking-wider">
                <DecodeText finalText="SURVIVAL MANUAL v1.0" delay={0} />
              </div>
              <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <DecodeText finalText="IF YOU CAN'T BE " delay={300} />
                <span className="brand-accent">
                  <DecodeText finalText="PARSED" delay={600} />
                </span>,<br />
                <DecodeText finalText="YOU CAN'T BE " delay={900} />
                <span className="brand-accent">
                  <DecodeText finalText="PICKED" delay={1200} />
                </span>.
              </h1>
              <p className="text-lg sm:text-xl text-brand-text/80 max-w-xl">
                <DecodeText finalText="A survival manual for modern brandcraft. Build your schema. Meet your agents. Make your brand visible." delay={1500} />
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="brand-accent-bg text-brand-bg px-8 py-4 font-mono font-bold text-sm pulse-glow hover:shadow-lg hover:shadow-brand-accent/25 transition-all duration-200"
                onClick={() => scrollToSection('toolkit')}
              >
                [ BUILD YOUR SCHEMA ]
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-brand-text text-brand-text px-8 py-4 font-mono font-bold text-sm hover:bg-brand-text hover:text-brand-bg transition-all duration-200"
                onClick={() => scrollToSection('agents')}
              >
                [ MEET THE AGENTS ]
              </Button>
              <Button 
                variant="outline"
                className="border border-brand-text/30 text-brand-text px-8 py-4 font-mono text-sm hover:border-brand-text transition-all duration-200"
                onClick={() => scrollToSection('manifesto')}
              >
                [ READ MANIFESTO ]
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-brand-text/5 p-8 border border-brand-text/10 relative light-depth">
              <div className="space-y-4 font-mono text-sm">
                <div className="schema-marker">
                <DecodeText finalText="BRAND_SCHEMA" delay={1800} />
              </div>
                <div className="ml-4">
                  <div className="schema-marker">
                    <DecodeText finalText="STRUCTURE" delay={2000} />
                  </div>
                  <div className="ml-4 text-brand-text/60">
                    <DecodeText finalText="├── vision.semantic" delay={2200} /><br />
                    <DecodeText finalText="├── purpose.parseable" delay={2400} /><br />
                    <DecodeText finalText="├── architecture.modular" delay={2600} /><br />
                    <DecodeText finalText="└── agents.active" delay={2800} />
                  </div>
                </div>
                <div className="ml-4">
                  <div className="schema-marker">
                    <DecodeText finalText="STATUS" delay={3000} />
                  </div>
                  <div className="ml-4 brand-accent">
                    <DecodeText finalText="BUILDING..." delay={3200} />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-2 h-2 brand-accent-bg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
