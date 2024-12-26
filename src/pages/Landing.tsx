import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Bot, Brain, Sparkles, ArrowRight, Terminal, Code, Cpu, Network } from "lucide-react";

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
    <div className="min-h-screen bg-[#1A1F2C] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Matrix-like rain effect */}
      <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==')] opacity-50"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C]/80 via-[#8B5CF6]/20 to-[#0EA5E9]/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Title Section */}
          <div className="mb-12 space-y-4">
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#0EA5E9] animate-gradient bg-300% mb-4">
              AI-Firm AutoTasks
            </h1>
            <p className="text-xl text-[#E0E7FF] opacity-80">
              Entre na Matrix da Automação Empresarial
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            {/* Left Column - Features */}
            <div className="space-y-6 text-left">
              <div className="p-4 rounded-lg bg-[#1E293B]/50 backdrop-blur-sm border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-colors">
                <Terminal className="w-8 h-8 text-[#D946EF] mb-2" />
                <h3 className="text-lg font-semibold text-[#E0E7FF] mb-2">Automação Inteligente</h3>
                <p className="text-sm text-[#E0E7FF]/70">
                  Otimize seus processos com IA avançada
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#1E293B]/50 backdrop-blur-sm border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-colors">
                <Code className="w-8 h-8 text-[#0EA5E9] mb-2" />
                <h3 className="text-lg font-semibold text-[#E0E7FF] mb-2">Integração Perfeita</h3>
                <p className="text-sm text-[#E0E7FF]/70">
                  Conecte-se com suas ferramentas favoritas
                </p>
              </div>
            </div>

            {/* Right Column - Login Form */}
            <div className="p-6 rounded-lg bg-[#1E293B]/50 backdrop-blur-sm border border-[#8B5CF6]/20">
              <form onSubmit={handleLogin} className="space-y-4">
                <h2 className="text-2xl font-bold text-[#E0E7FF] mb-6">Login</h2>
                <Input
                  placeholder="Usuário (Renato)"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  className="bg-[#1A1F2C]/50 border-[#8B5CF6]/20 text-[#E0E7FF]"
                />
                <Input
                  type="password"
                  placeholder="Senha (entra)"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  className="bg-[#1A1F2C]/50 border-[#8B5CF6]/20 text-[#E0E7FF]"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] hover:from-[#7C3AED] hover:to-[#0284C7] text-white font-semibold"
                >
                  Entrar no Sistema
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: "99%", label: "Eficiência", icon: Cpu },
              { value: "24/7", label: "Disponibilidade", icon: Network },
              { value: "500+", label: "Automações", icon: Brain },
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-[#1E293B]/30 backdrop-blur-sm border border-[#8B5CF6]/20"
              >
                <stat.icon className="w-6 h-6 text-[#0EA5E9] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#E0E7FF]">{stat.value}</div>
                <div className="text-sm text-[#E0E7FF]/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;