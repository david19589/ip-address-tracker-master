/* eslint-disable react/prop-types */
import Styles from "./Body.module.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const Body = (props) => {
  const { lat, lon } = props;

  const centerPosition = [lat, lon];

  const locationIcon = new Icon({
    iconUrl: "icon-location.svg",
    iconSize: [34, 40],
  });

  return (
    <div className={Styles.bodyDiv}>
      <MapContainer
        center={centerPosition}
        key={`${lat}-${lon}`}
        zoom={13}
        zoomControl={false}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={centerPosition} icon={locationIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default Body;
