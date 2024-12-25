import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Bot, Activity, Clock, Sparkles } from "lucide-react";
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
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Bem-vindo de volta!
            </h1>
            <p className="text-muted-foreground">
              Aqui está o que está acontecendo com seus agentes IA.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Novo Agente</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card 
              key={stat.label} 
              className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-secondary to-secondary/50 border-none"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-400 mt-2">{stat.change}</p>
                  <div className="mt-4">
                    <Progress value={stat.progress} className="h-2" />
                  </div>
                </div>
                <stat.icon className="text-primary w-6 h-6" />
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-gradient-to-br from-secondary to-secondary/50 border-none">
          <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Atividade Recente
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
              <Activity className="text-primary w-5 h-5" />
              <div>
                <p className="text-sm font-medium">Análise de dados concluída</p>
                <p className="text-xs text-muted-foreground">Há 5 minutos</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
              <Bot className="text-primary w-5 h-5" />
              <div>
                <p className="text-sm font-medium">Novo agente criado</p>
                <p className="text-xs text-muted-foreground">Há 1 hora</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;