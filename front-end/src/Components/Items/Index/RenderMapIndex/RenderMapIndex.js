import "./RenderMapIndex.scss";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const RenderMapIndex = ({ foundItems, user, authenticated }) => {
  return (
    <section id="mapIndexOuterContainer">
      <section id="mapIndexInnerContainer">
        <h1>This is where the map goes</h1>
      </section>
    </section>
  );
};

export default RenderMapIndex;
