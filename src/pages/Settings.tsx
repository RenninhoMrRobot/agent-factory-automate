import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
          <p className="text-gray-600 mt-2">Gerencie suas preferências e configurações.</p>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <SettingsIcon className="text-primary" size={24} />
            <h2 className="text-xl font-semibold">Configurações Gerais</h2>
          </div>
          <p className="text-gray-600">Configure suas preferências aqui.</p>
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;