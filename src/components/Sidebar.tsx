import { Home, Users, Settings, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Users, label: "Agentes IA", path: "/agents" },
    { icon: Settings, label: "Configurações", path: "/settings" },
  ];

  return (
    <div className="h-screen w-64 bg-secondary p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-xl font-bold text-white">AI-Firm AutoTasks</h1>
      </div>
      
      <button className="flex items-center gap-2 bg-primary hover:bg-accent transition-colors duration-200 text-white px-4 py-2 rounded-lg mb-8">
        <PlusCircle size={20} />
        <span>Novo Agente</span>
      </button>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-accent/10 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;