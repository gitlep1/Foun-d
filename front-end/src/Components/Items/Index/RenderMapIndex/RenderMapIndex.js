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
	console.log(selected)

  return (
    <section id="mapIndexOuterContainer">
      <section id="mapIndexInnerContainer">
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName="map-container"
        >
					{foundItems.map((item, idx) => {
						return (
							<MarkerF 
								key={idx}
								position={{lat: Number(item.latitude), lng: Number(item.longitude) }}
								onClick={() => {setSelected(item)}}
								title={`${item.itemname}`}
								icon={{ url: favicon }}
							/>
						)
					})}
					{selected !== null ? (<InfoWindow 
					onCloseClick={() => {setSelected(null)}} 
					position={{lat: Number(selected.latitude), lng: Number(selected.longitude)}}>
						<div>
							<h2>{selected.itemname}</h2>
							<h6>Status: {selected.status}</h6>
							<img alt='item-onMap' width='80px' height='80px' src={`${selected.itemimg}`}/>
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
};

export default RenderMapIndex;
