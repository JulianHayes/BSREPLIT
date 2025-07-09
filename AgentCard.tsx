import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Agent {
  id: string;
  name: string;
  description: string;
  status: string;
}

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  const { toast } = useToast();

  const handleEngageAgent = () => {
    toast({
      title: "Agent Engaged",
      description: `${agent.name} is now processing your brand schema...`,
    });
  };

  return (
    <div className="brand-bg border border-brand-text/10 p-6 hover:border-brand-accent/50 transition-all duration-200 group light-gradient light-focus">
      <div className="flex items-center justify-between mb-4">
        <div className="redacted-block px-2 py-1 font-mono text-xs">
          {agent.id}
        </div>
        <div className="w-3 h-3 brand-accent-bg rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <h3 className="font-mono text-lg font-bold mb-2">
        {agent.name}
      </h3>
      <p className="text-brand-text/80 text-sm mb-4">
        {agent.description}
      </p>
      <div className="font-mono text-xs brand-accent">
        STATUS: {agent.status}
      </div>
      <Button 
        variant="outline"
        className="w-full mt-4 border border-brand-text/20 py-2 font-mono text-xs hover:bg-brand-text hover:text-brand-bg transition-all duration-200"
        onClick={handleEngageAgent}
      >
        [ ENGAGE AGENT ]
      </Button>
    </div>
  );
}
