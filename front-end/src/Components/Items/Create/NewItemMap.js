import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import favicon from "../../../Images/faviconmap.ico"
import './NewItemMap.scss'

const NewItemMap = ({getCoordinate}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
return <Map getCoordinate={getCoordinate}/>;
};
function Map({getCoordinate}) {
  const center = useMemo(() => ({ lat: 40.730610, lng: -73.935242
	}), []);
	const [coordinationTest, setCoordinationTest] = useState([])

  return (
    <section id="mapIndexOuterContainer">
      <section id="mapIndexInnerContainer">
			<h4>Click on this map to pin the location of the item</h4>
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName="map-container"
					onClick={(event) => {
						setCoordinationTest([{ lat:event.latLng.lat(), lng:event.latLng.lng()}])
						getCoordinate(event.latLng.lat(), event.latLng.lng() )
					}}
        >
					{coordinationTest.map((marker, idx) => {
						return (
							<MarkerF 
								key={idx}
								position={{lat: marker.lat, lng: marker.lng }}
								title={'Marker Test'}
								icon={{ url: favicon }}
							/>
						)
					})}
        </GoogleMap>
      </section>
    </section>
  );
};

export default NewItemMap;