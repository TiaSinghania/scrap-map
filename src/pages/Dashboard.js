import CreateMapView from "../components/create-map-view";
import MapThumbnail from "../components/map-thumbnail";
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../firebase'; 
import { useState, useEffect } from 'react';


export default function Dashboard() {
  const [scrapmaps, setScrapMaps] = useState([]);
  const [showCreateMap, setShowCreateMap] = useState(false);
  
    const fetchMaps = async () => {
        const querySnapshot = await getDocs(collection(db, "maps"));
        const mapData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setScrapMaps(mapData);
    };

    useEffect(()=>{
        fetchMaps();
    }, [])
    
  return (
    <div>
      <h1>Dashboard!!</h1>
      {/* // This button will display the "create map view" component. */}
      <button onClick={() => setShowCreateMap(true)}>
        Create New ScrapMap
      </button>
      {showCreateMap ? <CreateMapView hideForm={() => setShowCreateMap(false)} /> : null};

      <h3>Your ScrapMaps:</h3>
      {scrapmaps.map((scrapmap) => (
        <MapThumbnail map={scrapmap} />
      ))}

    </div>
  );
}

