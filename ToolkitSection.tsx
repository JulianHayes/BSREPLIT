import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const toolkits = [
  {
    id: "TOOLKIT_01",
    name: "SCHEMA BUILDER",
    description: "Interactive tool to structure your brand identity into machine-readable format. Export JSON-LD, markdown, or API endpoints.",
    buttonText: "[ DOWNLOAD TOOLKIT ]",
    variant: "primary"
  },
  {
    id: "TOOLKIT_02",
    name: "SEMANTIC AUDITOR", 
    description: "Analyse your existing brand assets for AI readability. Get scores, recommendations, and optimisation strategies.",
    buttonText: "[ ACCESS AUDITOR ]",
    variant: "secondary"
  },
  {
    id: "TOOLKIT_03",
    name: "AGENT FRAMEWORK",
    description: "Deploy your own brand intelligence agents. Monitor, optimise, and evolve your brand's AI visibility in real-time.",
    buttonText: "[ FRAMEWORK ACCESS ]",
    variant: "tertiary"
  }
];

export default function ToolkitSection() {
  const { toast } = useToast();

  const handleToolkitAccess = (toolkitName: string) => {
    toast({
      title: "Toolkit Access",
      description: `Initializing ${toolkitName}...`,
    });
  };

  return (
    <section id="toolkit" className="py-16 lg:py-24 bg-gradient-to-b from-brand-bg to-brand-text/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-4 schema-marker">
            TOOLKIT ACCESS
          </h2>
          <div className="w-24 h-1 brand-accent-bg mx-auto schema-line"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {toolkits.map((toolkit) => (
            <div key={toolkit.id} className="brand-bg border border-brand-text/10 p-8 light-gradient light-focus">
              <div className="redacted-block inline-block px-2 py-1 mb-4 font-mono text-xs">
                {toolkit.id}
              </div>
              <h3 className="font-mono text-xl font-bold mb-4">{toolkit.name}</h3>
              <p className="text-brand-text/80 mb-6">
                {toolkit.description}
              </p>
              <Button 
                className={`w-full py-3 font-mono text-sm transition-all duration-200 ${
                  toolkit.variant === 'primary' 
                    ? 'brand-accent-bg text-brand-bg font-bold hover:shadow-lg' 
                    : toolkit.variant === 'secondary'
                    ? 'border border-brand-text hover:bg-brand-text hover:text-brand-bg'
                    : 'border border-brand-text/30 hover:border-brand-text'
                }`}
                variant={toolkit.variant === 'primary' ? 'default' : 'outline'}
                onClick={() => handleToolkitAccess(toolkit.name)}
              >
                {toolkit.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
