import React from 'react';
import Navbar from '../navbar'; // Adjust the path if necessary

const Blog = () => {
  // Sample data for cards
  const cardData = new Array(12).fill({
    title: "Card Title",
    description: "Card Description",
  });

  return (
    <div style={{ backgroundColor: '#10053D', padding: '20px' }}>
      <Navbar /> {/* Include Navbar component here */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ textAlign: 'center', color: 'White' }}>Guide AI Blogs</h1>
        <input
          type="text"
          placeholder="Search..."
          style={{ padding: '10px', width: '80%', maxWidth: '600px' }}
        />
        <button
          style={{
            padding: '10px 20px',
            marginLeft: '10px',
            backgroundColor: '#56FBDA',
            border: 'none',
            color: '#3A3A3A',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
