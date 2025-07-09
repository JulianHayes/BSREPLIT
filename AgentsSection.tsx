import AgentCard from "./AgentCard";
import { Button } from "@/components/ui/button";

const agents = [
  {
    id: "AGENT_01",
    name: "BRAND STRATEGY AGENT",
    description: "Structures vision, purpose, architecture. Transforms abstract brand concepts into parseable frameworks.",
    status: "ACTIVE"
  },
  {
    id: "AGENT_02", 
    name: "BRAND MANAGEMENT AGENT",
    description: "Aligns assets, governance, taxonomy. Ensures consistency across all brand touchpoints and channels.",
    status: "ACTIVE"
  },
  {
    id: "AGENT_03",
    name: "BRAND MARKETING AGENT", 
    description: "Crafts semantic campaigns, LLM-ready messaging. Optimises content for AI agent interpretation.",
    status: "ACTIVE"
  },
  {
    id: "AGENT_04",
    name: "BRAND INTELLIGENCE AGENT",
    description: "Monitors visibility, signals, prompt response coverage. Analyses brand performance in AI systems.",
    status: "ACTIVE"
  }
];

export default function AgentsSection() {
  return (
    <section id="agents" className="py-16 lg:py-24 bg-gradient-to-b from-brand-bg to-brand-text/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-4 schema-marker">
            THE BRAND:SCHEMA AGENTS
          </h2>
          <div className="w-24 h-1 brand-accent-bg mx-auto schema-line"></div>
          <p className="text-brand-text/80 mt-6 max-w-2xl mx-auto">
            Each one is modular, autonomous, and designed to help structure brands for a machine-mediated world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-brand-text/5 p-8 border border-brand-text/10 inline-block light-depth">
            <p className="font-mono text-sm mb-4">
              AGENT_INTERACTION_LAYER: ENABLED
            </p>
            <div className="space-x-4">
              <Button className="brand-accent-bg text-brand-bg px-6 py-2 font-mono text-sm font-bold">
                [ RUN FULL SEQUENCE ]
              </Button>
              <Button variant="outline" className="border border-brand-text/30 px-6 py-2 font-mono text-sm">
                [ INDIVIDUAL AGENTS ]
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
