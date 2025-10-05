import React, { useEffect } from "react";
import { MapContainer, CircleMarker, Popup, useMap, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const colors = { Healthy:"#16a34a", Stressed:"#facc15", Dry:"#dc2626" };
const glows  = { Healthy:"rgba(22,163,74,0.4)", Stressed:"rgba(250,204,21,0.4)", Dry:"rgba(220,38,38,0.4)" };

// FitBounds
const FitBounds = ({ reports }) => {
  const map = useMap();
  useEffect(() => {
    const bounds = reports.filter(r => r.lat && r.lon).map(r => [Number(r.lat), Number(r.lon)]);
    if(bounds.length) map.fitBounds(bounds, {padding:[50,50]});
    else map.setView([20.5937,78.9629],5);
  }, [reports,map]);
  return null;
};

const UserReportMap = ({ reports=[], darkMode=false }) => {
  const tileUrl = darkMode
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <MapContainer center={[20.5937,78.9629]} zoom={5} scrollWheelZoom={false} 
     dragging={true}
     doubleClickZoom={true}
      zoomControl={true}
     style={{height:"500px", width:"100%"}}>
      <TileLayer url={tileUrl} attribution="&copy; OpenStreetMap &copy; CARTO" />
      <FitBounds reports={reports} />

      {reports.map(r => {
        if(!r.lat || !r.lon) return null;
        const lat = Number(r.lat), lon = Number(r.lon);
        return (
          <React.Fragment key={r.id}>
            <CircleMarker center={[lat,lon]} radius={20} pathOptions={{color:glows[r.status],fillColor:glows[r.status],fillOpacity:0.3,weight:0}} />
            <CircleMarker center={[lat,lon]} radius={10} pathOptions={{color:colors[r.status],fillColor:colors[r.status],fillOpacity:0.9,weight:2}}>
              <Popup>
                <div>
                  <strong>{r.Name}</strong>
                  <div>Crop: {r.cropType}</div>
                  <div>Status: {r.status}</div>
                  <div>Notes: {r.notes || "-"}</div>
                  <div>Submitted: {r.timestamp?.seconds ? new Date(r.timestamp.seconds*1000).toLocaleString() : "N/A"}</div>
                </div>
              </Popup>
            </CircleMarker>
          </React.Fragment>
        )
      })}
    </MapContainer>
  );
};

export default UserReportMap;
