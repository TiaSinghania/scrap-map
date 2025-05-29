import { useNavigate } from "react-router-dom";
import { useState } from 'react';


function MapThumbnail({ map }) {
    const navigate = useNavigate();
    const [toMap, setToMap] = useState(false);
    if (toMap) {
        navigate(`/mapview/${map.id}`, { state: { map } });
        return null; // Prevent rendering the button after navigation
    }

    return (
        <div>
        {/* <img src={map.imageUrl} style={{ width: '100px', height: '100px' }} /> */}
        {/* when map.name is clicked, it redirects to the corresponding mapview page */}

        <button onClick={()=>setToMap(true)}>{map.name}</button>
    </div>
    );
}

export default MapThumbnail;