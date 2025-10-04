import React from "react";
import Card from "../components/Card";
import ChartComponent from "../components/ChartComponent";
import { Sprout, Leaf, AlertTriangle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="ml-60 p-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Plants" value="120" icon={Sprout} color="bg-green-500" />
        <Card title="Healthy Plants" value="95" icon={Leaf} color="bg-blue-500" />
        <Card title="Needs Attention" value="25" icon={AlertTriangle} color="bg-red-500" />
      </div>

      <ChartComponent />

      <div className="bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Plant Status
        </h2>
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Plant</th>
              <th className="px-4 py-2">Moisture</th>
              <th className="px-4 py-2">Health</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">Tomato</td>
              <td className="px-4 py-2">60%</td>
              <td className="px-4 py-2 text-green-600 font-medium">Good</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Cucumber</td>
              <td className="px-4 py-2">45%</td>
              <td className="px-4 py-2 text-yellow-600 font-medium">Fair</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">Spinach</td>
              <td className="px-4 py-2">30%</td>
              <td className="px-4 py-2 text-red-600 font-medium">Poor</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;


