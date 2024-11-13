import "../style/dropdown.css";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";

const DropDown = ({ options }: { options: string[] }) => {
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
          <ul>
            {options.map((option) => (
              <li className="listItem" key={option}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
