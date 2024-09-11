import React, { useState } from 'react';
import { Card, Carousel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const YouTubeCarousel = () => {
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchVideos = async () => {
    if (!keyword.trim()) return;
    setIsLoading(true);

    try {
      // Construct query parameter
      const params = new URLSearchParams({
        keyword: keyword,
      });

      // Fetch videos from the provided URL with query parameters
      const response = await fetch(`https://utube-guideai.portos.site/videos?${params.toString()}`);
      const data = await response.json();
      setVideos(data || []); // Adjust based on your actual response structure
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchVideos();
  };

  return (
    <div className="container mt-4">
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-3" controlId="searchKeyword">
          <Form.Label>Search Videos</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="text"
              placeholder="Enter keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button variant="primary" type="submit" className="ms-2">
              Search
            </Button>
          </div>
        </Form.Group>
      </Form>

      {isLoading && <p>Loading videos...</p>}

      {!isLoading && videos.length > 0 && (
        <Carousel>
          {videos.map((video) => (
            <Carousel.Item key={video.id}>
              <Card>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
                <Card.Body>
                  <Card.Title>{video.title}</Card.Title>
                  <Card.Text>{video.channel}</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      {!isLoading && videos.length === 0 && keyword && (
        <p>No videos found. Try a different keyword.</p>
      )}
    </div>
  );
};

export default YouTubeCarousel;
