import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/storm-advisory";

const StormMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="location-icon-storm" />
    </div>
  );
};

export default StormMarker;