import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const NewsCarousel = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://news-guideai.portos.site/news', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            keyword: "Jobs",
            location: "India",
            jobsFilter: true,
            page: 1,
            count: 100
          }),
        });
        const data = await response.json();
        setArticles(data.articles.results);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  if (articles.length === 0) {
    return <div className="text-center">Loading news...</div>;
  }

  const article = articles[currentIndex];

  return (
    <div className="position-relative w-100 mx-auto" style={{ maxWidth: '800px' }}>
      <Card className="overflow-hidden">
        <Card.Img variant="top" src={article.image || "/api/placeholder/600/400"} alt={article.title} style={{ height: '300px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{new Date(article.dateTime).toLocaleDateString()}</Card.Subtitle>
          <Card.Text className="text-truncate">{article.body}</Card.Text>
        </Card.Body>
      </Card>
      <button
        onClick={prevSlide}
        className="btn btn-dark position-absolute start-0 top-50 translate-middle-y"
        style={{ left: '-50px' }}
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="btn btn-dark position-absolute end-0 top-50 translate-middle-y"
        style={{ right: '-50px' }}
      >
        &gt;
      </button>
      <div className="position-absolute bottom-0 start-50 translate-middle-x pb-3 d-flex">
        {articles.map((_, index) => (
          <div
            key={index}
            className={`rounded-circle mx-1 ${
              index === currentIndex ? 'bg-primary' : 'bg-secondary'
            }`}
            style={{ width: '10px', height: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;