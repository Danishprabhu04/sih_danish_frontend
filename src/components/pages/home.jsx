import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CollapsibleExample from '../navbar'; // Import CollapsibleExample component
import Chatbot from './chatbot'; // Import Chatbot component

// Define global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  :root {
    --bs-gutter-x: -11.5rem; /* Custom gutter width */
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const HomeContainer = styled.div`
  background-color: #10053D;
  min-height: 100vh;
  color: #ffffff; /* Set the text color to white */
  margin: 0;
  padding: 80px;
  position: relative; /* Ensure child elements can be positioned absolutely */
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem; /* Increase the gap between the two images */
`;

const LargeBanner = styled.img`
  max-width: 400px;
  height: auto;
`;

const SmallBanner = styled.img`
  padding-bottom: 200px;
  max-width: 100px;
  height: auto;
`;

const TextContainer = styled.div`
  flex: 2;
  font-size: 35px;
  padding-right: 4rem; /* Increase padding-right to create more space between text and image */
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentSection = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for additional cards */
  justify-content: space-around;
  padding-top: 2rem;
`;

const ContentCard = styled.div`
  width: 20%;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  color: #000; /* Ensure the text color is black */
  margin-bottom: 2rem; /* Space below each card */
   fontFamily: 'Inter, sans-serif',
`;

const CardImage = styled.img`
  align-content: center;
  margin-bottom: 20px;
  padding-top: 20px;
  width: 100px;
`;

const CardText = styled.p`
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  fontFamily: 'Inter, sans-serif',
`;

const Heading = styled.h2`
  text-align: center;
  margin-top: 2rem;
  color: #fff;
  width: 100%; /* Ensure the heading takes full width */
  fontFamily: 'Inter, sans-serif',
`;

const AdditionalCardsSection = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for additional cards */
  justify-content: center;
  gap: 8.0rem; /* Optional: add spacing between cards */
`;

const AboutUsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  margin-top: 2rem;
`;

const AboutUsImage = styled.img`
  max-width: 300px;
  height: auto;
`;

const AboutUsContent = styled.div`
  flex: 1;
  margin-left: 2rem;
`;

const AboutUsTitle = styled.h2`
  color: #fff;
  margin-bottom: 1rem;
`;

const AboutUsText = styled.p`
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TryItNowButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: green;
  }
`;

const LetsTalkButton = styled.button`
  padding: 15px 35px; 
  font-size: 20px;
  border-radius: 12px;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: yellow;
  }
`;

const HighlightedText = styled.span`
  font-size: 4rem; /* Adjust size as needed */
  color: #0dcaf0; /* Adjust color as needed */
  font-weight: bold; /* Optional: adjust weight */
`;

function Home() {
  const [showChatbot, setShowChatbot] = useState(false); // Initialize state for chatbot visibility

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot); // Toggle chatbot visibility
  };

  return (
    <>
      <GlobalStyle />
      <CollapsibleExample /> {/* Include CollapsibleExample at the top */}
      <HomeContainer>
        {/* Hero Section with text and images in the same row */}
        <RowContainer>
          {/* Left side - Text and Button */}
          <TextContainer>
            <h1 className="display-1 font-weight-bold">
             Fuel your <HighlightedText>Knowledge</HighlightedText> with expert guidance to advance your <HighlightedText>Career</HighlightedText> and achieve long-term professional <HighlightedText>Success</HighlightedText>.            </h1>
            <LetsTalkButton onClick={toggleChatbot}>
              Let's Talk
            </LetsTalkButton>
          </TextContainer>

          {/* Right side - Images */}
          <BannerContainer>
            <LargeBanner src="src/assets/banner.png" alt="Large Banner" />
            <SmallBanner src="src/assets/banner2.png" alt="Small Banner" />
          </BannerContainer>
        </RowContainer>

        {/* Conditionally render the Chatbot */}
        {showChatbot && <Chatbot onClose={toggleChatbot} />}  {/* This will render the chatbot if showChatbot is true */}

        {/* Existing Content Section */}
        <ContentSection>
          <ContentCard>
            <CardImage src="src/assets/growth.png" alt="Expert Mentor" />
            <CardText>Expert Mentor</CardText>
          </ContentCard>
          <ContentCard>
            <CardImage src="src/assets/videoconference.png" alt="Class" />
            <CardText>Class</CardText>
          </ContentCard>
          <ContentCard>
            <CardImage src="src/assets/progress.png" alt="Growth" />
            <CardText>Growth</CardText>
          </ContentCard>
          <ContentCard>
            <CardImage src="src/assets/testing.png" alt="Test" />
            <CardText>Test</CardText>
          </ContentCard>
        </ContentSection>
        <br></br>
        {/* New Cards Section */}
        <Heading>Choose Your Career</Heading>
        <br></br>
        <AdditionalCardsSection>
          <ContentCard>
            <CardImage src="src/assets/Choose your Career.png" alt="Career Option 1" />
            <CardText>Career Option 1</CardText>
          </ContentCard>
          <ContentCard>
            <CardImage src="src/assets/choose.png" alt="Career Option 2" />
            <CardText>Career Option 2</CardText>
          </ContentCard>
        </AdditionalCardsSection>
    
        {/* About Us Section */}
        <AboutUsSection>
          <AboutUsImage src="src/assets/about us.png" alt="About Us" />
          <AboutUsContent>
            <AboutUsTitle>About Us</AboutUsTitle>
            <AboutUsText>
              At our core, we are passionate educators and industry experts dedicated to empowering individuals on their career journeys. With years of experience in various fields, we understand the challenges and opportunities in today's dynamic job market. Our mission is to provide cutting-edge, practical knowledge and skills that bridge the gap between academic learning and real-world application. We believe in personalized learning experiences, tailoring our approach to meet the unique needs of each student. Our team of mentors and instructors are committed to fostering a supportive, innovative learning environment that encourages growth, creativity, and professional development. Join us in shaping your future and unlocking your full potential.
            </AboutUsText>
          </AboutUsContent>
        </AboutUsSection>
      </HomeContainer>
    </>
  );
}

export default Home;
