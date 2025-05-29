import CreateMapView from "../components/create-map-view";
import { useState } from 'react';

export default function Dashboard() {
  const [showCreateMap, setShowCreateMap] = useState(false);
  return (
    <div>
      <h1>Dashboard!!</h1>
      {/* // This button will display the "create map view" component. */}
      <button onClick={() => setShowCreateMap(true)}>
        Create New ScrapMap
      </button>
      
      {showCreateMap ? <CreateMapView /> : null}

    </div>
  );
}

