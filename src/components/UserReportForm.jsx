import React, { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import toast, { Toaster } from "react-hot-toast";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Status colors
const statusColors = { Healthy: "#16a34a", Stressed: "#facc15", Dry: "#dc2626" };

const formatTimestamp = (ts) => ts?.seconds ? new Date(ts.seconds * 1000).toLocaleString() : "N/A";

const UserReportForm = ({ reports = [], setReports }) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [showHistory, setShowHistory] = useState(false);
  const [showChart, setShowChart] = useState(false);

  // Auto-detect location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setValue("lat", pos.coords.latitude);
        setValue("lon", pos.coords.longitude);
      });
    }
  }, [setValue]);

  // Submit
  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "userReports"), {
        ...data,
        lat: Number(data.lat),
        lon: Number(data.lon),
        timestamp: serverTimestamp(),
      });
      toast.success("Report submitted!");
      console.log("Submitting:", data);
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit report!");
    }
  };

  const pieData = useMemo(() => {
    const counts = reports.reduce((acc, r) => {
      acc[r.status] = (acc[r.status] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts).map(key => ({ name: key, value: counts[key] }));
  }, [reports]);

  return (
    <div className="p-6 font-poppins relative z-10">
      <Toaster position="top-right" />
      <h2 className="text-3xl md:text-4xl font-handwriting mb-6 text-center text-gradient-cyan-blue drop-shadow-lg">
        🌱 Field Report
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form */}
        <div className="lg:w-1/2 p-6 rounded-2xl shadow-2xl border bg-white/20 border-white/30 transition-colors duration-500">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {["Name","lat","lon","cropType"].map((field, idx) => (
              <div key={idx}>
                <label className="glass-label">{field.replace("lat","Latitude").replace("lon","Longitude")}</label>
                <input
                  type={field.includes("lat") || field.includes("lon") ? "number":"text"}
                  step="any"
                  {...register(field,{required:true})}
                  placeholder={`Enter ${field.replace("lat","Latitude").replace("lon","Longitude")}`}
                  className="glass-input"
                />
              </div>
            ))}

            <div>
              <label className="glass-label">Vegetation Status</label>
              <select {...register("status",{required:true})}
               className= "glass-input">
                  <option value="">Select Status</option>
                  <option value="Healthy">Healthy</option>
                  <option value="Stressed">Stressed</option>
                  <option value="Dry">Dry</option>
              </select>
            </div>

            <div>
              <label className="glass-label">Notes / Observations</label>
              <textarea {...register("notes")} rows={4} placeholder="Add notes" className="glass-input" />
            </div>

            <div className="flex justify-center mt-6">
              <button type="submit" className="glass-btn submit-btn">🚀 Submit Report</button>
            </div>
          </form>

          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <button onClick={()=>setShowHistory(!showHistory)} className="glass-btn toggle-btn">
              {showHistory ? "Hide History":"View History"}
            </button>
            <button onClick={()=>setShowChart(!showChart)} className="glass-btn toggle-btn">
              {showChart ? "Hide Chart":"View Chart"}
            </button>
          </div>
        </div>

        {/* Pie Chart */}
        {showChart && (
          <div className="lg:w-1/2 p-6 rounded-2xl shadow-2xl border glass-card transition-colors duration-500">
            <h3 className="text-xl font-semibold mb-4 text-center text-cyan-400">Vegetation Status Overview</h3>
            {pieData.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {pieData.map((entry,i)=> <Cell key={i} fill={statusColors[entry.name]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : <p className="text-center text-gray-400 mt-10">No reports yet</p>}
          </div>
        )}
      </div>

      {/* History */}
      {showHistory && (
        <div className="overflow-x-auto mt-6 p-4 rounded-2xl shadow-2xl border glass-card transition-colors duration-500">
          <h3 className="text-xl font-semibold mb-4 text-center text-cyan-400">Submission History</h3>
          {reports.length > 0 ? (
            <table className="min-w-full rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Crop</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {reports.map(r => (
                  <tr key={r.id} className="border-b border-gray-300 hover:bg-gray-100 transition">
                    <td className="py-2 px-4">{r.Name}</td>
                    <td className="py-2 px-4">{r.cropType}</td>
                    <td className="py-2 px-4">
                      <span className="px-2 py-1 rounded-full text-white text-sm" style={{backgroundColor: statusColors[r.status]}}>
                        {r.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">{formatTimestamp(r.timestamp)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <p className="text-center text-gray-400 mt-4">No reports yet</p>}
        </div>
      )}
    </div>
  );
};

export default UserReportForm;
