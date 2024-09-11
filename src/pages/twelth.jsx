import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Chatbot from './chatbot';

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
  tryNowButtonContainer: {
    marginTop: '20px',
  },
  tryNowButton: {
    backgroundColor: 'white',
    color: 'black',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.3s, transform 0.3s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Inter, sans-serif',
  },
  tryNowButtonHover: {
    backgroundColor: 'yellow',
    transform: 'scale(1.05)',
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
  chatbotContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  },
};

const Twelth = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  // Function to toggle the chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div style={styles.body}>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.aboutSection}>
          <div style={styles.aboutImage}>
            <img src="src/assets/twelthb.png" alt="Student" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div style={styles.aboutContent}>
            <h2 style={styles.aboutContentHeading}>About</h2>
            <p>
              A brief description about the student and the course. This section can include relevant details that make
              the content engaging and informative.
            </p>
            <div style={styles.tryNowButtonContainer}>
              <button
                onClick={toggleChatbot}
                style={styles.tryNowButton}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.tryNowButtonHover)}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.tryNowButton)}
              >
                Let's talk
              </button>
            </div>
          </div>
        </div>

        <div style={styles.categories}>
          <div
            style={styles.categoryCard}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.categoryCardHover)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.categoryCard)}
          >
            <img src="src/assets/tenth1.png" alt="Biology" style={styles.categoryImage} />
            <p style={styles.categoryText}>Biology</p>
          </div>
          <div
            style={styles.categoryCard}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.categoryCardHover)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.categoryCard)}
          >
            <img src="src/assets/tenth2.png" alt="Computer" style={styles.categoryImage} />
            <p style={styles.categoryText}>Computer</p>
          </div>
          <div
            style={styles.categoryCard}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.categoryCardHover)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.categoryCard)}
          >
            <img src="src/assets/tenth3.png" alt="Commerce" style={styles.categoryImage} />
            <p style={styles.categoryText}>Commerce</p>
          </div>
        </div>
      </div>

      {showChatbot && (
        <div style={styles.chatbotContainer}>
          <Chatbot onClose={toggleChatbot} /> {/* Pass toggleChatbot as onClose prop */}
        </div>
      )}
    </div>
  );
};

export default Twelth;
