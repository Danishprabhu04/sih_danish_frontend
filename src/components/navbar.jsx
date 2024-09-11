import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Inline styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#10053D',
    padding: '10px 20px',
    color: 'white',
  },
  navbarLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '50px', // Adjust as needed
    height: '50px', // Adjust as needed
    marginRight: '10px',
  },
  highlight: {
    color: '#17a2b8', // Light blue color
  },
  navbarCenter: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  navLink: {
    color: 'white',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'color 0.3s',
    fontFamily: 'Inter, sans-serif',
  },
  navLinkHover: {
    color: '#17a2b8', // Light blue color on hover
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
  },
  dropbtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    fontFamily: 'Inter, sans-serif',
  },
  dropdownContent: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#10053D',
    minWidth: '160px',
    zIndex: 1,
  },
  dropdownContentLink: {
    color: 'white',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
  },
  dropdownContentLinkHover: {
    backgroundColor: '#575757',
  },
  dropdownOpen: {
    display: 'block',
  },
  navbarRight: {
    display: 'flex',
    alignItems: 'center',
  },
  profileIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginLeft: '10px',
  },
  searchBarContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '15px',
    position: 'relative',
  },
  searchBar: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    right: '0',
    backgroundColor: 'white',
    color: '#10053D',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    width: '200px', // Adjust width as needed
  },
  searchBarVisible: {
    display: 'block',
  },
  searchIcon: {
    cursor: 'pointer',
    fontSize: '20px',
    color: 'white',
    fontFamily: 'Inter, sans-serif',
  },
};

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const toggleSearchBar = () => {
    setSearchVisible(prevState => !prevState);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarLeft}>
        <img src="src\assets\logo (2).png" alt="Logo" style={styles.logo} /> {/* Replace with your logo path */}
        <h1>Guide <span style={styles.highlight}>AI</span></h1>
      </div>
      <div style={styles.navbarCenter}>
        <a href="./" style={styles.navLink}>Home</a>
        <div style={styles.dropdown}>
          <button style={styles.dropbtn} onClick={toggleDropdown}>Student</button>
          <div style={{ ...styles.dropdownContent, ...(dropdownOpen ? styles.dropdownOpen : {}) }}>
            <a href="./tenth" style={styles.dropdownContentLink}>Class 10</a>
            <a href="./twelth" style={styles.dropdownContentLink}>Class 12</a>
            <a href="./domain" style={styles.dropdownContentLink}>College</a>
          </div>
        </div>
        <a href="/mentorship" style={styles.navLink}>Mentorship</a>
        <a href="./blog" style={styles.navLink}>Blog</a>
      </div>
      <div style={styles.navbarRight}>
        <div style={styles.searchBarContainer}>
          <FontAwesomeIcon
            icon={faSearch}
            style={styles.searchIcon}
            onClick={toggleSearchBar}
          />
          <input
            type="text"
            placeholder="Search..."
            style={{ ...styles.searchBar, ...(searchVisible ? styles.searchBarVisible : {}) }}
          />
        </div>
        <img src="src\assets\user (1).png" alt="Profile" style={styles.profileIcon} href="#" />
      </div>
    </nav>
  );
}

export default Navbar;
