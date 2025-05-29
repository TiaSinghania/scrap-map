import { useState } from 'react';
import { db } from "../firebase"; // Import Firestore setup
import { collection, addDoc } from "firebase/firestore";

function CreateMapView() {
    const [map, setMap] = useState (
        {
            name: "New Map",
            pins: [],
        }
    )

    const createMap = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "maps"), map);
            console.log("Document written with ID: ", docRef.id);
            setMap({ ...map, name: "New Map", pins: [] }); // Reset form after submission
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
    <div>
    <form onSubmit={createMap}>
      <label>
        Name:
        <input 
            value={map.name} 
            onChange={e => {setMap({...map, name: e.target.value});}}
        />
      </label>
      <button type="submit"> Create!</button>
    </form>
    </div>
    );
}
export default CreateMapView;