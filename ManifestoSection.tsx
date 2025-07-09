export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-4 schema-marker">
            MANIFESTO
          </h2>
          <div className="w-24 h-1 brand-accent-bg mx-auto schema-line"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-brand-text/5 p-8 border border-brand-text/10 light-depth">
              <h3 className="font-mono text-xl font-bold mb-4">PRINCIPLE 01: STRUCTURE OVER STORY</h3>
              <p className="text-brand-text/80 mb-4">
                Brands must be architected, not just designed. Every element needs semantic meaning that machines can parse and humans can understand.
              </p>
              <div className="font-mono text-sm brand-accent">
                IMPLEMENTATION: SCHEMA_FIRST_DESIGN
              </div>
            </div>
            
            <div className="bg-brand-text/5 p-8 border border-brand-text/10 light-depth">
              <h3 className="font-mono text-xl font-bold mb-4">PRINCIPLE 02: VISIBILITY THROUGH PARSABILITY</h3>
              <p className="text-brand-text/80 mb-4">
                If AI can't understand your brand, your audience won't find it. Machine readability is the new accessibility.
              </p>
              <div className="font-mono text-sm brand-accent">
                IMPLEMENTATION: SEMANTIC_OPTIMISATION
              </div>
            </div>
            
            <div className="bg-brand-text/5 p-8 border border-brand-text/10 light-depth">
              <h3 className="font-mono text-xl font-bold mb-4">PRINCIPLE 03: MODULAR BRAND SYSTEMS</h3>
              <p className="text-brand-text/80 mb-4">
                Brands are no longer static entities. They're dynamic systems that adapt, respond, and evolve with intelligent agents.
              </p>
              <div className="font-mono text-sm brand-accent">
                IMPLEMENTATION: AGENT_DRIVEN_IDENTITY
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-brand-text p-8 text-brand-bg">
              <h3 className="font-mono text-xl font-bold mb-4">THE SURVIVAL IMPERATIVE</h3>
              <p className="mb-4">
                Every brand interaction now happens through an intermediary. Search engines, recommendation algorithms, AI assistants, and agents filter reality.
              </p>
              <p className="mb-4">
                The brands that survive are those that can be understood, categorised, and recommended by machines while still resonating with humans.
              </p>
              <div className="font-mono text-sm brand-accent">
                OUTCOME: HUMAN_MACHINE_RESONANCE
              </div>
            </div>
            
            <div className="border-2 border-brand-accent p-8 light-gradient light-emphasis">
              <h3 className="font-mono text-xl font-bold mb-4 brand-accent">MISSION: BRAND SURVIVAL</h3>
              <p className="text-brand-text/80 mb-4">
                BRAND:SCHEMA exists to ensure your brand doesn't just survive the age of AI—it thrives. We provide the tools, frameworks, and agents to make your brand both human-resonant and machine-readable.
              </p>
              <div className="font-mono text-sm brand-accent">
                STATUS: OPERATIONAL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
