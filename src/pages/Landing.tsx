import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Bot, Brain, Sparkles, ArrowRight } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === "teste" && credentials.password === "teste") {
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao AI-Firm AutoTasks",
      });
      navigate("/home");
    } else {
      toast({
        variant: "destructive",
        title: "Erro no login",
        description: "Usuário ou senha incorretos. Use teste/teste",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-secondary/20 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI-Firm AutoTasks
          </h1>
          <Button onClick={() => navigate("/login")} variant="ghost">
            Login
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 container mx-auto px-4 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-300%">
              Automatize suas tarefas com Inteligência Artificial
            </h1>
            <p className="text-xl text-muted-foreground">
              Transforme sua empresa com automação inteligente. Crie, gerencie e monitore agentes IA para otimizar seus processos.
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={() => navigate("/login")}
                className="group bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-600 hover:via-blue-700 hover:to-purple-700"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline">Saiba mais</Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Bot,
                title: "Agentes IA",
                description: "Crie assistentes virtuais personalizados",
              },
              {
                icon: Brain,
                title: "Automação Inteligente",
                description: "Otimize processos repetitivos",
              },
              {
                icon: Sparkles,
                title: "Análise Avançada",
                description: "Insights baseados em dados",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-secondary/20 hover:bg-secondary/70 transition-colors"
              >
                <feature.icon className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50" style={{ display: window.location.pathname === "/login" ? "flex" : "none" }}>
        <div className="bg-secondary/50 p-8 rounded-xl border border-secondary/20 w-full max-w-md backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                placeholder="Usuário (teste)"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="bg-secondary/50"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Senha (teste)"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="bg-secondary/50"
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;