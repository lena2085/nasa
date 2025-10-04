import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", value: 20 },
  { name: "Tue", value: 35 },
  { name: "Wed", value: 50 },
  { name: "Thu", value: 30 },
  { name: "Fri", value: 45 },
  { name: "Sat", value: 60 },
  { name: "Sun", value: 40 },
];

function ChartComponent() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4 text-primary">Weekly Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#4CAF50" strokeWidth={3} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartComponent;

