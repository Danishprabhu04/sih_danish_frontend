import React, { useState } from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap';
import Navbar from '../navbar';

const VideoCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoId, setVideoId] = useState('');

  // Function to open modal with selected video
  const handleOpenModal = (videoId) => {
    setVideoId(videoId);
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setVideoId('');
    setShowModal(false);
  };

  return (
    <>
      {/* YouTube Video Carousel */}
      <Carousel>
        <Navbar />
        {/* First Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_1/0.jpg"
            alt="First slide"
            onClick={() => handleOpenModal('YOUTUBE_VIDEO_ID_1')}
          />
          <Carousel.Caption>
            <h3>First Video</h3>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_2/0.jpg"
            alt="Second slide"
            onClick={() => handleOpenModal('YOUTUBE_VIDEO_ID_2')}
          />
          <Carousel.Caption>
            <h3>Second Video</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_2/0.jpg"
            alt="Second slide"
            onClick={() => handleOpenModal('YOUTUBE_VIDEO_ID_2')}
          />
          <Carousel.Caption>
            <h3>Second Video</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_2/0.jpg"
            alt="Second slide"
            onClick={() => handleOpenModal('YOUTUBE_VIDEO_ID_2')}
          />
          <Carousel.Caption>
            <h3>Second Video</h3>
          </Carousel.Caption>
        </Carousel.Item>


        {/* Add more slides as needed */}
      </Carousel>

      {/* Modal to play YouTube video */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body className="text-center">
          {videoId && (
            <iframe
              width="100%"
              height="400px"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video player"
            ></iframe>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoCarousel;
