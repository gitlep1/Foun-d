import "./RenderMapIndex.scss";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const RenderMapIndex = ({ foundItems, user, authenticated }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

const Map = () => {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <section id="mapIndexOuterContainer">
      <section id="mapIndexInnerContainer">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        >
          <Marker position={center} />
        </GoogleMap>
      </section>
    </section>
  );
};

export default RenderMapIndex;
