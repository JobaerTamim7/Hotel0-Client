import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function HomeMap() {
  return (
    <MapContainer
      center={[23.69304289001536, 90.44962612441766]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[23.69304289001536, 90.44962612441766]}>
        <Popup>
          Hotel-0 <br /> WELCOME TO HOTEL-0.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
