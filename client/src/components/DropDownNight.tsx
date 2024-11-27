import "../styles/DropdownNight.css";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";

const DropDownNight = ({ options }: { options: string[] }) => {
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
          {options.map((option) => (
            <ul className="list-item" key={option}>
              {option}
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownNight;
