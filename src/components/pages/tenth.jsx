import React, { useState } from 'react';
import Navbar from '../navbar';
import Card1 from './tenthcard1';


// Styles for the modal and elements
const styles = {
  body: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '#10053D',
    minHeight: '100vh',
    color: 'white',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  aboutSection: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  aboutImage: {
    width: '300px',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  aboutContent: {
    marginLeft: '30px',
    maxWidth: '600px',
  },
  aboutContentHeading: {
    fontSize: '36px',
    marginBottom: '20px',
    fontFamily: 'Inter, sans-serif',
  },
  categories: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '50px',
    flexWrap: 'wrap',
  },
  categoryCard: {
    backgroundColor: 'white',
    color: '#10053D',
    width: '220px',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    margin: '10px',
    cursor: 'pointer', // Make it look clickable
    border: 'none',
    outline: 'none',
  },
  categoryCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
  categoryImage: {
    width: '120px',
    height: '120px',
    marginBottom: '10px',
    borderRadius: '10px',
  },
  categoryText: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
    fontFamily: 'Inter, sans-serif',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    width: '400px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  modalHeading: {
    fontSize: '24px',
    marginBottom: '20px',
    fontFamily: 'Inter, sans-serif',
  },
  modalSubheading: {
    fontSize: '14px',
    marginBottom: '30px',
    color: '#555',
    fontFamily: 'Inter, sans-serif',
  },
  closeButton: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

const Tenth = () => {
  const [showModal, setShowModal] = useState(null);

  // Function to open the modal
  const openModal = (content) => {
    setShowModal(content);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <div style={styles.body}>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.aboutSection}>
          <div style={styles.aboutImage}>
            <img src="src/assets/tenth.png" alt="Student" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div style={styles.aboutContent}>
            <h2 style={styles.aboutContentHeading}>About</h2>
            <p>
              A brief description about the student and the course. This section can include relevant details that make
              the content engaging and informative.
            </p>
          </div>
        </div>

        <div style={styles.categories}>
          <div 
            style={styles.categoryCard} 
            onClick={() => openModal(<Card1 />)}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.categoryCardHover)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.categoryCard)}
          >
            <img src="src/assets/tenth1.png" alt="Science" style={styles.categoryImage} />
            <p style={styles.categoryText}>Science</p>
          </div>

          <div 
            style={styles.categoryCard} 
            onClick={() => openModal(<Card2 />)}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.categoryCardHover)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.categoryCard)}
          >
            <img src="src/assets/tenth2.png" alt="Computer" style={styles.categoryImage} />
            <p style={styles.categoryText}>Computer</p>
          </div>

          <div 
            style={styles.categoryCard} 
            onClick={() => openModal(<Card3 />)}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.categoryCardHover)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.categoryCard)}
          >
            <img src="src/assets/tenth3.png" alt="Commerce" style={styles.categoryImage} />
            <p style={styles.categoryText}>Commerce</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            {showModal}
            <button onClick={closeModal} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tenth;
