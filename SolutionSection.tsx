export default function SolutionSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-4 schema-marker">
            THE SOLUTION
          </h2>
          <div className="w-24 h-1 brand-accent-bg mx-auto schema-line"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-3xl font-bold mb-4">
                BRAND AS <span className="brand-accent">SCHEMA</span>.<br />
                NOT MOODBOARDS.<br />
                NOT SLOGANS.
              </h3>
              <p className="text-lg text-brand-text/80 mb-6">
                Tools to transform your brand into a structured, semantic system. Guidance from intelligent agents that can simulate, structure, and score your brand's visibility.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 brand-accent-bg"></div>
                <span className="font-mono text-sm">STRUCTURED_IDENTITY.protocol</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 brand-accent-bg"></div>
                <span className="font-mono text-sm">SEMANTIC_MESSAGING.framework</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 brand-accent-bg"></div>
                <span className="font-mono text-sm">MACHINE_READABLE.metadata</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 brand-accent-bg"></div>
                <span className="font-mono text-sm">AGENT_OPTIMIZED.communication</span>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-text/5 p-8 border border-brand-text/10 light-depth">
            <div className="font-mono text-sm space-y-2">
              <div className="brand-accent">// SCHEMA STRUCTURE</div>
              <div>{"{"}</div>
              <div className="ml-4">"brand": {"{"}</div>
              <div className="ml-8">"vision": "parseable_identity",</div>
              <div className="ml-8">"purpose": "machine_readable_meaning",</div>
              <div className="ml-8">"architecture": "modular_semantic_system",</div>
              <div className="ml-8">"agents": [</div>
              <div className="ml-12">"strategy", "management",</div>
              <div className="ml-12">"marketing", "intelligence"</div>
              <div className="ml-8">],</div>
              <div className="ml-8">"status": "<span className="brand-accent">building</span>"</div>
              <div className="ml-4">{"}"}</div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
