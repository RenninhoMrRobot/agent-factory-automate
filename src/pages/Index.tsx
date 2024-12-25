import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Bot, Activity, Clock, Sparkles, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const stats = [
    {
      icon: Bot,
      label: "Agentes Ativos",
      value: "5",
      change: "+2 esta semana",
      progress: 75,
    },
    {
      icon: Activity,
      label: "Tarefas Concluídas",
      value: "128",
      change: "+23 hoje",
      progress: 85,
    },
    {
      icon: Clock,
      label: "Horas Economizadas",
      value: "47",
      change: "+5 esta semana",
      progress: 60,
    },
  ];

  return (
    <Layout>
      <div className="space-y-8 relative">
        {/* Elemento decorativo de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-emerald-500/5 pointer-events-none" />
        
        <div className="flex items-center justify-between relative">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Bem-vindo de volta!
            </h1>
            <p className="text-lg text-muted-foreground">
              Aqui está o que está acontecendo com seus agentes IA.
            </p>
          </div>
          <button className="group flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] relative overflow-hidden">
            <span className="relative z-10 font-medium">Novo Agente</span>
            <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="p-6 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-secondary/80 to-secondary/40 border-none backdrop-blur-sm hover:translate-y-[-4px] group"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-emerald-400 flex items-center gap-1">
                    {stat.change}
                    <ChevronRight className="w-4 h-4" />
                  </p>
                  <div className="mt-4">
                    <Progress 
                      value={stat.progress} 
                      className="h-2 bg-secondary group-hover:bg-secondary/70"
                      style={{
                        background: `linear-gradient(to right, rgb(52,211,153) ${stat.progress}%, transparent ${stat.progress}%)`
                      }}
                    />
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 group-hover:from-emerald-500/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-gradient-to-br from-secondary/80 to-secondary/40 border-none backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Atividade Recente
          </h2>
          <div className="space-y-4">
            {[
              { icon: Activity, title: "Análise de dados concluída", time: "Há 5 minutos" },
              { icon: Bot, title: "Novo agente criado", time: "Há 1 hora" }
            ].map((activity, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/10 to-blue-500/10 group-hover:from-emerald-500/20 group-hover:to-blue-500/20">
                  <activity.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium group-hover:text-emerald-400 transition-colors">
                    {activity.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;