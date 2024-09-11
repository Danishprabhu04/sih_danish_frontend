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
                <Card.Img
                  variant="top"
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} // Thumbnail URL
                  alt={video.title}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{video.title}</Card.Title>
                  <Card.Text>{video.channel}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank', 'noopener,noreferrer')}
                  >
                    Watch on YouTube
                  </Button>
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
