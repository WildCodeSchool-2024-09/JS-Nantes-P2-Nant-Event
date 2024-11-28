import "../styles/DropdownNight.css";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropDownNight = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="dropdown-container">
      <button type="button" onClick={toggleDropdown} className="drop-btn-night">
        THEMES
        {isExpanded && <CaretUp size={24} />}
        {!isExpanded && <CaretDown size={24} />}
      </button>
      {isExpanded && (
        <div className="ext-item1">
          <Link className="link-header-eventsnight" to="/Music">
            {" "}
            Evénements Musicaux
          </Link>
          <Link className="link-header-eventsnight" to="/Sport">
            {" "}
            Evénements Sportifs
          </Link>
          <Link className="link-header-eventsnight" to="/Art">
            {" "}
            Evénements artistiques
          </Link>
          <Link className="link-header-eventsnight" to="/Show">
            Spectacles
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropDownNight;
