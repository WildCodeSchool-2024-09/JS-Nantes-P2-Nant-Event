import "../styles/Dropdown.css";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="dropdown-container">
      <button type="button" onClick={toggleDropdown} className="drop-btn">
        THEMES
        {isExpanded && <CaretUp size={24} />}
        {!isExpanded && <CaretDown size={24} />}
      </button>
      {isExpanded && (
        <div className="extItem1">
          <Link className="link-header-events" to="/Music">
            {" "}
            Evénements Musicaux
          </Link>
          <Link className="link-header-events" to="/Sport">
            {" "}
            Evénements Sportifs
          </Link>
          <Link className="link-header-events" to="/Art">
            {" "}
            Evénements artistiques
          </Link>
          <Link className="link-header-events" to="/Show">
            Spectacles
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropDown;
