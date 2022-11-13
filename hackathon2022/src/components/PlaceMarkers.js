import { useState } from "react";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { feedData } from "../pages/feedData";

export function PlaceMarkers(props) {
    const [lat, setLat] = useState(32.9800);
    const [long, setLong] = useState(-96.7400);
    const [type, setType] = useState("none");
    console.log(feedData[0].address[2][0]);
    return(
        <div>
        {feedData.map(item => (
            <Marker position={[item.address[2][0],item.address[2][1]]}>
                <Popup>
                    {item.title}
                </Popup>
            </Marker>
        ))}
        </div>
    );
}