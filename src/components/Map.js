import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import StormMarker from "./StormMarker";

const Map = ({ center, zoom, eventData }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    if (ev.categories[0].id === 10) {
      ev.geometries.map((geo) => {
        console.log(geo.coordinates);
        return (
          <LocationMarker
            lat={geo.coordinates[1]}
            lng={geo.coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      });
    }
    return null;
  });



  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAsiz6EMDaf0FLMMoiiFGQhfSh8TXGa2oA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 45.980537,
    lng: 7.641618,
  },
  zoom: 6,
};

export default Map;
