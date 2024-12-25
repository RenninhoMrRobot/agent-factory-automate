import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Bot, Activity, Clock } from "lucide-react";

const Index = () => {
  const stats = [
    {
      icon: Bot,
      label: "Active Agents",
      value: "5",
      change: "+2 this week",
    },
    {
      icon: Activity,
      label: "Tasks Completed",
      value: "128",
      change: "+23 today",
    },
    {
      icon: Clock,
      label: "Hours Saved",
      value: "47",
      change: "+5 this week",
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your AI agents.</p>
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
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <p className="text-gray-600">No recent activity to show.</p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;