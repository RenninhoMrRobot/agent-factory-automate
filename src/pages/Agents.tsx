import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Bot, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Agents = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Agentes IA</h1>
            <p className="text-gray-600 mt-2">Gerencie seus agentes de IA aqui.</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={20} />
            Novo Agente
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-4">
              <Bot className="text-primary" size={24} />
              <div>
                <h3 className="font-semibold">Agente Pesquisador</h3>
                <p className="text-sm text-gray-600">Especializado em análise de dados</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Agents;