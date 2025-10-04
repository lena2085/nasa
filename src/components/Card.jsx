import React from "react";

const Card = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition">
      <div>
        <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={28} className="text-white" />
      </div>
    </div>
  );
};

export default Card;
