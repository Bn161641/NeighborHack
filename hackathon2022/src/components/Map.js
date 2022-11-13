//import Leaflet from "../ununpkg/leafletjs-1.9.2";
import "./Map.css";
import { useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Circle } from "react-leaflet/Circle";
import { PlaceMarkers } from "./PlaceMarkers";

export default function Map(props) {
    const [lat, setLat] = useState(32.9800)
    const [long, setLong] = useState(-96.7400);
    const [zoom, setZoom] = useState(15);
    
    return (
        <MapContainer center={[lat, long]} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={[lat,long]} radius={props.range*220}/>
            <PlaceMarkers toggle={props.toggle} />
        </MapContainer>
    );
}
