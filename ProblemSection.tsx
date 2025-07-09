export default function ProblemSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-bg to-brand-text/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-4 schema-marker">
            THE PROBLEM
          </h2>
          <div className="w-24 h-1 brand-accent-bg mx-auto schema-line"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="light-gradient p-8 border border-brand-text/10 relative light-focus">
            <div className="redacted-block inline-block px-2 py-1 mb-4 font-mono text-xs">
              THREAT_LEVEL: HIGH
            </div>
            <h3 className="font-mono text-xl font-bold mb-4">
              AI AGENTS SIT BETWEEN YOUR BRAND AND YOUR AUDIENCE
            </h3>
            <p className="text-brand-text/80 mb-4">
              Every interaction is mediated. LLMs filter your message. Recommendation engines decide your visibility. Your brand needs to speak their language.
            </p>
            <div className="font-mono text-sm brand-accent">
              PRIORITY: CRITICAL
            </div>
          </div>
          
          <div className="light-gradient p-8 border border-brand-text/10 relative light-focus">
            <div className="redacted-block inline-block px-2 py-1 mb-4 font-mono text-xs">
              SIGNAL_STRENGTH: WEAK
            </div>
            <h3 className="font-mono text-xl font-bold mb-4">
              SCREENS ARE DISAPPEARING—YOUR SIGNAL NEEDS STRUCTURE
            </h3>
            <p className="text-brand-text/80 mb-4">
              Voice interfaces. Ambient computing. Invisible interactions. Your brand identity must be semantic, not just visual.
            </p>
            <div className="font-mono text-sm brand-accent">
              PRIORITY: URGENT
            </div>
          </div>
          
          <div className="light-gradient p-8 border border-brand-text/10 relative light-focus">
            <div className="redacted-block inline-block px-2 py-1 mb-4 font-mono text-xs">
              VISIBILITY: FAILING
            </div>
            <h3 className="font-mono text-xl font-bold mb-4">
              IF YOU'RE NOT PARSEABLE, YOU'RE INVISIBLE
            </h3>
            <p className="text-brand-text/80 mb-4">
              Unstructured brands get lost in the noise. Your story needs schema. Your identity needs metadata. Your message needs machine readability.
            </p>
            <div className="font-mono text-sm brand-accent">
              PRIORITY: IMMEDIATE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
