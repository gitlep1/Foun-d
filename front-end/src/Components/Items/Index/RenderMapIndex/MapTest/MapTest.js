// import React from "react";
// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import "./Map.scss";

// export default function MapTest() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_API_KEY,
//   });
//   console.log(isLoaded.googleMapsApiKey);
//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// }
// function Map() {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }
