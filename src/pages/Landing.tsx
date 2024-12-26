import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Bot, Brain, Sparkles, ArrowRight, Check, BarChart2 } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === "Renato" && credentials.password === "entra") {
      sessionStorage.setItem("isAuthenticated", "true");
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao AI-Firm AutoTasks",
      });
      navigate("/home");
    } else {
      toast({
        variant: "destructive",
        title: "Erro no login",
        description: "Usuário ou senha incorretos. Use Renato/entra",
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
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background opacity-90 z-0" />
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        
        <div className="container mx-auto px-4 pt-24 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-300%">
                Revolucione sua Empresa com IA
              </h1>
              <p className="text-xl text-muted-foreground">
                Automatize processos, aumente a produtividade e tome decisões mais inteligentes com nossa plataforma de IA.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => navigate("/login")}
                  className="group bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-600 hover:via-blue-700 hover:to-purple-700"
                >
                  Começar Agora
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline">Agendar Demo</Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { value: "98%", label: "Satisfação" },
                  { value: "2x", label: "Produtividade" },
                  { value: "-60%", label: "Custos" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6">
              {[
                {
                  icon: Bot,
                  title: "Agentes IA Avançados",
                  description: "Assistentes virtuais personalizados que aprendem com seu negócio",
                },
                {
                  icon: Brain,
                  title: "Automação Inteligente",
                  description: "Otimize processos repetitivos com machine learning",
                },
                {
                  icon: BarChart2,
                  title: "Analytics em Tempo Real",
                  description: "Dashboards intuitivos para monitoramento de KPIs",
                },
                {
                  icon: Sparkles,
                  title: "Integração Perfeita",
                  description: "Conecte-se com suas ferramentas favoritas",
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
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Por que escolher AI-Firm AutoTasks?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fácil de Usar",
                description: "Interface intuitiva que não requer conhecimento técnico",
              },
              {
                title: "Resultados Rápidos",
                description: "Veja melhorias significativas em semanas, não meses",
              },
              {
                title: "Suporte Premium",
                description: "Equipe dedicada para ajudar em sua jornada",
              },
            ].map((benefit, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login Modal */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50" 
        style={{ display: window.location.pathname === "/login" ? "flex" : "none" }}
      >
        <div className="bg-secondary/50 p-8 rounded-xl border border-secondary/20 w-full max-w-md backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                placeholder="Usuário (Renato)"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="bg-secondary/50"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Senha (entra)"
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