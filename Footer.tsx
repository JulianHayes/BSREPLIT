export default function Footer() {
  return (
    <footer className="bg-brand-text text-brand-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-mono text-xl font-bold mb-4">
              BRAND<span className="brand-accent">:</span>SCHEMA
            </div>
            <p className="text-sm text-brand-bg/80">
              A survival manual for modern brandcraft. Signal-focused tools for the age of AI.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono font-bold mb-4">AGENTS</h4>
            <ul className="space-y-2 text-sm text-brand-bg/80">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Strategy Agent</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Management Agent</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Marketing Agent</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Intelligence Agent</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-sm text-brand-bg/80">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Schema Examples</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold mb-4">PROTOCOL</h4>
            <ul className="space-y-2 text-sm text-brand-bg/80">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Version 1.0</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">License</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Contributing</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-brand-bg/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-mono text-sm text-brand-bg/60">
              © 2025 BRAND:SCHEMA. All systems operational.
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="w-2 h-2 brand-accent-bg rounded-full animate-pulse"></div>
              <span className="font-mono text-sm text-brand-bg/80">STATUS: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
