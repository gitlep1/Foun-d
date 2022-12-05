import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Map.scss";

const API = "AIzaSyDUykvCjIE7XHxPSsm7O4zL4b2ATw2e_c";

export default function MapTest() {
  console.log(API);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  console.log(center);
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map-container"
    >
      <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  );
}
