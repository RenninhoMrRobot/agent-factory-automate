import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Brain, Sparkles, ArrowRight, Activity, Users, BarChart2, MessageSquare } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Home = () => {
  return (
    <Layout>
      <div className="space-y-8 relative min-h-screen">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-emerald-900/20 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-4 mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-300%">
              Bem-vindo ao AI-Firm AutoTasks
            </h1>
            <p className="text-xl text-muted-foreground">
              Sua plataforma completa para automação inteligente de processos empresariais
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Bot, label: "Agentes Ativos", value: "12", change: "+2" },
              { icon: Activity, label: "Tarefas em Execução", value: "45", change: "+8" },
              { icon: Users, label: "Usuários Ativos", value: "28", change: "+5" },
              { icon: MessageSquare, label: "Interações", value: "1.2k", change: "+124" },
            ].map((stat, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-secondary/90 to-secondary/60 border-none backdrop-blur-sm hover:translate-y-[-4px]"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10">
                    <stat.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <span className="text-xs text-emerald-400">({stat.change})</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Bot,
                title: "Criar Novo Agente",
                description: "Configure um novo assistente virtual personalizado",
                action: "Criar Agente",
                path: "/agents"
              },
              {
                icon: Brain,
                title: "Automação de Processos",
                description: "Automatize tarefas repetitivas e aumente a eficiência",
                action: "Explorar Automações",
                path: "/automation"
              },
              {
                icon: BarChart2,
                title: "Analytics Avançado",
                description: "Visualize e analise o desempenho dos seus agentes",
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

          {/* Recent Activity */}
          <Card className="p-6 bg-gradient-to-br from-secondary/90 to-secondary/60 border-none backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Atividade Recente</h2>
            <div className="space-y-4">
              {[
                { title: "Novo agente criado", time: "Há 5 minutos", progress: 100 },
                { title: "Análise de dados em andamento", time: "Há 15 minutos", progress: 45 },
                { title: "Automação configurada", time: "Há 1 hora", progress: 80 }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                  <Progress value={activity.progress} className="w-24" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Home;