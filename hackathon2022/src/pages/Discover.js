import "./Discover.css";
import Filter from "../components/Filter";
import Map from "../components/Map";
import "../ununpkg/leafletjs-1.9.2.css";

export default function Discover() {
  return (
    <div className="discover">
      <Filter />
      <div id="map"><Map /></div>
    </div>
  );
}
