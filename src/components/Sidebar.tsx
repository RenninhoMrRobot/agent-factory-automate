import { 
  Home,
  Users,
  Settings,
  PlusCircle,
  LayoutDashboard,
  Brain,
  BarChart3,
  Mail,
  MessageSquare,
  FileText,
  HelpCircle,
  ChevronLeft
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const menuItems = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { 
      icon: Users, 
      label: "Agentes IA", 
      path: "/agents",
      submenu: [
        { label: "Gerenciar Agentes", path: "/agents" },
        { label: "Treinamento", path: "/agents/training" },
        { label: "Desempenho", path: "/agents/performance" },
      ]
    },
    { 
      icon: Brain, 
      label: "Automação", 
      path: "/automation",
      submenu: [
        { label: "Fluxos", path: "/automation/flows" },
        { label: "Tarefas", path: "/automation/tasks" },
        { label: "Integrações", path: "/automation/integrations" },
      ]
    },
    { 
      icon: BarChart3, 
      label: "Analytics", 
      path: "/analytics",
      submenu: [
        { label: "Dashboards", path: "/analytics/dashboards" },
        { label: "Relatórios", path: "/analytics/reports" },
        { label: "Métricas", path: "/analytics/metrics" },
      ]
    },
    { 
      icon: Mail, 
      label: "Comunicação", 
      path: "/communication",
      submenu: [
        { label: "Email", path: "/communication/email" },
        { label: "Chat", path: "/communication/chat" },
        { label: "Notificações", path: "/communication/notifications" },
      ]
    },
    { icon: MessageSquare, label: "Chat", path: "/chat" },
    { icon: FileText, label: "Documentos", path: "/documents" },
    { icon: HelpCircle, label: "Ajuda", path: "/help" },
    { icon: Settings, label: "Configurações", path: "/settings" },
  ];

  return (
    <div 
      className={cn(
        "h-screen bg-secondary/50 backdrop-blur-sm p-4 flex flex-col border-r border-secondary transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center gap-2 mb-8">
        {!isCollapsed && (
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI-Firm AutoTasks
          </h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ChevronLeft className={cn(
            "w-5 h-5 transition-transform",
            isCollapsed && "rotate-180"
          )} />
        </Button>
      </div>
      
      {!isCollapsed && (
        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 mb-8">
          <PlusCircle size={20} />
          <span>Novo Agente</span>
        </button>
      )}

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  )}
                >
                  <item.icon size={20} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
                {!isCollapsed && item.submenu && (
                  <ul className="ml-6 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.path}
                          className={cn(
                            "flex items-center text-sm px-4 py-1.5 rounded-lg transition-all duration-300",
                            location.pathname === subItem.path
                              ? "text-primary"
                              : "text-muted-foreground hover:text-primary"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;