import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import NewsCarousel from "../components/news_dashboard";
import YouTubeCarousel from "../components/yt-dashboard";

const styles = {
  container: {
    fontFamily: 'Inter, sans-serif',
    padding: '20px',
    backgroundColor: '#10053D', // Updated background color
    minHeight: '100vh',
    color: 'white', // Updated text color to contrast with the dark background
  },
  heading: {
    color: '#ffffff', // Updated color for heading
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff', // Form background color for contrast
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontSize: '16px',
    marginBottom: '5px',
    color: '#10053D', // Updated label color to match the background
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    boxSizing: 'border-box',
    height: '150px',
  },
  button: {
    backgroundColor: '#ffffff', // Button background color for contrast
    color: '#10053D', // Button text color
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Smooth transition on hover
    width: '100%',
    ':hover': {
      backgroundColor: '#17a2b8', // Color change on hover
    },
  },
  responseText: {
    marginTop: '20px',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#ffffff', // Response text color
    whiteSpace: 'pre-wrap', // Makes sure text wraps properly
    wordWrap: 'break-word', // Breaks long words properly
  },
  responseHeading: {
    color: '#ffffff', // Response heading color
    marginTop: '20px',
    fontSize: '20px',
  },
};

const GuidanceForm = () => {
  const [name, setName] = useState("");
  const [chosenCareer, setChosenCareer] = useState("");
  const [domain, setDomain] = useState("");
  const [skillsKnown, setSkillsKnown] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/generate", {
        name,
        chosen_career: chosenCareer,
        domain,
        skills_known: skillsKnown,
        description,
      });
      setResponse(result.data.response);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponse("Error occurred while generating guidance.");
    }
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Career Guidance Form</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Chosen Career:</label>
            <input
              type="text"
              value={chosenCareer}
              onChange={(e) => setChosenCareer(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Domain:</label>
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Skills Known:</label>
            <input
              type="text"
              value={skillsKnown}
              onChange={(e) => setSkillsKnown(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={styles.textarea}
            />
          </div>
          <button
            type="submit"
            style={styles.button}
          >
            Generate Guidance
          </button>
        </form>
        {response && (
          <>
            <h2 style={styles.responseHeading}>Generated Guidance:</h2>
            <p style={styles.responseText}>{response}</p>
          </>
        )}
      </div>
      <NewsCarousel/>
      <YouTubeCarousel/>
    </>
  );
};

export default GuidanceForm;
