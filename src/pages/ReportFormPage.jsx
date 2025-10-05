import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserReportForm from "../components/UserReportForm";
import UserReportMap from "../components/UserReportMap";
import { db } from "../firebaseConfig";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import "../App.css";
// Import the back button and styling as needed

function ReportFormPage() {
  const [reports, setReports] = useState([]);
  const navigate = useNavigate(); 
  const handleGoBack = () => {
    // Navigates to the "/reports" route defined in App.jsx
    navigate("/reports");
    // Alternatively, you could use navigate(-1) to go to the previous history entry
  };

  // Firestore live updates (as it was in Bloom-6/App.jsx)
  useEffect(() => {
    const q = query(collection(db, "userReports"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReports(data);
    });
    return unsub;
  }, []);


  return (
   <div>
         {/* Starry BG */}
         <div className="stars"></div>
         <div className="twinkling"></div>
   
         {/* Header */}
         <div className="flex justify-between items-center p-6 relative z-10">
           <h1 className="font-orbitron text-4xl font-extrabold text-gradient-cyan-blue drop-shadow-lg">
             🌱 BloomSphere
           </h1>
         </div>

      <br></br>
      <button
        onClick={handleGoBack}
        className="
          // Basic button styling (adjust padding, text size if needed)
          px-6 py-3 rounded-full text-white font-semibold text-lg
          
          // Background color and hover effect (using a slightly transparent blue)
          bg-blue-500 bg-opacity-70 hover:bg-opacity-90 
          
          // Shadow for depth
          shadow-lg 
          
          // Transition for smooth hover
          transition duration-300 ease-in-out
          
          // Ensure pointer cursor on hover
          cursor-pointer
          
          // If you want a specific blur/backdrop-filter for glassmorphism,
          // you might need custom CSS or a Tailwind plugin,
          // but bg-opacity often gives a similar feel.
          // Example: backdrop-filter: blur(10px); would require custom CSS.
          // For now, bg-opacity is a good start.
        "
        style={{ cursor: 'pointer' }}
      >
        Back
      </button>
      <br></br>
         {/* Form */}
         <div className="glass-card p-6 mb-10 relative z-10">
           <UserReportForm reports={reports} setReports={setReports} />
         </div>
         
   
         {/* Map */}
         <div className="glass-card p-6 relative z-10">
           <h2 className="text-3xl font-exo font-semibold mb-6 text-center drop-shadow-lg text-white">
             🌍 Field Reports Map
           </h2>
           <UserReportMap reports={reports} />
         </div>
       </div>
     );
   }
   

export default ReportFormPage;