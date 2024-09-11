import React from 'react';

// Styles for the modal and elements
const styles = {  
  card: {
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
    backdropFilter: 'blur(5px)', // Apply blur effect to the background
    
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '500px', // Adjust the width
    height: '620px', // Adjust the height
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    overflowY: 'auto', // Add scroll if content overflows
    fontFamily: 'Inter, sans-serif',
  },
  modalHeading: {
    fontSize: '20px',
    marginBottom: '15px',
  },
  modalSubheading: {
    fontSize: '12px',
    marginBottom: '20px',
    color: '#555',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  label: {
    textAlign: 'left',
    marginBottom: '5px',
    fontSize: '12px',
    color: '#333',
  },
  input: {
    padding: '8px',
    fontSize: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
  },
  textarea: {
    padding: '8px',
    fontSize: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    height: '80px',
  },
  submitButton: {
    padding: '8px 16px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
  },
  closeButton: {
    marginTop: '15px',
    padding: '8px',
    backgroundColor: '#ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

const PopupModal = () => {
  return (
    <div>
      {/* Card with direct content display */}
      <div style={styles.card}>
        <h3>Explore About the Domain!</h3>
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalHeading}>Explore about the Domain you are Looking for !!</h2>
            <p style={styles.modalSubheading}>
              Explore a specific area of interest, ask questions, and uncover new insights. What domain are you eager
              to explore?
            </p>

            {/* Form content inside modal */}
            <form style={styles.form}>
              <label style={styles.label}>Name :</label>
              <input type="text" placeholder="Enter your Name" style={styles.input} />

              <label style={styles.label}>Chosen Career :</label>
              <input type="text" placeholder="College" style={styles.input} />

              <label style={styles.label}>Domain :</label>
              <input type="text" placeholder="Enter your Domain" style={styles.input} />

              <label style={styles.label}>Skills Known :</label>
              <select style={styles.input}>
                <option value="">Value</option>
                <option value="skill1">Skill 1</option>
                <option value="skill2">Skill 2</option>
              </select>

              <label style={styles.label}>Description :</label>
              <textarea placeholder="Briefly explain about your skills" style={styles.textarea}></textarea>

              <button type="submit" style={styles.submitButton}>
                Submit
              </button>
            </form>

            {/* Close button */}
            <button style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
