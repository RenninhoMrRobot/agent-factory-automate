import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Bot, Activity, Clock } from "lucide-react";

const Index = () => {
  const stats = [
    {
      icon: Bot,
      label: "Agentes Ativos",
      value: "5",
      change: "+2 esta semana",
    },
    {
      icon: Activity,
      label: "Tarefas Concluídas",
      value: "128",
      change: "+23 hoje",
    },
    {
      icon: Clock,
      label: "Horas Economizadas",
      value: "47",
      change: "+5 esta semana",
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bem-vindo de volta!</h1>
          <p className="text-gray-600 mt-2">Aqui está o que está acontecendo com seus agentes IA.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-2">{stat.change}</p>
                </div>
                <stat.icon className="text-primary" size={24} />
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Atividade Recente</h2>
          <div className="space-y-4">
            <p className="text-gray-600">Nenhuma atividade recente para mostrar.</p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;