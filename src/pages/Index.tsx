import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Bot, Activity, Clock, Sparkles, ChevronRight, BarChart3, PieChart } from "lucide-react";
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
      <div className="space-y-10 relative min-h-screen">
        {/* Fundo com gradiente mais contrastante */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-emerald-900/20 pointer-events-none" />
        
        <div className="flex items-center justify-between relative z-10">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-300% tracking-tight">
              Bem-vindo de volta!
            </h1>
            <p className="text-xl text-muted-foreground">
              Aqui está o que está acontecendo com seus agentes IA.
            </p>
          </div>
          <button className="group flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] relative overflow-hidden">
            <span className="relative z-10 text-lg font-medium">Novo Agente</span>
            <Sparkles className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="p-8 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-secondary/90 to-secondary/60 border-none backdrop-blur-sm hover:translate-y-[-8px] group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="space-y-6">
                    <p className="text-lg font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-5xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-emerald-400 flex items-center gap-1">
                      {stat.change}
                      <ChevronRight className="w-4 h-4" />
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 group-hover:from-emerald-500/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20 transition-colors">
                    <stat.icon className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="space-y-4">
                  <Progress 
                    value={stat.progress} 
                    className="h-2 bg-secondary/50"
                    style={{
                      background: `linear-gradient(to right, rgb(52,211,153) ${stat.progress}%, transparent ${stat.progress}%)`
                    }}
                  />
                  {index === 0 && (
                    <PieChart className="w-20 h-20 text-emerald-400 opacity-50 absolute bottom-4 right-4 -rotate-12" />
                  )}
                  {index === 1 && (
                    <BarChart3 className="w-20 h-20 text-blue-400 opacity-50 absolute bottom-4 right-4 rotate-12" />
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 group-hover:from-emerald-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-colors" />
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-secondary/90 to-secondary/60 border-none backdrop-blur-sm relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Atividade Recente
            </h2>
            <div className="space-y-6">
              {[
                { icon: Activity, title: "Análise de dados concluída", time: "Há 5 minutos" },
                { icon: Bot, title: "Novo agente criado", time: "Há 1 hora" }
              ].map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-6 p-6 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 group cursor-pointer hover:translate-x-2"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500/10 to-blue-500/10 group-hover:from-emerald-500/20 group-hover:to-blue-500/20">
                    <activity.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium group-hover:text-emerald-400 transition-colors">
                      {activity.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5" />
        </Card>
      </div>
    </Layout>
  );
};

export default Index;