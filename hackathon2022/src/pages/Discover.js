import "./Discover.css";
import Filter from "../components/Filter";
import Map from "../components/Map";

export default function Discover() {
  return (
    <div className="discover">
      <Filter />
      <Map />
    </div>
  );
}
