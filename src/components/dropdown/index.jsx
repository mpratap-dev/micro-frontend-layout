import React, { useEffect, useState } from 'react';
import navLinks, { getSortedNavlinks } from '../../utils/navlinks';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import If from '../common/If';
import useStyles from './styles';
import SearchInput from '../common/SearchInput/index.jsx';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const DashboardDropdown = () => {
  const classes = useStyles();
  const [filteredLinks, setLinks] = useState(getSortedNavlinks(navLinks));
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  const closeDropdown = () => {
    setDropdownOpen(false);
    setSearchTerm('');
  }

  const handleInputClick = () => {
    setDropdownOpen(true);
  }

  useEffect(() => {
    if(searchTerm) {
      const matchedLinks = navLinks.filter(link => link.label.toLowerCase().includes(searchTerm));
      return setLinks(matchedLinks);
    }
    setLinks(navLinks);
  }, [searchTerm]);

  return (
    <div className={`${classes.container} js-dashboard-search`}>
      <SearchInput
        handleInputClick={handleInputClick}
        handleSearch={handleSearch} 
        value={searchTerm}
        placeholder="Search dashboard..."
      />
      
      <If condition={isDropdownOpen}>
        <ClickAwayListener onClickAway={closeDropdown}>
          <div className={classes.menu}>
            <If 
              condition={filteredLinks.length}
              defaultCase={(
                <MenuItem className={`${classes.items} ${classes.noResult}`}>
                    No result found
                </MenuItem>
              )}
            >
              {filteredLinks.map(({path, label, menuItem}) => {
                const firstMenu = Array.isArray(menuItem) && menuItem[0] && menuItem[0].path;
                const URL = firstMenu ? `${path}${firstMenu}` : `${path}`;
          
                return (
                <Link to={URL} key={label} className={classes.links} onClick={closeDropdown}>
                  <MenuItem value={label} className={classes.items}>
                    {label}
                  </MenuItem>
                </Link>
              )})}
            </If>
          </div>
        </ClickAwayListener>
      </If>
    </div>
  );
}

export default DashboardDropdown;
