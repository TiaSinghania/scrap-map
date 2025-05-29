import { useLocation, useParams } from "react-router-dom";

function MapView(){
    const { mapid } = useParams(); // Get the map ID from the URL
    const location = useLocation();
    const map = location.state?.map; // Retrieve map data from passed state
    return (
        <div>
            <h1>Map View</h1>
            <p>This is the map view page.</p>
            <h2>{map.name}</h2>
            {/* Add your map rendering logic here */}
        </div>
    );
}
export default MapView;