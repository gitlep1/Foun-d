import "./RenderMapIndex.scss";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const RenderMapIndex = ({ foundItems, user, authenticated }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });
  console.log(isLoaded.googleMapsApiKey);
  console.log("Process:", process.env.REACT_APP_API_KEY);
  console.log("FOO", process.env.REACT_APP_FOO);
  console.log("URL", process.env.REACT_APP_API_URL);
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};
function Map() {
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
}

export default RenderMapIndex;
