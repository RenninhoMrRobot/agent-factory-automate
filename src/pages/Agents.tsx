import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Bot, Plus, Brain, Zap, MoreVertical, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const agents = [
  {
    name: "Assistente de Pesquisa",
    description: "Especializado em análise de dados e pesquisa avançada",
    type: "Pesquisador",
    status: "Ativo",
    tasks: 45,
  },
  {
    name: "Automatizador de Processos",
    description: "Focado em automação de tarefas repetitivas",
    type: "Automação",
    status: "Ativo",
    tasks: 128,
  },
  {
    name: "Analista de Dados",
    description: "Processamento e análise de grandes volumes de dados",
    type: "Análise",
    status: "Em pausa",
    tasks: 67,
  },
];

const Agents = () => {
  return (
    <Layout>
      <div className="space-y-8 relative min-h-screen">
        {/* Fundo com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-emerald-900/20 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Agentes IA
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Gerencie e monitore seus agentes inteligentes
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Input
                placeholder="Buscar agentes..."
                className="max-w-xs bg-secondary/50 border-secondary"
                icon={<Search className="w-4 h-4 text-muted-foreground" />}
              />
              <Button className="group flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 text-white hover:from-emerald-600 hover:via-blue-700 hover:to-purple-700">
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                Novo Agente
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-secondary/90 to-secondary/60 border-none backdrop-blur-sm hover:translate-y-[-8px] group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 group-hover:from-emerald-500/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20 transition-colors">
                        <Bot className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{agent.name}</h3>
                        <p className="text-sm text-muted-foreground">{agent.type}</p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:bg-secondary">
                          <MoreVertical className="w-5 h-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Brain className="w-4 h-4 mr-2" />
                          Treinar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Zap className="w-4 h-4 mr-2" />
                          Ativar/Pausar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    {agent.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className={`px-3 py-1 rounded-full ${
                      agent.status === "Ativo" 
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {agent.status}
                    </span>
                    <span className="text-muted-foreground">
                      {agent.tasks} tarefas realizadas
                    </span>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 group-hover:from-emerald-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-colors" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Agents;