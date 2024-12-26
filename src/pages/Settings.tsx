import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette,
  Save,
} from "lucide-react";

const Settings = () => {
  return (
    <Layout>
      <div className="space-y-8 relative min-h-screen">
        {/* Fundo com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-emerald-900/20 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Configurações
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Personalize sua experiência no aplicativo
            </p>
          </div>

          <div className="grid gap-8">
            {/* Perfil */}
            <Card className="p-6 bg-gradient-to-br from-secondary/90 to-secondary/60 border-none backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/10 to-blue-500/10">
                  <User className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-xl font-semibold">Perfil</h2>
              </div>
              
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome</label>
                    <Input placeholder="Seu nome" className="bg-secondary/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="seu@email.com" className="bg-secondary/50" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Notificações */}
            <Card className="p-6 bg-gradient-to-br from-secondary/90 to-secondary/60 border-none backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/10 to-blue-500/10">
                  <Bell className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-xl font-semibold">Notificações</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notificações por email</p>
                    <p className="text-sm text-muted-foreground">Receba atualizações sobre seus agentes</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notificações push</p>
                    <p className="text-sm text-muted-foreground">Receba alertas em tempo real</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            {/* Segurança */}
            <Card className="p-6 bg-gradient-to-br from-secondary/90 to-secondary/60 border-none backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/10 to-blue-500/10">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-xl font-semibold">Segurança</h2>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Senha atual</label>
                  <Input type="password" className="bg-secondary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nova senha</label>
                  <Input type="password" className="bg-secondary/50" />
                </div>
              </div>
            </Card>

            {/* Aparência */}
            <Card className="p-6 bg-gradient-to-br from-secondary/90 to-secondary/60 border-none backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/10 to-blue-500/10">
                  <Palette className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-xl font-semibold">Aparência</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Modo escuro</p>
                    <p className="text-sm text-muted-foreground">Ajuste o tema do aplicativo</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            <div className="flex justify-end">
              <Button className="group flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 text-white hover:from-emerald-600 hover:via-blue-700 hover:to-purple-700">
                <Save className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Salvar Alterações
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;