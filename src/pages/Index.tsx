import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Bot, Activity, Clock, Sparkles, ChevronRight, BarChart3, PieChart, Rocket, Zap, Brain } from "lucide-react";
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
      <div className="space-y-8 relative min-h-screen overflow-hidden">
        {/* Matrix-like background effect */}
        <div className="absolute inset-0 bg-[#1A1F2C] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute text-emerald-500 text-xl font-mono animate-matrixRain"
                style={{
                  left: `${i * 10}%`,
                  animationDelay: `${i * 0.3}s`,
                  top: `-${Math.random() * 100}%`
                }}
              >
                {[...Array(20)].map((_, j) => (
                  <div key={j} className="my-2">
                    {String.fromCharCode(33 + Math.random() * 93)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 p-8">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-synthwave-purple via-synthwave-pink to-synthwave-blue bg-clip-text text-transparent animate-gradient bg-300% tracking-tight">
                Central de Comando
              </h1>
              <p className="text-xl text-gray-400">
                Monitore seus agentes e operações em tempo real
              </p>
            </div>
            <button className="group flex items-center gap-3 bg-gradient-to-r from-synthwave-purple via-synthwave-pink to-synthwave-blue text-white px-8 py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] relative overflow-hidden">
              <span className="relative z-10 text-lg font-medium">Novo Agente</span>
              <Rocket className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-synthwave-purple/80 via-synthwave-pink/80 to-synthwave-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="p-6 hover:shadow-2xl transition-all duration-500 bg-secondary/20 backdrop-blur-lg border-synthwave-purple/20 hover:border-synthwave-purple/40 hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="space-y-4">
                      <p className="text-gray-400 font-medium">{stat.label}</p>
                      <p className="text-4xl font-bold bg-gradient-to-r from-synthwave-purple to-synthwave-blue bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-sm text-synthwave-purple flex items-center gap-1">
                        {stat.change}
                        <ChevronRight className="w-4 h-4" />
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-synthwave-purple/10 group-hover:bg-synthwave-purple/20 transition-colors">
                      <stat.icon className="w-6 h-6 text-synthwave-purple group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <Progress 
                    value={stat.progress} 
                    className="h-1.5 bg-secondary/50"
                    style={{
                      background: `linear-gradient(to right, rgb(139,92,246) ${stat.progress}%, transparent ${stat.progress}%)`
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-synthwave-purple/5 via-synthwave-pink/5 to-synthwave-blue/5 group-hover:from-synthwave-purple/10 group-hover:via-synthwave-pink/10 group-hover:to-synthwave-blue/10 transition-colors" />
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <Card className="p-8 bg-secondary/20 backdrop-blur-lg border-synthwave-purple/20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-synthwave-purple to-synthwave-blue bg-clip-text text-transparent">
                Atividade Recente
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Brain, title: "Análise de dados concluída", time: "Há 5 minutos" },
                  { icon: Zap, title: "Novo agente criado", time: "Há 1 hora" }
                ].map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-6 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/40 transition-all duration-300 group cursor-pointer hover:translate-x-2"
                  >
                    <div className="p-3 rounded-lg bg-synthwave-purple/10 group-hover:bg-synthwave-purple/20">
                      <activity.icon className="w-5 h-5 text-synthwave-purple" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-medium group-hover:text-synthwave-purple transition-colors">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-synthwave-purple group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-synthwave-purple/5 via-synthwave-pink/5 to-synthwave-blue/5" />
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;