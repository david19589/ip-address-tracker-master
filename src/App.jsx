import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [IpAddress, setIpAddress] = useState("");
  const [Location, setLocation] = useState("");
  const [Timezone, setTimezone] = useState("");
  const [ISP, setISP] = useState("");
  const [ipInput, setIpInput] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [isValidIP, setIsValidIP] = useState(false);

  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        const data = response.data;
        setIpAddress(data.ip);
        setLocation(`${data.country}, ${data.region}`);
        setTimezone(data.utc_offset);
        setISP(data.org);
        setLat(data.latitude);
        setLon(data.longitude);
      })
      .catch((error) => {
        console.error("Error fetching IP data:", error);
        alert("Error fetching IP data. Please try again.");
      });
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setIpInput(value);
    const ipRegex = /^(\d{1,3}).(\d{1,3}).(\d{1,3}).(\d{1,3})$/;
    setIsValidIP(ipRegex.test(value));
  };

  const locateIP = () => {
    axios
      .get(`https://ipapi.co/${ipInput}/json/`)
      .then((response) => {
        const data = response.data;
        setIpAddress(data.ip);
        setLocation(`${data.country}, ${data.region}`);
        setTimezone(data.utc_offset);
        setISP(data.org);
        setLat(data.latitude);
        setLon(data.longitude);
      })

      .catch((error) => {
        console.error("Error fetching IP data:", error);
        alert("Error fetching IP data. Please try again.");
      });
  };

  return (
    <>
      <div className="FirstContainer">
        <Header
          IpAddress={IpAddress}
          Location={Location}
          Timezone={Timezone}
          ISP={ISP}
          ipInput={ipInput}
          handleInputChange={handleInputChange}
          locateIP={locateIP}
          isValidIP={isValidIP}
        />
        <Body lat={lat} lon={lon} />
      </div>
    </>
  );
}

export default App;
