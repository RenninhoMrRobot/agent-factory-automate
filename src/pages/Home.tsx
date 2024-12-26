import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Brain, Sparkles, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <Layout>
      <div className="space-y-8 relative min-h-screen">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-emerald-900/20 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-300%">
              Bem-vindo ao AI-Firm AutoTasks
            </h1>
            <p className="text-xl text-muted-foreground">
              Sua plataforma completa para automação inteligente de processos empresariais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Bot,
                title: "Agentes Inteligentes",
                description: "Crie e gerencie assistentes virtuais personalizados para suas necessidades",
                action: "Criar Agente",
                path: "/agents"
              },
              {
                icon: Brain,
                title: "Automação de Processos",
                description: "Automatize tarefas repetitivas e aumente a eficiência operacional",
                action: "Explorar Automações",
                path: "/automation"
              },
              {
                icon: Sparkles,
                title: "Analytics Avançado",
                description: "Visualize e analise o desempenho dos seus agentes e processos",
                action: "Ver Analytics",
                path: "/analytics"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-secondary/90 to-secondary/60 border-none backdrop-blur-sm hover:translate-y-[-8px] group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 w-fit mb-4">
                  <feature.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="group/button hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  {feature.action}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;