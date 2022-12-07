import "./RenderMapIndex.scss";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import favicon from "../../../../Images/faviconmap.ico"

const RenderMapIndex = ({ foundItems, user, authenticated }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
return <Map foundItems={foundItems}/>;
};
function Map({foundItems}) {
	const navigate = useNavigate()
  const center = useMemo(() => ({ lat: 40.730610, lng: -73.935242
	}), []);

	const [selected, setSelected] = useState(null)
	const test = [
		{ lat: 40.6729662, lng: -73.9761605 },
		{ lat: 40.828549, lng: -73.904656 },
		{ lat: 40.7402996, lng: -73.9357344 },
		{ lat: 40.8619216, lng: -73.8982491 },
		{ lat: 40.6899545, lng: -73.9928505 },
		{ lat: 40.7346527, lng: -74.0081074 },
		{ lat: 40.792018,  lng: -73.969915 },
		{ lat: 40.711571, lng: -73.9619263 },
	]


  return (
    <section id="mapIndexOuterContainer">
      <section id="mapIndexInnerContainer">
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName="map-container"
        >
					{foundItems.map((marker, idx) => {
						marker['lat'] = test[idx].lat
						marker['lng'] = test[idx].lng
						return (
							<MarkerF 
								key={idx}
								position={{lat: marker.lat, lng: marker.lng }}
								onClick={() => {setSelected(marker)}}
								title={'Marker Test'}
								icon={{ url: favicon }}
							/>
						)
					})}
					{selected !== null ? (<InfoWindow 
					onCloseClick={() => {setSelected(null)}} 
					position={{lat: selected.lat, lng: selected.lng}}>
						<div>
							<h2>{selected.itemname}</h2>
							<h6>Status: {selected.status}</h6>
							<img alt='item-onMap' width='100px' height='100px' src={`${selected.itemimg}`}/>
							<p>Category: {selected.category}</p>
							<p>{selected.description ? `Description: ${selected.description}` : ''}</p>
							<Button
                variant="success"
                onClick={() => {
                  navigate(`/show/${selected.id}`);
                }}
              >
                More Info
              </Button>
						</div>
					</InfoWindow>) : null}
        </GoogleMap>
      </section>
    </section>
  );
}

export default RenderMapIndex;
