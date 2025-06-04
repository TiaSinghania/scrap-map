import { useLocation, useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function MapView(){
    const { mapid } = useParams(); // Get the map ID from the URL
    const location = useLocation();
    const map = location.state?.map; // Retrieve map data from passed state
    const markers = []
    console.log(map)
    console.log(map["pins"])
    console.log(map["pins"][0])
    console.log(map["pins"][0]["location"])
    console.log(map["pins"][0]["location"]["_lat"])



    console.log("entering loop")
    markers = map["pins"].map(pin => <Marker position={[pin[location]["_lat"], pin["location"]["_long"]]}></Marker>)


    return (
        <div>
            <h1>Map View</h1>
            <h2> {map["pins"][0]["lat"]} </h2>
            <MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={true} style={{ height: "500px", width: "100%" }}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers}

            </MapContainer>

        </div>
    );
}
export default MapView;

