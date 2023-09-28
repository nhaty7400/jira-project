import React, { useState } from 'react';
import css from "./dropdown.module.scss";

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void; // Callback for handling selection
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen(prevIsOpen => !prevIsOpen);
  };
  

  const handleOptionClick = (option: string) => {
    setSelectedValue(option);
    onSelect(option); // Call the provided callback with the selected option
    setIsOpen(false);
  };

  return (
    <div className={css["dropdown"]}>
      <button className={css["input-with-arrow"]} onClick={(event) => toggleDropdown(event)}>{selectedValue ? selectedValue : 'Select an option'}</button>
      {isOpen && (
        <div className={css["dropdown-content"]}>
          {options.map((option, index) => (
            <a key={index} href="#" onClick={() => handleOptionClick(option)}>
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
