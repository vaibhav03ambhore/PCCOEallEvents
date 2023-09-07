import React from 'react';
import '../../pages_css/Event_Page_CSS/Header.css';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';

const Header = ({ scrollToSection , searchQuery , onSearchInputChange}) => {
  const handleDropdownChange = selectedOption => {
    scrollToSection(selectedOption.value);
  };

  return (
    <div className="e-header-container">
      <div className="e-header">
        <Dropdown onChange={handleDropdownChange} />
        <SearchBar 
           searchQuery={searchQuery}
           onSearchInputChange={onSearchInputChange}
        />
      </div>
    </div>
  );
};

export default Header;
