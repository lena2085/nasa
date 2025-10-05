import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
// Import Firebase logic (you'll need this to show reports later)
// import { db } from "../firebaseConfig"; 
// import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function Reports() {
  // Uncomment the state and useEffect block when you are ready to display reports
  // const [reports, setReports] = useState([]);

  // useEffect(() => {
  //   // Placeholder for report fetching logic
  //   console.log("Fetching reports...");
  // }, []);

  return (
    // Use padding (p-6) to ensure the content isn't stuck to the screen edge
    // And use a main container <div> for better organization
    <div className="p-6"> 
      
      {/* HEADER SECTION: Place the title and the button side-by-side */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Field Reports</h1>
        
        {/* ADD BUTTON */}
        <Link 
          to="/reports/new" 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-150 ease-in-out"
        >
          + Add New Report
        </Link>
      </div>

      {/* CONTENT/TABLE SECTION */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <p className="text-gray-700">Detailed plant growth and soil reports will appear here.</p>
        
        {/*
          // When ready, replace the <p> tag above with your reports list:
          // {reports.length === 0 ? (
          //   <p className="text-gray-500 mt-4">No reports submitted yet.</p>
          // ) : (
          //   // Your Report Table component goes here
          // )} 
        */}
      </div>
    </div>
  );
}

export default Reports;